import {
  SET_FULLNAME,
  SET_EMAIL,
  SET_ADDRESS,
  SET_FLOOR,
  SET_AMENITIES,
  SET_PARKING,
  SET_PRICE,
  SET_PHOTO,
  SET_ELEVATOR,
  SET_FINISHED
} from '../constants/formConstants'

const initialState = {
  fullname: '',
  email: '',
  address: '',
  floor: '',
  amenities: [{
    title: 'Zona BBQ',
    active: false
  }, {
    title: 'Salón comunal',
    active: false
  }, {
    title: 'Parque de juegos',
    active: false
  }],
  parking: '',
  price: '',
  photo: '',
  elevator: '',
  finished: false
}

const formReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_FULLNAME:
      return {
        ...state,
        fullname: action.payload
      }
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload
      }
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload
      }
    case SET_FLOOR:
      return {
        ...state,
        floor: action.payload
      }
    case SET_AMENITIES:
      return {
        ...state,
        amenities: action.payload
      }
    case SET_PARKING:
      return {
        ...state,
        parking: action.payload
      }
    case SET_PRICE:
      return {
        ...state,
        price: action.payload
      }
    case SET_PHOTO:
      return {
        ...state,
        photo: action.payload
      }
    case SET_ELEVATOR:
      return {
        ...state,
        elevator: action.payload
      }
    case SET_FINISHED:
      return {
        ...state,
        finished: action.payload
      }
    default:
      return state
  }
}

export default formReducers
