// @flow strict

import { fromJS } from 'immutable'
import React from 'react'
import { connect } from 'react-redux'

import { inputMap } from '../../../inputMap'
import { formCreators } from '../../../redux'
import { validateImport } from '../../../Utils/formHelper'
import { ImportFromClipboard } from '../ImportFromClipboard'
import { ImportFromFile } from '../ImportFromFile'
import classes from './index.css'

type State = {
  invalidClipboard: boolean,
  invalidFile: boolean
}

type Props = {
  setFields: (string, any) => void
}

class Import extends React.PureComponent<Props, State> {
  validateAndSet = textObject => {
    const isValid = validateImport(textObject, inputMap)
    if (!isValid) throw new Error('invalid fields')
    this.props.setFields('form', fromJS(textObject))
  }

  render () {
    return (
      <React.Fragment>
        <div className={classes.container}>
          <ImportFromFile validateAndSet={this.validateAndSet} />
          <span className={classes.or}>Or</span>
          <ImportFromClipboard validateAndSet={this.validateAndSet} />
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
