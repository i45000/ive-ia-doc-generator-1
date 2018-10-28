// @flow strict

import { fromJS } from 'immutable'
import * as R from 'ramda'
import React from 'react'

import { inputMap } from '../inputMap'

export const getInitState: (typeof inputMap) => any = R.compose(
  fromJS,
  R.mapObjIndexed(R.mapObjIndexed(({ initialValue }) => initialValue))
)

export const getFields = R.mapObjIndexed(({ element, required, key }, objKey) =>
  React.cloneElement(element, {
    required,
    model: `.${key !== undefined ? key : objKey}`
  })
)

export const calComplete = (
  map: typeof inputMap,
  state: { [string]: { [string]: any } }
) =>
  Object.keys(state).reduce((accObj, category) => {
    const stateCategoryObj = R.prop(category, state)
    const completeCount = Object.keys(stateCategoryObj).reduce(
      (accCount, key) => {
        const field = R.prop(key, stateCategoryObj)
        const required = R.path([category, key, 'required'], map)
        if (!required) return accCount + 1
        return field !== '' && field !== undefined ? accCount + 1 : accCount
      },
      0
    )

    const percentage =
      (completeCount / Object.keys(stateCategoryObj).length) * 100
    return { ...accObj, [category]: percentage }
  }, {})
