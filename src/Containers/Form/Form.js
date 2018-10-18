// @flow strict

import { createForm } from 'rc-form'
import React from 'react'

import ProgramInfo from '../ProgramInfo'
import { inputMap } from './inputMap'

type Props = { form: Object }

type State = {
  percentage: { [string]: number }
}

class Form extends React.PureComponent<Props, State> {
  static onFieldsChange = (props, changed, all) => {
    console.log(props, changed, all)
  }
  state = {
    percentage: {
      programInfo: 10
    }
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((error, value) => {
      if (!error) {
        console.log(value)
      }
    })
  }

  render () {
    return (
      <React.Fragment>
        <ProgramInfo
          form={this.props.form}
          inputMap={inputMap.programInfo}
          percentage={this.state.percentage.programInfo}
        />
        <button type='submit' onClick={this.onSubmit}>
          test
        </button>
      </React.Fragment>
    )
  }
}

export default createForm({ onFieldsChange: Form.onFieldsChange })(Form)
