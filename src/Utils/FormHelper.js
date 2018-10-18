// @flow strict

import classnames from 'classnames'
import * as R from 'ramda'
import React from 'react'

import globalClasses from '../style.css'

export const getDecoratedField = (
  form: Object,
  inputMap: {
    [string]: {
      required: boolean,
      initialValue?: any,
      element: any
    }
  }
) => (id: string) => {
  const required = R.path([id, 'required'], inputMap)
  const initialValue = R.path([id, 'initialValue'], inputMap)
  const element = R.path([id, 'element'], inputMap)
  const clonedElement = React.cloneElement(element, {
    className: classnames({
      [globalClasses.error]: form.getFieldError(id) !== undefined
    })
  })
  return form.getFieldDecorator(id, {
    initialValue,
    rules: [{ required }]
  })(clonedElement)
}
