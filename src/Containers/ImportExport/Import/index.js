// @flow strict

import React from 'react'
import ReactJson from 'react-json-view'

import { CopyToClipBoard } from '../CopyToClipboard'
import { SaveAsFile } from '../SaveAsFile'
import classes from './index.css'

export class Import extends React.PureComponent<{}> {
  preventKey = evt => {
    const theEvent = evt || window.event
    const key = theEvent.keyCode || theEvent.which
    const keyCode = String.fromCharCode(key)
    if (keyCode) {
      if (theEvent.preventDefault) theEvent.preventDefault()
    }
  }

  forceSelectAll = event => {
    event.target.select()
    navigator.clipboard.readText().then(text => {
      console.log('Pasted content: ', text)
    })
  }

  render () {
    return (
      <React.Fragment>
        <div className={classes.jsonToolbar}>
          {/* <SaveAsFile formData={formData} />
          <CopyToClipBoard formData={formData} /> */}
        </div>
        <div className={classes.jsonContent}>
          <textarea
            onKeyPress={this.preventKey}
            onClick={this.forceSelectAll}
          />
          {/* <ReactJson
        src={formData}
        enableClipboard={false}
        displayDataTypes={false}
        name='form'
      /> */}
        </div>
      </React.Fragment>
    )
  }
}
