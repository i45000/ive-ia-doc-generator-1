// @flow strict

import React from 'react'
import { Control } from 'react-redux-form/immutable'

export const iaCompany = {
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
  address: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  nature: {
    required: true,
    initialValue: '',
    element: <Control.text />
  }
}
