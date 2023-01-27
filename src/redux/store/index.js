import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

/* import store */
import formReducers from '../reducers/formReducers'

const reducers = combineReducers({
  formReducers
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export default store
