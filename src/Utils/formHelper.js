// @flow strict

import { fromJS } from 'immutable'
import * as R from 'ramda'
import React from 'react'

import { inputMap as mapReference } from '../inputMap'

export const getInitState: (typeof mapReference) => any = R.compose(
  fromJS,
  R.mapObjIndexed(R.mapObjIndexed(({ initialValue }) => initialValue))
)

export const getInitPercentage: (
  typeof mapReference
) => { [string]: number } = R.mapObjIndexed(() => 0)

export const getFields = R.mapObjIndexed(({ element, required, key }, objKey) =>
  React.cloneElement(element, {
    required,
    model: `.${key !== undefined ? key : objKey}`
  })
)

export const getCompletePercentage = (
  inputMap: typeof mapReference,
  formState: { [string]: { [string]: any } }
) =>
  R.keys(formState).reduce((accObj, categoryKey) => {
    const stateCategoryObj = R.prop(categoryKey, formState)
    const completeCount = R.keys(stateCategoryObj).reduce(
      (accCount, fieldKey) => {
        const field = R.prop(fieldKey, stateCategoryObj)
        const required = R.path([categoryKey, fieldKey, 'required'], inputMap)
        if (!required) return accCount + 1
        if (field !== '' && field !== undefined) return accCount + 1
        return accCount
      },
      0
    )
    const percentage = (completeCount / R.keys(stateCategoryObj).length) * 100
    return { ...accObj, [categoryKey]: percentage }
  }, {})

export const validateImport = (
  inputObject: Object,
  inputMap: typeof mapReference
) => {
  const hasError = R.keys(inputMap).some(categoryKey => {
    if (!R.has(categoryKey, inputObject)) return true
    const categoryObj = R.prop(categoryKey, inputMap)
    return R.keys(categoryObj).some(inputKey => {
      if (!R.has(inputKey, inputObject[categoryKey])) return true
      return false
    })
  })
  return hasError === false
}
