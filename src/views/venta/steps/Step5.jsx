import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAmenities } from '../../../redux/actions/formActions'

import propTypes from 'prop-types'
import styles from './Steps.module.scss'

const Step5 = (props) => {
  const navigate = useNavigate()

  const [amenities, setAmenities] = useState(props.amenities)

  const params = props.params

  const next = () => {
    navigate('/venta/estacionamiento')
  }

  const back = () => {
    navigate('/venta/piso')
  }

  const markChecboks = (element) => {
    const arr = amenities.map((e, i) => {
      if (e.title === element.title) {
        e.active = !e.active
      }
      return e
    })
    props.setAmenities(arr)
    setAmenities(arr)
  }

  return (
    <section className={styles.container}>
      {
        amenities.map((e, i) => {
          return (
            <div key={i} className={styles.checkbox}>
              <input type={params.input_type} checked={e.active} onChange={() => { markChecboks(e) }} />
              <p className={styles.label}>{e.title}</p>
            </div>
          )
        })
      }
      <button className={styles.btn_primary} onClick={() => { next() }}>Siguiente</button>
      <button className={styles.btn_secondary} onClick={() => { back() }}>Anterior</button>
    </section>
  )
}

const mapStateToProps = state => ({
  amenities: state.formReducers.amenities
})

const mapDispatchToProps = (dispatch) => {
  return {
    setAmenities: (value) => dispatch(setAmenities(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step5)

Step5.propTypes = {
  params: propTypes.object,
  amenities: propTypes.array,
  setAmenities: propTypes.func
}
