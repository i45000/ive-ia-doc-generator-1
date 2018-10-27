// @flow strict

import React from 'react'
import { Control } from 'react-redux-form/immutable'

export const iaSupervisor = {
  Name: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  Post: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  Tel: {
    required: true,
    initialValue: '',
    element: <Control.text type='number' min='10000000' max='99999999' />
  },
  Email: {
    required: true,
    initialValue: '',
    element: <Control.text type='email' />
  }
}
