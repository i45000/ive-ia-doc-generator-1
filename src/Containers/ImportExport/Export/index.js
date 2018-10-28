// @flow strict

import React from 'react'
import ReactJson from 'react-json-view'

import { CopyToClipBoard } from '../CopyToClipboard'
import { SaveAsFile } from '../SaveAsFile'
import classes from './index.css'

type Props = {
  formData: Object
}

export const Export = ({ formData }: Props) => (
  <React.Fragment>
    <div className={classes.jsonToolbar}>
      <SaveAsFile formData={formData} />
      <CopyToClipBoard formData={formData} />
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
