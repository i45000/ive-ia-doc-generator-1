// @flow strict

import Docxtemplater from 'docxtemplater'
import FileSaver from 'file-saver'
import { fromJS } from 'immutable'
import JSZip from 'jszip'
import JSZipUtils from 'jszip-utils'
import * as R from 'ramda'
import React from 'react'

import templateDocument from '../assets/template-document.docx'
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
  inputObject: { [string]: { [string]: any } },
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

const addFields = (formValue: { [string]: { [string]: any } }) => {
  const today = new Date()
  const dd = today.getDate()
  const mm = today.getMonth() + 1 // January is 0!
  const yyyy = today.getFullYear()
  const todayString = yyyy + '-' + mm + '-' + dd

  const allergies = R.path(['medicalInfo', 'allergies'], formValue)
  const hasAllergies = allergies !== '' && allergies !== null

  const prescriptionDrugs = R.path(
    ['medicalInfo', 'prescriptionDrugs'],
    formValue
  )
  const hasPrescriptionDrugs =
    prescriptionDrugs !== '' && prescriptionDrugs !== null

  const physicalLimitations = R.path(
    ['medicalInfo', 'physicalLimitations'],
    formValue
  )
  const hasPhysicalLimitations =
    physicalLimitations !== '' && physicalLimitations !== null

  const other = R.path(['medicalInfo', 'other'], formValue)
  const hasOther = other !== '' && other !== null

  const businessNature = R.path(['iaCompany', 'nature'], formValue)
  const businessIsIT = businessNature === 'IT'

  const jobArea = R.path(['iaCompany', 'nature'], formValue)
  const jobAreaIsIT = jobArea === 'IT'

  const jobCountry = R.path(['iaJob', 'country'], formValue)
  const jobCountryIsOthers = jobCountry === 'Other'

  return R.compose(
    R.assocPath(
      ['iaJob', 'allowancePerDay'],
      parseInt(R.path(['iaJob', 'allowancePerMonth'])) / 30
    ),
    R.assocPath(['medicalInfo', 'hasAllergies'], hasAllergies),
    R.assocPath(['medicalInfo', 'hasPrescriptionDrugs'], hasPrescriptionDrugs),
    R.assocPath(
      ['medicalInfo', 'hasPhysicalLimitations'],
      hasPhysicalLimitations
    ),
    R.assocPath(['medicalInfo', 'hasOther'], hasOther),
    R.assocPath(['iaCompany', 'isIT'], businessIsIT),
    R.assocPath(['iaJob', 'isIT'], jobAreaIsIT),
    R.assocPath(['iaJob', 'isOthers'], jobCountryIsOthers),
    R.assoc('today', todayString)
  )(formValue)
}

export const generateFile = (formValue: { [string]: { [string]: any } }) => {
  JSZipUtils.getBinaryContent(templateDocument, (error, content) => {
    if (error) throw error

    const data = addFields(formValue)

    const zip = new JSZip(content)
    // eslint-disable-next-line
    let doc = new Docxtemplater().loadZip(zip).setOptions({
      parser: tag => ({
        get: (scope: Object) => R.path(R.split('.', tag), scope)
      })
    })
    doc.setData(data)

    try {
      doc.render()
    } catch (e) {
      throw e
    }

    const out = doc.getZip().generate({
      type: 'blob',
      mimeType:
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    })
    FileSaver.saveAs(out, 'output.docx')
  })
}
