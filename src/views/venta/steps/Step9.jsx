import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { setElevator, setFinished } from '../../../redux/actions/formActions'
import { toast } from 'react-toastify'

import propTypes from 'prop-types'
import styles from './Steps.module.scss'

const Step9 = (props) => {
  const navigate = useNavigate()

  const [elevator, setElevator] = useState(props.elevator)

  const params = props.params
  const disabled = !elevator

  const next = () => {
    if (elevator !== '' && elevator !== 'Selecciona una opción') {
      setElevator(elevator)
      props.setElevator(elevator)
      props.setFinished(true)
      navigate('/resumen-venta')
    } else {
      toast.error('Selecciona una opción para finalizar tu registro')
    }
  }

  const back = () => {
    navigate('/venta/fotografia')
  }

  const onChangeElevator = (e) => {
    setElevator(e.target.value)
    props.setElevator(e.target.value)
  }

  return (
    <section className={styles.container}>
      <p className={styles.label}>{params.label}</p>
      <select value={elevator} onChange={(e) => { onChangeElevator(e) }}>
        <option value='Selecciona una opción'>Seleccione una opción</option>
        {
          params.options.map((option, i) => (
            <option key={i} value={option}>{option}</option>
          ))
        }
      </select>
      <button disabled={disabled} className={styles.btn_primary} onClick={() => { next() }}>Siguiente</button>
      <button className={styles.btn_secondary} onClick={() => { back() }}>Anterior</button>
    </section>
  )
}

const mapStateToProps = state => ({
  elevator: state.formReducers.elevator
})

const mapDispatchToProps = (dispatch) => {
  return {
    setElevator: (value) => dispatch(setElevator(value)),
    setFinished: (value) => dispatch(setFinished(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step9)

Step9.propTypes = {
  params: propTypes.object,
  elevator: propTypes.string,
  setElevator: propTypes.func,
  setFinished: propTypes.func
}
