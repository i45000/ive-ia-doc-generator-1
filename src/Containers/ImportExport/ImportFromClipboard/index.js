// @flow strict

import classNames from 'classnames'
import * as R from 'ramda'
import React from 'react'

import { clipboardBtnMap, clipboardBtnType } from './clipboardBtnMap'
import type { ClipboardBtnType } from './clipboardBtnMap'
import classes from './index.css'

type State = {
  status: ClipboardBtnType
}

type Props = {
  validateAndSet: Object => void
}

export class ImportFromClipboard extends React.PureComponent<Props, State> {
  state = {
    status: clipboardBtnType.DEFAULT
  }

  getDataFromClipboard = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText()
      const textToObject = JSON.parse(clipboardText)
      this.props.validateAndSet(textToObject)
      this.setState({ status: clipboardBtnType.SUCCESS })
      setTimeout(() => {
        this.setState({ status: clipboardBtnType.DEFAULT })
      }, 3000)
    } catch (error) {
      this.setState({ status: clipboardBtnType.INVALID })
      setTimeout(() => {
        this.setState({ status: clipboardBtnType.DEFAULT })
      }, 3000)
    }
  }

  render () {
    const btnObj = R.find(R.propEq('enum', this.state.status), clipboardBtnMap)
    return btnObj ? (
      <button
        type='button'
        onClick={this.getDataFromClipboard}
        className={classNames(classes.clipboardBtn, {
          [classes.invalid]: btnObj.enum === clipboardBtnType.INVALID
        })}
        disabled={btnObj.disabled}
      >
        {btnObj.element}
      </button>
    ) : null
  }
}
