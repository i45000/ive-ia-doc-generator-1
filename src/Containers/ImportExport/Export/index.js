// @flow strict

import classNames from 'classnames'
import React from 'react'
import ReactJson from 'react-json-view'

import { ExportToClipboard } from '../ExportToClipboard'
import { ExportToJson } from '../ExportToJson'
import classes from './index.css'

type Props = {
  formData: Object,
  isDarkTheme: boolean
}

export const Export = ({ formData, isDarkTheme }: Props) => (
  <React.Fragment>
    <div
      className={classNames(classes.jsonToolbar, {
        [classes.dark]: isDarkTheme
      })}
    >
      <ExportToJson formData={formData} />
      <ExportToClipboard formData={formData} />
    </div>
    <div
      className={classNames(classes.jsonContent, {
        [classes.dark]: isDarkTheme
      })}
    >
      <ReactJson
        src={formData}
        enableClipboard={false}
        displayDataTypes={false}
        name='form'
        theme={isDarkTheme ? 'ashes' : 'rjv-default'}
      />
    </div>
  </React.Fragment>
)
