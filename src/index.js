// @flow strict

import './style.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import { App } from './Containers/App'
import { rootReducer } from './redux'
import { createStore } from './utils/createStore'

const store = createStore({ rootReducer })
const persistor = persistStore(store)

const root = document.getElementById('root')

if (root) {
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    root
  )
}
