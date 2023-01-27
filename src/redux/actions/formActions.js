import {
  RESET_STORE,
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

export const setFullName = (value) => {
  return {
    type: SET_FULLNAME,
    payload: value
  }
}

export const resetStore = (value) => {
  return {
    type: RESET_STORE,
    payload: value
  }
}

export const setEmail = (value) => {
  return {
    type: SET_EMAIL,
    payload: value
  }
}

export const setAddress = (value) => {
  return {
    type: SET_ADDRESS,
    payload: value
  }
}

export const setFloor = (value) => {
  return {
    type: SET_FLOOR,
    payload: value
  }
}

export const setAmenities = (value) => {
  return {
    type: SET_AMENITIES,
    payload: value
  }
}

export const setParking = (value) => {
  return {
    type: SET_PARKING,
    payload: value
  }
}

export const setPrice = (value) => {
  return {
    type: SET_PRICE,
    payload: value
  }
}

export const setPhoto = (value) => {
  return {
    type: SET_PHOTO,
    payload: value
  }
}

export const setElevator = (value) => {
  return {
    type: SET_ELEVATOR,
    payload: value
  }
}

export const setFinished = (value) => {
  return {
    type: SET_FINISHED,
    payload: value
  }
}
