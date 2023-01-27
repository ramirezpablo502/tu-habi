import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { formatCurrency } from '../../../helpers'
import { toast } from 'react-toastify'
import { resetStore, setAddress, setAmenities, setElevator, setEmail, setFinished, setFloor, setFullName, setParking, setPhoto, setPrice } from '../../../redux/actions/formActions'

import styles from './Content.module.scss'
import propTypes from 'prop-types'

const Content = (props) => {
  const navigate = useNavigate()
  const amenities = props?.amenities ? props?.amenities.filter(e => e.active === true) : [{ title: 'Sin amenidades' }]

  const redirect = () => {
    navigate('/venta/datos-cliente')
  }

  const renderParking = () => {
    let text = ''
    if (props.parking === 'No es techado') {
      text = 'Si pero no es techado'
    } else if (props.parking === 'Es techado') {
      text = 'Si y esta techado'
    } else {
      text = 'Este apartamento no cuenta con estacionamiento'
    }

    return text
  }

  const sendData = () => {
    const payload = {
      finished: props.finished,
      fullname: props.fullname,
      email: props.email,
      address: props.address,
      floor: props.floor,
      amenities: props.amenities,
      parking: props.parking,
      price: props.price,
      photo: props.photo,
      elevator: props.elevator
    }

    console.log('Estos datos son los que se enviarán al backend:', payload)
    toast.success('Tu solicitud ha sido enviada y nuestro equipo la esta revisando. En un lapso de 48 horas nos comunicaremos contigo.')
    clearData()
    setTimeout(() => {
      navigate('/')
    }, 100)
  }

  const clearData = () => {
    props.setFullName('')
    props.setEmail('')
    props.setAddress('')
    props.setFloor('')
    props.setAmenities([{
      title: 'Zona BBQ',
      active: false
    }, {
      title: 'Salón comunal',
      active: false
    }, {
      title: 'Parque de juegos',
      active: false
    }])
    props.setParking('')
    props.setPrice('')
    props.setPhoto('')
    props.setElevator('')
    props.setFinished(false)
  }

  if (!props.finished) {
    return (
      <section className={styles.container_without}>
        <h1>Aún no tienes un resumen de venta. Crea un nuevo dando <span onClick={redirect}>click aquí</span></h1>
      </section>
    )
  }

  return (
    <section className={styles.container}>
      <h1>Resumen de tu venta</h1>
      <hr />
      <br />
      <div className={styles.flex_container}>
        <div className={styles['--content-image']}>
          <img src={props.photo} alt='Departamento en venta' />
        </div>
        <div className={styles['--content-cards']}>
          <div>
            <p className={styles.label}>Nombre del propietario</p>
            <p className={styles.text}>{props.fullname}</p>
          </div>
          <div>
            <p className={styles.label}>Correo electronico del propietario</p>
            <p className={styles.text}>{props.email}</p>
          </div>
          <div>
            <p className={styles.label}>Dirección del inmueble</p>
            <p className={styles.text}>{props.address}</p>
          </div>
          <div>
            <p className={styles.label}>Amenidades</p>
            {
              amenities.length > 0
                ? amenities.map((e, i) => {
                  return (
                    <p key={i} className={styles.text} style={{ marginBottom: 5 }}>{e.title}</p>
                  )
                })
                : <p className={styles.text}>Este inmueble no cuenta con amenidades</p>
            }
          </div>
          <div>
            <p className={styles.label}>Número de piso</p>
            <p className={styles.text}>{props.floor}</p>
          </div>
          <div>
            <p className={styles.label}>¿Cuenta con elevador?</p>
            <p className={styles.text}>{props.elevator}</p>
          </div>
          <div>
            <p className={styles.label}>¿Cuenta con estacionamiento?</p>
            <p className={styles.text}>{renderParking()}</p>
          </div>
          <div>
            <p className={styles.label}>Precio del inmueble</p>
            <p className={styles.text}>${formatCurrency(props.price)} MXN</p>
          </div>
        </div>
      </div>
      <div className={styles.content_buttons}>
        <button className={styles.btn_secondary} onClick={() => { redirect() }}>Regresar</button>
        <button className={styles.btn_primary} onClick={() => { sendData() }}>Finalizar venta</button>
      </div>
    </section>
  )
}

const mapStateToProps = state => ({
  finished: state.formReducers.finished,
  fullname: state.formReducers.fullname,
  email: state.formReducers.email,
  address: state.formReducers.address,
  floor: state.formReducers.floor,
  amenities: state.formReducers.amenities,
  parking: state.formReducers.parking,
  price: state.formReducers.price,
  photo: state.formReducers.photo,
  elevator: state.formReducers.elevator
})

const mapDispatchToProps = (dispatch) => {
  return {
    resetStore: (value) => dispatch(resetStore(value)),
    setFullName: (value) => dispatch(setFullName(value)),
    setEmail: (value) => dispatch(setEmail(value)),
    setAddress: (value) => dispatch(setAddress(value)),
    setFloor: (value) => dispatch(setFloor(value)),
    setAmenities: (value) => dispatch(setAmenities(value)),
    setParking: (value) => dispatch(setParking(value)),
    setPrice: (value) => dispatch(setPrice(value)),
    setPhoto: (value) => dispatch(setPhoto(value)),
    setElevator: (value) => dispatch(setElevator(value)),
    setFinished: (value) => dispatch(setFinished(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)

Content.propTypes = {
  finished: propTypes.bool,
  fullname: propTypes.string,
  email: propTypes.string,
  address: propTypes.string,
  floor: propTypes.string,
  amenities: propTypes.array,
  parking: propTypes.string,
  price: propTypes.string,
  photo: propTypes.string,
  elevator: propTypes.string,
  setFullName: propTypes.func,
  setEmail: propTypes.func,
  setAddress: propTypes.func,
  setFloor: propTypes.func,
  setAmenities: propTypes.func,
  setParking: propTypes.func,
  setPrice: propTypes.func,
  setPhoto: propTypes.func,
  setElevator: propTypes.func,
  setFinished: propTypes.func,
  resetStore: propTypes.func
}
