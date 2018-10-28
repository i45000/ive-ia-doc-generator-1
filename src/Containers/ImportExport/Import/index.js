// @flow strict

import classNames from 'classnames'
import React from 'react'

import { inputMap } from '../../../inputMap'
import { validateImport } from '../../../Utils/formHelper'
import classes from './index.css'

type State = {
  invalid: {
    clipboard: boolean
  }
}

export class Import extends React.PureComponent<{}, State> {
  state = {
    invalid: {
      clipboard: false
    }
  }

  getDataFromClipboard = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText()
      const textToObject = await JSON.parse(clipboardText)
      const isValid = validateImport(textToObject, inputMap)
      if (!isValid) throw new Error('invalid fields')
      console.log('success!')
    } catch (error) {
      this.setState({ invalid: { clipboard: true } })
      setTimeout(() => {
        this.setState({ invalid: { clipboard: false } })
      }, 3000)
    }
  }

  render () {
    const { invalid } = this.state
    return (
      <React.Fragment>
        <div className={classes.container}>
          <span className={classes.or}>Or</span>
          <button
            type='button'
            onClick={this.getDataFromClipboard}
            className={classNames(classes.clipboardBtn, {
              [classes.invalid]: invalid.clipboard
            })}
            disabled={invalid.clipboard}
          >
            {invalid.clipboard ? (
              <React.Fragment>
                <i className='fas fa-times' />
                Invalid Clipboard Text
              </React.Fragment>
            ) : (
              <React.Fragment>
                <i className='fas fa-clipboard' />
                Get From Clipboard
              </React.Fragment>
            )}
          </button>
        </div>
      </React.Fragment>
    )
  }
}
