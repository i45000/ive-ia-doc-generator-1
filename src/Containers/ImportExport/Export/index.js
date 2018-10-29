// @flow strict

import React from 'react'
import ReactJson from 'react-json-view'

import { ExportToClipboard } from '../ExportToClipboard'
import { ExportToJson } from '../ExportToJson'
import classes from './index.css'

type Props = {
  formData: Object
}

export const Export = ({ formData }: Props) => (
  <React.Fragment>
    <div className={classes.jsonToolbar}>
      <ExportToJson formData={formData} />
      <ExportToClipboard formData={formData} />
    </div>
    <div className={classes.jsonContent}>
      <ReactJson
        src={formData}
        enableClipboard={false}
        displayDataTypes={false}
        name='form'
      />
    </div>
  </React.Fragment>
)
