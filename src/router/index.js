import { Routes, Route, Navigate } from 'react-router-dom'
import { Landing } from '../pages/landing/Landing'

const Router = () => {
  return (
    <Routes>
      <Route exact path='/' index element={<Landing />} key='Landing' />
      <Route exact path='/*' index element={<Navigate to='/' replace />} key='Landing' />
    </Routes>
  )
}

export default Router
