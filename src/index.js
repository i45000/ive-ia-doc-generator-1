// @flow strict

import './style.css'

import React from 'react'
import { render } from 'react-dom'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'

import favicon from './assets/favicon.ico'
import { App } from './Containers/App'
import { rootReducer } from './redux'
import { createStore } from './Utils/createStore'

const store = createStore({ rootReducer })

const root = document.getElementById('root')

if (root) {
  render(
    <React.Fragment>
      <Helmet>
        <link rel='shortcut icon' href={favicon} />
      </Helmet>
      <Provider store={store}>
        <App />
      </Provider>
    </React.Fragment>,
    root
  )
}
