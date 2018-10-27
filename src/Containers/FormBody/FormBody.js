// @flow strict

import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-redux-form/immutable'

import { IASupervisor } from '../../Components/IASupervisor'
import { PersonalInfo } from '../../Components/PersonalInfo'
import { ProgramInfo } from '../../Components/ProgramInfo'
import { SiteVisit } from '../../Components/SiteVisit'
import { inputMap } from '../../inputMap'
import { formCreators } from '../../redux'
import { INITIAL_STATE } from '../../redux/form/reducer'
import { calComplete } from '../../Utils/formHelper'

type Props = {
  set: (string, any) => void
}

type State = {
  percentage: { [string]: number }
}

class FormBody extends React.PureComponent<Props, State> {
  state = {
    percentage: {
      programInfo: 0,
      personalInfo: 0,
      emergencyContact: 0,
      iaSupervisor: 0,
      siteVisit: 0
    }
  }

  componentDidMount () {
    const percentageObj = calComplete(inputMap, INITIAL_STATE.toJS())
    this.setState({ percentage: percentageObj })
  }

  handleChange = (values: Object) => {
    const percentageObj = calComplete(inputMap, values.toJS())
    this.setState({ percentage: percentageObj })
    console.log('change', values.toJS())
  }

  handleUpdate = (form: Object) => {
    console.log('update', form)
  }

  handleSubmit = (values: Object) => {
    console.log('submit', values.toJS())
  }

  test = () => {
    this.props.set('form.programInfo.name', 123)
  }

  render () {
    const { percentage } = this.state
    return (
      <Form
        model='form'
        onSubmit={val => this.handleSubmit(val)}
        onChange={this.handleChange}
      >
        <ProgramInfo percentage={percentage.programInfo} />
        <PersonalInfo
          percentage={
            (percentage.personalInfo + percentage.emergencyContact) / 2
          }
        />
        <IASupervisor percentage={percentage.iaSupervisor} />
        <SiteVisit percentage={percentage.siteVisit} />
        <button type='submit'>Submit!</button>
        <div onClick={this.test}>test</div>
      </Form>
    )
  }
}

const mapDispatchToProps = {
  set: formCreators.setField
}

export default connect(
  undefined,
  mapDispatchToProps
)(FormBody)
