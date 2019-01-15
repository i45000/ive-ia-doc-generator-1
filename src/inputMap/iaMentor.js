// @flow strict

import React from 'react'
import { Control } from 'react-redux-form'

export const iaMentor = {
  prefix: {
    required: true,
    initialValue: 'Dr.',
    element: (
      <Control.select>
        <option value='Dr.'>Dr.</option>
        <option value='Mr.'>Mr.</option>
        <option value='Miss.'>Miss.</option>
        <option value='Ms.'>Ms.</option>
      </Control.select>
    )
  },
  name: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  position: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  department: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  tel: {
    required: true,
    initialValue: '',
    element: <Control.text type='number' min='10000000' max='99999999' />
  },
  fax: {
    required: false,
    initialValue: '',
    element: <Control.text type='number' min='10000000' max='99999999' />
  },
  email: {
    required: true,
    initialValue: '',
    element: <Control.text type='email' />
  }
}
