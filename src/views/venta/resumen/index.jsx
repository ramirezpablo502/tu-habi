import { connect } from 'react-redux'
import { formatCurrency } from '../../../helpers'
import { useNavigate } from 'react-router-dom'

import styles from './Resumen.module.scss'
import propTypes from 'prop-types'
import PlaceholderImage from '../../../assets/images/placeholder.jpeg'
import LocationImage from '../../../assets/images/location.png'

const Background = (props) => {
  const navigate = useNavigate()

  const image = props.photo ? props.photo : PlaceholderImage
  const price = props.price ? props.price : '0.00'
  const address = props.address ? props.address : 'No especificada aún'
  const name = props.fullname ? props.fullname : 'No especificado aún'
  const email = props.email ? props.email : 'No especificado aún'
  const floor = props.floor ? props.floor : 'No especificado aún'
  const elevator = props.elevator ? props.elevator : 'No especificado aún'
  const amenities = props?.amenities ? props?.amenities.filter(e => e.active === true) : [{ title: 'No especificado aún' }]

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

  const redirectImage = () => {
    if (props.photo) {
      navigate('/venta/fotografia')
    }
  }

  const redirectAddress = () => {
    if (props.address) {
      navigate('/venta/direccion')
    }
  }
  const redirectFullname = () => {
    if (props.fullname) {
      navigate('/venta/datos-cliente')
    }
  }
  const redirectEmail = () => {
    if (props.email) {
      navigate('/venta/correo-electronico')
    }
  }
  const redirectParking = () => {
    if (props.parking) {
      navigate('/venta/estacionamiento')
    }
  }
  const redirectFloor = () => {
    if (props.floor) {
      navigate('/venta/piso')
    }
  }
  const redirectElevator = () => {
    if (props.elevator) {
      navigate('/venta/asensor')
    }
  }
  const redirectAmenities = () => {
    if (props.amenities.filter(e => e.active === true)) {
      navigate('/venta/amenidades')
    }
  }
  const redirectPrice = () => {
    if (props.price) {
      navigate('/venta/precio')
    }
  }

  return (
    <section className={styles.container}>
      <h2>Aqui mostraremos tu avance</h2>
      <h5>Asi se verá tu publicación en nuestra página</h5>
      <br />
      <div className={styles.card}>
        <div className={styles['--image']} onClick={() => { redirectImage() }} style={props.photo ? { cursor: 'pointer' } : {}}>
          <img src={image} alt='' />
        </div>
        <p className={styles['--title']}>Apartamento en venta</p>
        <div
          className={styles['--address']}
          onClick={() => { redirectAddress() }}
        >
          <img src={LocationImage} alt='Location icon' />
          <p className={props.address ? styles['--hover'] : {}}>{address}</p>
        </div>
        <br />
        <div className={styles['--texts']}>
          <span>Propietario</span>
          <p
            onClick={() => { redirectFullname() }}
            className={props.fullname ? styles['--hover'] : {}}
          >
            {name}
          </p>
        </div>
        <div className={styles['--texts']}>
          <span>Correo electrónico</span>
          <p
            onClick={() => { redirectEmail() }}
            className={props.email ? styles['--hover'] : {}}
          >
            {email}
          </p>
        </div>
        <div className={styles['--texts']}>
          <span>¿Estacionamiento?</span>
          <p
            onClick={() => { redirectParking() }}
            className={props.parking ? styles['--hover'] : {}}
          >
            {renderParking()}
          </p>
        </div>
        <div className={styles['--texts']}>
          <span>Piso</span>
          <p
            onClick={() => { redirectFloor() }}
            className={props.floor ? styles['--hover'] : {}}
          >
            {floor}
          </p>
        </div>
        <div className={styles['--texts']}>
          <span>¿Elevador?</span>
          <p
            onClick={() => { redirectElevator() }}
            className={props.elevator ? styles['--hover'] : {}}
          >
            {elevator}
          </p>
        </div>
        <div className={styles['--texts']}>
          <span>Amenidades</span>
          {
            amenities.length > 0
              ? amenities.map((e, i) => {
                return (
                  <p
                    key={i} style={{ marginBottom: 5 }}
                    onClick={() => { redirectAmenities() }}
                    className={amenities.length > 0 ? styles['--hover'] : {}}
                  >
                    {e.title}
                  </p>
                )
              })
              : <p>Este inmueble no cuenta con amenidades</p>
          }
        </div>
        <div className={styles['--price']}>
          <p
            onClick={() => { redirectPrice() }}
            className={props.price ? styles['--hover'] : {}}
          >
            ${formatCurrency(price)} MXN
          </p>
        </div>
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
    // TODO
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Background)

Background.propTypes = {
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
