// @flow strict

import React from 'react'
import { Control } from 'react-redux-form'

export const iaRequirement = {
  chiReq: {
    required: true,
    initialValue: 'Fair',
    element: (
      <Control.select>
        <option value='Fair'>Fair</option>
        <option value='Fluent'>Fluent</option>
      </Control.select>
    )
  },
  engReq: {
    required: true,
    initialValue: 'Fair',
    element: (
      <Control.select>
        <option value='Fair'>Fair</option>
        <option value='Fluent'>Fluent</option>
      </Control.select>
    )
  },
  putReq: {
    required: true,
    initialValue: 'Fair',
    element: (
      <Control.select>
        <option value='Fair'>Fair</option>
        <option value='Fluent'>Fluent</option>
      </Control.select>
    )
  },
  discPreferred: {
    required: true,
    initialValue: 'IT student',
    element: <Control.text />
  },
  skillReq: {
    required: true,
    initialValue: 'Programing',
    element: <Control.text />
  },
  otherReq: {
    required: true,
    initialValue: 'N/A',
    element: <Control.text />
  }
}
