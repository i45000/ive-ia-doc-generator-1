// @flow strict

import React from 'react'
import { Control } from 'react-redux-form/immutable'

export const iaJob = {
  title: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  noOfPlace: {
    required: true,
    initialValue: 1,
    element: <Control.text type='number' min='1' />
  },
  department: {
    required: true,
    initialValue: '',
    element: <Control.text />
  },
  description: {
    required: true,
    initialValue: 'Internship',
    element: <Control.text />
  },
  startDate: {
    required: true,
    initialValue: '',
    element: <Control.text type='date' />
  },
  endDate: {
    required: true,
    initialValue: '',
    element: <Control.text type='date' />
  },
  hrPerDay: {
    required: true,
    initialValue: '1',
    element: <Control.text type='number' min='1' />
  },
  dayPerWeek: {
    required: true,
    initialValue: '1',
    element: <Control.text type='number' min='1' max='7' />
  },
  workingHrFr: {
    required: true,
    initialValue: '',
    element: <Control.text type='time' />
  },
  workingHrTo: {
    required: true,
    initialValue: '',
    element: <Control.text type='time' />
  },
  totalHour: {
    required: true,
    initialValue: '90',
    element: <Control.text type='number' min='1' />
  },
  shiftDuty: {
    required: true,
    initialValue: 'Yes',
    element: (
      <Control.select>
        <option value='Yes'>Yes</option>
        <option value='No'>No</option>
      </Control.select>
    )
  },
  allowancePerMonth: {
    required: true,
    initialValue: '0',
    element: <Control.text type='number' min='0' />
  },
  overtimeAllowance: {
    required: true,
    initialValue: '0',
    element: <Control.text type='number' min='0' />
  },
  bonus: {
    required: true,
    initialValue: '0',
    element: <Control.text type='number' min='0' />
  },
  property: {
    required: true,
    initialValue: 'regular',
    element: (
      <Control.select>
        <option value='regular'>on regular</option>
        <option value='request'>on request</option>
        <option value='project basis'>on project basis</option>
      </Control.select>
    )
  }
}
