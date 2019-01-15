// @flow strict

import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

import { inputMap } from '../../../inputMap'
import { formCreators } from '../../../redux'
import { validateImport } from '../../../utils/formHelper'
import { ImportFromClipboard } from '../ImportFromClipboard'
import { ImportFromFile } from '../ImportFromFile'
import classes from './index.css'

type State = {
  invalidClipboard: boolean,
  invalidFile: boolean
}

type Props = {
  setFields: (string, any) => void,
  isDarkTheme: boolean
}

class Import extends React.PureComponent<Props, State> {
  validateAndSet = textObject => {
    const isValid = validateImport(textObject, inputMap)
    if (!isValid) throw new Error('invalid fields')
    this.props.setFields('form', textObject)
  }

  render () {
    return (
      <React.Fragment>
        <div
          className={classNames(classes.container, {
            [classes.dark]: this.props.isDarkTheme
          })}
        >
          <ImportFromFile
            validateAndSet={this.validateAndSet}
            isDarkTheme={this.props.isDarkTheme}
          />

          {navigator.clipboard !== undefined ? (
            <ImportFromClipboard
              validateAndSet={this.validateAndSet}
              isDarkTheme={this.props.isDarkTheme}
            />
          ) : null}
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  setFields: formCreators.setFields
}

export default connect(
  null,
  mapDispatchToProps
)(Import)
