// @flow strict

import React from 'react'
import { Control } from 'react-redux-form'

export const medicalInfo = {
  allergies: {
    required: false,
    initialValue: '',
    element: <Control.text />
  },
  prescriptionDrugs: {
    required: false,
    initialValue: '',
    element: <Control.text />
  },
  physicalLimitations: {
    required: false,
    initialValue: '',
    element: <Control.text />
  },
  other: {
    required: false,
    initialValue: '',
    element: <Control.text />
  }
}
