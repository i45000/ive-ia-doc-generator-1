// @flow strict

import React from 'react'
import { Control } from 'react-redux-form'

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
  district: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  businessRegistrationCertificateNo: {
    required: false,
    initialValue: '',
    element: <Control.text />
  },
  type: {
    required: true,
    initialValue: 'SME',
    element: (
      <Control.select>
        <option value='SME'>SME</option>
        <option value='NSME'>Non-SME</option>
        <option value='NGO'>NGO</option>
      </Control.select>
    )
  },
  nature: {
    required: true,
    initialValue: 'IT',
    element: (
      <Control.select>
        <option value='IT'>IT</option>
        <option value='Other'>Other</option>
      </Control.select>
    )
  },
  nonITNature: {
    required: false,
    initialValue: '',
    element: <Control.text placeHolder='If others, please specify' />
  }
}
