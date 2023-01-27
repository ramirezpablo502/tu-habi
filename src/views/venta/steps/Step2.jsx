import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { setEmail } from '../../../redux/actions/formActions'
import { toast } from 'react-toastify'

import propTypes from 'prop-types'
import styles from './Steps.module.scss'

const Step2 = (props) => {
  const navigate = useNavigate()

  const [email, setEmail] = useState(props.email)

  const params = props.params
  const disabled = !email

  const next = () => {
    const validateEmail = /\S+@\S+\.\S+/
    if (validateEmail.exec(email)) {
      props.setEmail(email)
      navigate('/venta/direccion')
    } else {
      toast.error('El formato del correo no es válido.')
    }
  }

  const back = () => {
    navigate('/venta/datos-cliente')
  }

  return (
    <section className={styles.container}>
      <p className={styles.label}>{params.label}</p>
      <input
        type={params.input_type}
        className={styles.input}
        value={email}
        onChange={(e) => { setEmail(e.target.value) }}
        maxLength='120'
      />
      <button className={styles.btn_primary} disabled={disabled} onClick={() => { next() }}>Siguiente</button>
      <button className={styles.btn_secondary} onClick={() => { back() }}>Anterior</button>
    </section>
  )
}

const mapStateToProps = state => ({
  email: state.formReducers.email
})

const mapDispatchToProps = (dispatch) => {
  return {
    setEmail: (value) => dispatch(setEmail(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2)

Step2.propTypes = {
  params: propTypes.object,
  email: propTypes.string,
  setEmail: propTypes.func
}
