// @flow strict

import React from 'react'
import { Control } from 'react-redux-form'

export const siteVisit = {
  date: {
    required: true,
    initialValue: '',
    element: <Control.text type='date' />
  },
  timeLen: {
    required: true,
    initialValue: 1,
    element: <Control.text type='number' min='1' />
  },
  workDone: {
    required: true,
    initialValue: '',
    element: <Control.textarea />
  },
  summaryOfWork: {
    required: true,
    initialValue: '',
    element: <Control.textarea />
  },
  g1: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  g2: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  g3: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  b1: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  b2: {
    required: true,
    initialValue: '',
    element: <Control.text />
  }
}
