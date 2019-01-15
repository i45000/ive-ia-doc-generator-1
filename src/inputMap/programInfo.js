// @flow strict

import React from 'react'
import { Control } from 'react-redux-form'

export const programInfo = {
  firstYear: {
    required: true,
    initialValue: new Date().getFullYear() - 1,
    element: <Control.text type='number' min='1000' max='9999' />
  },
  thisYear: {
    required: true,
    initialValue: new Date().getFullYear(),
    element: <Control.text type='number' min='1000' max='9999' />
  },
  stuNo: {
    required: true,
    initialValue: '',
    element: <Control.text type='number' min='100000000' max='999999999' />
  },
  campus: {
    required: true,
    initialValue: 'Lee Wai Lee',
    element: <Control.text />
  },
  department: {
    required: true,
    initialValue: 'Information Technology',
    element: <Control.text />
  },
  departmentHead: {
    required: true,
    initialValue: 'Stanley Wong',
    element: <Control.text />
  },
  programmeTitle: {
    required: true,
    initialValue: 'Higher Diploma in Cloud and Data Center Administration',
    element: <Control.text />
  },
  programmeCode: {
    required: true,
    initialValue: 'IT114115',
    element: <Control.text minLength='8' maxLength='8' />
  },
  class: {
    required: true,
    initialValue: '2B',
    element: <Control.text minLength='2' maxLength='2' />
  }
}
