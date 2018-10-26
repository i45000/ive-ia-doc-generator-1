// @flow strict

import React from 'react'
import { connect } from 'react-redux'
import { Form, actions } from 'react-redux-form/immutable'

import { ProgramInfo } from '../ProgramInfo'

type Props = {
  set: () => void
}

type State = {
  percentage: { [string]: number }
}

class FormBody extends React.PureComponent<Props, State> {
  state = {
    percentage: {
      programInfo: 10
    }
  }

  handleChange = (values: Object) => {
    console.log('change', values.get('name'))
  }

  handleUpdate = (form: Object) => {
    console.log('update', form)
  }

  handleSubmit = (values: Object) => {
    console.log('submit', values)
  }

  test = () => {
    this.props.set()
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
        <div onClick={this.test}>test</div>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    set: () => {
      dispatch(actions.change('form.programInfo', { name: 123 }))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(FormBody)
