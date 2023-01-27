import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { setPrice } from '../../../redux/actions/formActions'

import propTypes from 'prop-types'
import styles from './Steps.module.scss'
import CurrencyInput from 'react-currency-input-field'

const Step7 = (props) => {
  const navigate = useNavigate()

  const [price, setPrice] = useState(props.price)

  const params = props.params
  const disabled = !price

  const next = () => {
    navigate('/venta/fotografia')
    props.setPrice(price)
  }

  const back = () => {
    navigate('/venta/estacionamiento')
  }

  return (
    <section className={styles.container}>
      <p className={styles.label}>{params.label}</p>
      <CurrencyInput
        className={styles.input}
        type={params.input_type}
        value={price}
        decimalsLimit={2}
        onValueChange={(e) => { setPrice(e) }}
        prefix='$'
        maxLength={12}
      />
      <button disabled={disabled} className={styles.btn_primary} onClick={() => { next() }}>Siguiente</button>
      <button className={styles.btn_secondary} onClick={() => { back() }}>Anterior</button>
    </section>
  )
}

const mapStateToProps = state => ({
  price: state.formReducers.price
})

const mapDispatchToProps = (dispatch) => {
  return {
    setPrice: (value) => dispatch(setPrice(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step7)

Step7.propTypes = {
  params: propTypes.object,
  price: propTypes.string,
  setPrice: propTypes.func
}
