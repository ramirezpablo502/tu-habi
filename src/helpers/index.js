/*
  This function returns the step number in case of what it receives in the url:

  step1: datos-cliente
  step2: correo-electronico
  step3: direccion
  step4: piso
  step5: amenidades
  step6: estacionamiento
  step7: precio
  step8: fotografia
  step9: asensor
  step10: resumen
*/

export const validateParam = (param) => {
  let step = null
  switch (param) {
    case 'datos-cliente':
      step = 0
      break
    case 'correo-electronico':
      step = 1
      break
    case 'direccion':
      step = 2
      break
    case 'piso':
      step = 3
      break
    case 'amenidades':
      step = 4
      break
    case 'estacionamiento':
      step = 5
      break
    case 'precio':
      step = 6
      break
    case 'fotografia':
      step = 7
      break
    case 'asensor':
      step = 8
      break
    case 'resumen':
      step = 9
      break

    default:
      break
  }
  return step
}

/**
 * It takes a Google Maps place object and returns an object with the following properties: locality,
 * state, country, county, cp, street_number, street
 * @param place - The place object returned by the Google Places API.
 * @returns An object with the following properties:
 * - locality
 * - state
 * - country
 * - county
 * - cp
 * - street_number
 * - street
 */
export const getLocationByPlace = (place) => {
  if (!place.address_components) {
    return null
  }
  const address = {}
  for (const ac of place.address_components) {
    if (ac.types.indexOf('locality') >= 0) {
      address.locality = ac.long_name
    }

    if (ac.types.indexOf('administrative_area_level_1') >= 0) {
      address.state = ac.long_name
    }
    if (ac.types.indexOf('country') >= 0) {
      address.country = ac.long_name
    }
    if (ac.types.indexOf('sublocality') >= 0) {
      address.county = ac.long_name
    }
    if (ac.types.indexOf('postal_code') >= 0) {
      address.cp = ac.long_name
    }
    if (ac.types.indexOf('street_number') >= 0) {
      address.street_number = ac.long_name
    }
    if (ac.types.indexOf('route') >= 0) {
      address.street = ac.long_name
    }
  }
  return address
}

/**
 * It replaces all spaces with dashes, all accented vowels with their non-accented counterparts, and
 * then converts the string to lowercase
 * @param url - The url to be cleaned
 * @returns A function that takes a url as a parameter and returns a string with the url in lowercase
 * and without spaces or special characters.
 */
export const cleanUrl = (url) => {
  if (!url || url.length <= 0) {
    return
  }
  return url
    .replaceAll(' ', '-')
    .replaceAll('á', 'a')
    .replaceAll('é', 'e')
    .replaceAll('í', 'i')
    .replaceAll('ó', 'o')
    .replaceAll('ú', 'u')
    .replaceAll('Á', 'a')
    .replaceAll('É', 'e')
    .replaceAll('Í', 'i')
    .replaceAll('Ó', 'o')
    .replaceAll('Ú', 'u')
    .toLowerCase()
}

/**
 * If the place object has a location_type property, then it's a Google Maps API v3 object, otherwise
 * it's a Google Maps API v2 object
 * @param place - The place object returned by the Google Maps API.
 * @returns An object with lat and lng properties.
 */
export const getLatLngByPlace = (place) => {
  const address = {
    lat: 0.0,
    lng: 0.0
  }
  if (typeof place.geometry?.location_type !== 'undefined') {
    address.lat = place.geometry.location.lat
    address.lng = place.geometry.location.lng
  } else {
    address.lat = place.geometry.location.lat()
    address.lng = place.geometry.location.lng()
  }
  return address
}

/**
 * It prevents the user from typing anything other than numbers into a text input
 * @param e - The event object
 */
export const soloNumbers = (e) => {
  const key = window.event ? e.which : e.keyCode
  if (key < 48 || key > 57) {
    e.preventDefault()
  }
}
