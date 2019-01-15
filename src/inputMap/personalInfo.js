// @flow strict

import React from 'react'
import { Control } from 'react-redux-form'

export const personalInfo = {
  chineseName: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  englishName: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  hkid: {
    required: true,
    initialValue: '',
    element: <Control.text minLength='8' maxLength='8' />
  },
  tel: {
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
