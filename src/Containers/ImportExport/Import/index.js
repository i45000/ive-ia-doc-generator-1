// @flow strict

import React from 'react'

import classes from './index.css'

export class Import extends React.PureComponent<{}> {
  getDataFromClipboard = () => {
    navigator.clipboard.readText().then(text => {
      console.log('Pasted content: ', text)
    })
  }

  render () {
    return (
      <React.Fragment>
        <div className={classes.container}>
          <button
            type='button'
            onClick={this.getDataFromClipboard}
            className={classes.clipboardBtn}
          >
            Get From Clipboard
          </button>
        </div>
      </React.Fragment>
    )
  }
}
