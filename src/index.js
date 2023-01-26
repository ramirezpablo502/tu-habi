import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'

import ReactDOM from 'react-dom'
import store from './redux/store'
import App from './App'

import './index.css'

const persistor = persistStore(store)

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
