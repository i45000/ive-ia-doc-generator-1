// @flow strict

import React from 'react'
import { Control } from 'react-redux-form'

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
  allowance: {
    required: true,
    initialValue: '0',
    element: <Control.text type='number' min='0' />
  },
  allowancePer: {
    required: true,
    initialValue: 'Day',
    element: (
      <Control.select>
        <option value='Hour'>Hour</option>
        <option value='Day'>Day</option>
        <option value='Week'>Week</option>
        <option value='Month'>Month</option>
        <option value='Scheme'>Scheme</option>
      </Control.select>
    )
  },
  payAt: {
    required: true,
    initialValue: 'Day',
    element: (
      <Control.select>
        <option value='Day'>Day</option>
        <option value='Week'>Week</option>
        <option value='Month'>Month</option>
        <option value='Scheme'>Scheme</option>
      </Control.select>
    )
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
        <option value='on request'>on request</option>
        <option value='project basis'>on project basis</option>
      </Control.select>
    )
  },
  area: {
    required: true,
    initialValue: 'IT',
    element: (
      <Control.select>
        <option value='IT'>IT</option>
        <option value='Other'>Other</option>
      </Control.select>
    )
  },
  nonITArea: {
    required: false,
    initialValue: '',
    element: <Control.text placeHolder='If others, please specify' />
  },
  address: {
    required: false,
    initialValue: '',
    element: <Control.text placeHolder='If not the address above' />
  },
  workOutsideHK: {
    required: true,
    initialValue: 'No',
    element: (
      <Control.select>
        <option value='No'>No</option>
        <option value='Station outside Hong Kong'>
          Station outside Hong Kong
        </option>
        <option value='Daily Travel'>Daily Travel</option>
        <option value='Occasional'>Occasional</option>
      </Control.select>
    )
  },
  country: {
    required: true,
    initialValue: 'Hong Kong',
    element: (
      <Control.select>
        <option value='Hong Kong'>Hong Kong</option>
        <option value='Mainland China'>Mainland China</option>
        <option value='Other'>Others</option>
      </Control.select>
    )
  },
  nonHKCountry: {
    required: false,
    initialValue: '',
    element: <Control.text placeHolder='If others, please specify' />
  },
  district: {
    required: false,
    initialValue: '',
    element: <Control.text placeHolder='If not the address above' />
  }
}
