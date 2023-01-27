import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { setParking } from '../../../redux/actions/formActions'
import { toast } from 'react-toastify'

import propTypes from 'prop-types'
import styles from './Steps.module.scss'

const Step6 = (props) => {
  const navigate = useNavigate()

  const [hasParking, setHasParking] = useState(props.parking ? 'si' : 'no')
  const [parking, setParking] = useState(props.parking)

  const params = props.params

  const next = () => {
    if (hasParking === 'no') {
      navigate('/venta/precio')
    } else {
      if (hasParking === 'si' && parking === '') {
        toast.error('Debes de seleccionar una opción para continuar de lo contrario selecciona que no tienes estacionamiento')
      } else {
        if (parking !== 'Selecciona una opción') {
          navigate('/venta/precio')
        } else {
          toast.error('Debes de seleccionar una opción para continuar de lo contrario selecciona que no tienes estacionamiento')
        }
      }
    }
  }

  const back = () => {
    navigate('/venta/amenidades')
  }

  const onChangeHasParking = (e) => {
    setHasParking(e.target.value)
    setParking('')
    props.setParking('')
  }

  const onChangeParking = (e) => {
    props.setParking(e.target.value)
    setParking(e.target.value)
  }

  return (
    <section className={styles.container}>
      <div>
        <div className={styles.label}>¿Tu apartamento tiene estacionamiento?</div>
        <select value={hasParking} onChange={(e) => { onChangeHasParking(e) }}>
          {
            params.options.map((option, i) => (
              <option key={i} value={option}>{option}</option>
            ))
          }
        </select>
        <br />
        <br />
        {
          hasParking === 'si' && hasParking !== ''
            ? (
              <select value={parking} onChange={(e) => { onChangeParking(e) }}>
                <option value='Selecciona una opción'>Selecciona una opción</option>
                <option value='Es techado'>Es techado</option>
                <option value='No es techado'>No es techado</option>
              </select>)
            : null
        }

      </div>
      <button className={styles.btn_primary} onClick={() => { next() }}>Siguiente</button>
      <button className={styles.btn_secondary} onClick={() => { back() }}>Anterior</button>
    </section>
  )
}

const mapStateToProps = state => ({
  parking: state.formReducers.parking
})

const mapDispatchToProps = (dispatch) => {
  return {
    setParking: (value) => dispatch(setParking(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step6)

Step6.propTypes = {
  params: propTypes.object,
  parking: propTypes.string,
  setParking: propTypes.func
}
