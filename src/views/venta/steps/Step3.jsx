import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAddress } from '../../../redux/actions/formActions'
import { toast } from 'react-toastify'
import { loadAsyncScript } from '../../../helpers/loadAsyncScript'

import propTypes from 'prop-types'
import styles from './Steps.module.scss'

const initMapScript = () => {
  if (window.google) {
    return Promise.resolve()
  }
  return loadAsyncScript()
}

const Step3 = (props) => {
  const navigate = useNavigate()
  const searchInput = useRef(null)

  const [address, setAddress] = useState(props.address)

  const params = props.params
  const disabled = !address

  useEffect(() => {
    initMapScript().then(() => initAutocomplete())
  }, [])

  const initAutocomplete = () => {
    if (!searchInput.current) return

    if (window.google && window.google.maps) {
      const searchBox = new window.google.maps.places.SearchBox(searchInput.current)
      searchBox.addListener('places_changed', () => onChangeDirection(searchBox))
    }
  }

  const onChangeDirection = (autocomplete) => {
    const places = autocomplete.getPlaces()
    if (places.length <= 0) return
    setAddress(places[0].formatted_address)
    props.setAddress(places[0].formatted_address)
  }

  const next = () => {
    if (address) {
      navigate('/venta/piso')
    } else {
      toast.error('El campo no puede ir vacio.')
    }
  }

  const back = () => {
    navigate('/venta/correo-electronico')
  }

  return (
    <section className={styles.container}>
      <p className={styles.label}>{params.label}</p>
      <input
        type={params.input_type}
        className={styles.input}
        value={address}
        onChange={(e) => { setAddress(e.target.value) }}
        maxLength='120'
        ref={searchInput}
        placeholder='Escribe tu dirección'
      />
      <button className={styles.btn_primary} disabled={disabled} onClick={() => { next() }}>Siguiente</button>
      <button className={styles.btn_secondary} onClick={() => { back() }}>Anterior</button>
    </section>
  )
}

const mapStateToProps = state => ({
  address: state.formReducers.address
})

const mapDispatchToProps = (dispatch) => {
  return {
    setAddress: (value) => dispatch(setAddress(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step3)

Step3.propTypes = {
  params: propTypes.object,
  address: propTypes.string,
  setAddress: propTypes.func
}
