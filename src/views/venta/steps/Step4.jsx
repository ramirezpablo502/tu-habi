import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { setFloor } from '../../../redux/actions/formActions'
import { toast } from 'react-toastify'
import { soloNumbers } from '../../../helpers'

import propTypes from 'prop-types'
import styles from './Steps.module.scss'

const Step4 = (props) => {
  const navigate = useNavigate()

  const [floor, setFloor] = useState(props.floor)

  const params = props.params
  const disabled = !floor

  const next = () => {
    if (floor <= 50 && floor > 0) {
      props.setFloor(floor)
      navigate('/venta/amenidades')
    } else {
      toast.error('El número de pisos debe ser mayor a 0 pisos y menor a 50 pisos.')
    }
  }

  const back = () => {
    navigate('/venta/direccion')
  }

  return (
    <section className={styles.container}>
      <p className={styles.label}>{params.label}</p>
      <input
        type={params.input_type}
        className={styles.input}
        value={floor}
        onChange={(e) => { setFloor(e.target.value) }}
        maxLength='2'
        onKeyPress={soloNumbers}
      />
      <button className={styles.btn_primary} disabled={disabled} onClick={() => { next() }}>Siguiente</button>
      <button className={styles.btn_secondary} onClick={() => { back() }}>Anterior</button>
    </section>
  )
}

const mapStateToProps = state => ({
  floor: state.formReducers.floor
})

const mapDispatchToProps = (dispatch) => {
  return {
    setFloor: (value) => dispatch(setFloor(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step4)

Step4.propTypes = {
  params: propTypes.object,
  floor: propTypes.string,
  setFloor: propTypes.func
}
