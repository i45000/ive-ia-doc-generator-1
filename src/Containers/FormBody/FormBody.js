// @flow strict

import React from 'react'
import { Form } from 'react-redux-form'

import { ProgramInfo } from '../ProgramInfo'

type State = {
  percentage: { [string]: number }
}

class FormBody extends React.PureComponent<{}, State> {
  state = {
    percentage: {
      programInfo: 10
    }
  }

  handleChange = (values: Object) => {
    console.log('change', values)
  }

  handleUpdate = (form: Object) => {
    console.log('update', form)
  }

  handleSubmit = (values: Object) => {
    console.log('submit', values)
  }

  render () {
    return (
      <Form
        model='form.programInfo'
        onSubmit={val => this.handleSubmit(val)}
        onChange={this.handleChange}
      >
        <ProgramInfo percentage={this.state.percentage.programInfo} />
        <button type='submit'>Submit!</button>
      </Form>
    )
  }
}

export default FormBody
