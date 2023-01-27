import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { setFullName } from '../../../redux/actions/formActions'
import { toast } from 'react-toastify'

import propTypes from 'prop-types'
import styles from './Steps.module.scss'

const Step1 = (props) => {
  const navigate = useNavigate()

  const [fullname, setFullname] = useState(props.fullname)

  const params = props.params
  const disabled = !fullname

  const next = () => {
    const validateFullname = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/
    if (validateFullname.exec(fullname)) {
      props.setFullName(fullname)
      navigate('/venta/correo-electronico')
    } else {
      toast.error('Verifique su nombre y apellido. Solo se aceptan letras.')
    }
  }

  const back = () => {
    navigate('/')
    props.setFullName()
    props.setEmail()
    props.setAddress()
    props.setFloor()
    props.setAmenities()
    props.setParking()
    props.setPrice()
    props.setPhoto()
    props.setElevator()
  }

  return (
    <section className={styles.container}>
      <p className={styles.label}>{params.label}</p>
      <input
        type={params.input_type}
        className={styles.input}
        value={fullname}
        onChange={(e) => { setFullname(e.target.value) }}
        maxLength='40'
      />
      <button className={styles.btn_primary} disabled={disabled} onClick={() => { next() }}>Siguiente</button>
      <button className={styles.btn_secondary} onClick={() => { back() }}>Cancelar</button>
    </section>
  )
}

const mapStateToProps = state => ({
  fullname: state.formReducers.fullname
})

const mapDispatchToProps = (dispatch) => {
  return {
    setFullName: (value) => dispatch(setFullName(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step1)

Step1.propTypes = {
  params: propTypes.object,
  fullname: propTypes.string,
  setFullName: propTypes.func,
  setEmail: propTypes.func,
  setAddress: propTypes.func,
  setFloor: propTypes.func,
  setAmenities: propTypes.func,
  setParking: propTypes.func,
  setPrice: propTypes.func,
  setPhoto: propTypes.func,
  setElevator: propTypes.func
}
