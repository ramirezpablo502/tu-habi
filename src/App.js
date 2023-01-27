import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Router from './router'

import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <BrowserRouter>
      <Router />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
      />
    </BrowserRouter>
  )
}

export default App
