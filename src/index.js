// @flow strict

import './style.css'

import favicon from 'assets/favicon.ico'
import React from 'react'
import { render } from 'react-dom'
import { Helmet } from 'react-helmet'

import { App } from './Containers/App'

const root = document.getElementById('root')

if (root) {
  render(
    <React.Fragment>
      <Helmet>
        <link rel='shortcut icon' href={favicon} />
      </Helmet>
      <App />
    </React.Fragment>,
    root
  )
}
