// @flow strict

import React from 'react'
import { Control } from 'react-redux-form/immutable'

export const iaSupervisor = {
  name: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  post: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  phone: {
    required: true,
    initialValue: '',
    element: <Control.text type='number' min='10000000' max='99999999' />
  },
  email: {
    required: true,
    initialValue: '',
    element: <Control.text type='email' />
  }
}
