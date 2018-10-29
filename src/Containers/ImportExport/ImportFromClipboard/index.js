// @flow strict

import classNames from 'classnames'
import React from 'react'

import classes from './index.css'

type State = {
  invalid: boolean,
  success: boolean
}

type Props = {
  validateAndSet: Object => void
}

export class ImportFromClipboard extends React.PureComponent<Props, State> {
  state = {
    invalid: false,
    success: false
  }

  getDataFromClipboard = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText()
      const textToObject = JSON.parse(clipboardText)
      this.props.validateAndSet(textToObject)
      this.setState({ success: true })
      setTimeout(() => {
        this.setState({ success: false })
      }, 3000)
    } catch (error) {
      this.setState({ invalid: true })
      setTimeout(() => {
        this.setState({ invalid: false })
      }, 3000)
    }
  }

  render () {
    return (
      <button
        type='button'
        onClick={this.getDataFromClipboard}
        className={classNames(classes.clipboardBtn, {
          [classes.invalid]: this.state.invalid
        })}
        disabled={this.state.invalid || this.state.success}
      >
        {this.state.invalid ? (
          <React.Fragment>
            <i className='fas fa-times' />
            Invalid Clipboard Text
          </React.Fragment>
        ) : this.state.success ? (
          <React.Fragment>
            <i className='fas fa-check' />
            Success!
          </React.Fragment>
        ) : (
          <React.Fragment>
            <i className='fas fa-clipboard' />
            Get From Clipboard
          </React.Fragment>
        )}
      </button>
    )
  }
}
