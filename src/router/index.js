import { Routes, Route, Navigate } from 'react-router-dom'
import { Landing } from '../pages/Landing'
import { ResumenVenta } from '../pages/ResumenVenta'
import { Venta } from '../pages/Venta'

const Router = () => {
  return (
    <Routes>
      <Route exact path='/' index element={<Landing />} key='Landing' />
      <Route exact path='/venta/:step' index element={<Venta />} key='Venta' />
      <Route exact path='/resumen-venta' index element={<ResumenVenta />} key='ResumenVenta' />
      <Route exact path='/*' index element={<Navigate to='/' replace />} key='Landing' />
    </Routes>
  )
}

export default Router
