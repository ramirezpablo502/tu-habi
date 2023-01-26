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
