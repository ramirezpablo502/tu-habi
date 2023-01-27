import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { setPhoto } from '../../../redux/actions/formActions'

import propTypes from 'prop-types'
import styles from './Steps.module.scss'
import RemoveIcon from '../../../assets/images/remove.png'

const Step8 = (props) => {
  const navigate = useNavigate()
  const imageInput = useRef(null)

  const [photo, setPhoto] = useState(props.photo)

  const params = props.params
  const disabled = !photo.length

  const next = () => {
    setPhoto(photo)
    props.setPhoto(photo)
    navigate('/venta/asensor')
  }

  const back = () => {
    navigate('/venta/precio')
  }

  const sendImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      // eslint-disable-next-line no-undef
      const reader = new FileReader()
      reader.onload = (e) => {
        props.setPhoto(e.target.result)
        setPhoto(e.target.result)
      }
      reader.readAsDataURL(event.target.files[0])
    }
  }

  const removeImage = () => {
    setPhoto('')
    props.setPhoto('')
  }

  return (
    <section className={styles.container}>
      <p className={styles.label}>{params.label}</p>
      <input
        className={styles.input}
        type={params.input_type}
        accept='.jpg, .jpeg, .png'
        ref={imageInput}
        hidden
        onChange={sendImage}
      />
      {
        photo
          ? (
            <div className={styles.content_photo}>
              <img src={RemoveIcon} className={styles['--icon']} onClick={() => { removeImage() }} />
              <img src={photo} alt='Fotografia departamento' />
            </div>)
          : (
            <div className={styles.content_image} onClick={() => imageInput.current && imageInput.current.click()}>
              <p>Agrega tu fotografía</p>
            </div>)
      }
      <button disabled={disabled} className={styles.btn_primary} onClick={() => { next() }}>Siguiente</button>
      <button className={styles.btn_secondary} onClick={() => { back() }}>Anterior</button>
    </section>
  )
}

const mapStateToProps = state => ({
  photo: state.formReducers.photo
})

const mapDispatchToProps = (dispatch) => {
  return {
    setPhoto: (value) => dispatch(setPhoto(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step8)

Step8.propTypes = {
  params: propTypes.object,
  photo: propTypes.string,
  setPhoto: propTypes.func
}
