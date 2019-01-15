// @flow strict

import React from 'react'
import { Control } from 'react-redux-form'

export const emergencyContact = {
  type: {
    required: true,
    initialValue: 'parent',
    element: (
      <Control.select>
        <option value='parent'>Parent</option>
        <option value='guardian'>Guardian</option>
      </Control.select>
    )
  },
  name: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  relationship: {
    required: true,
    initialValue: '',
    element: (
      <Control.select>
        <option value='son'>Son</option>
        <option value='daughter'>Daughter</option>
        <option value='ward'>ward</option>
      </Control.select>
    )
  },
  placeOfWork: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  homeTel: {
    required: true,
    initialValue: '',
    element: <Control.text type='number' min='10000000' max='99999999' />
  },
  mobile: {
    required: true,
    initialValue: '',
    element: <Control.text type='number' min='10000000' max='99999999' />
  },
  workTel: {
    required: true,
    initialValue: '',
    element: <Control.text type='number' min='10000000' max='99999999' />
  },
  doctorName: {
    required: false,
    initialValue: '',
    element: <Control.text />
  },
  doctorTel: {
    required: false,
    initialValue: '',
    element: <Control.text type='number' min='10000000' max='99999999' />
  }
}
