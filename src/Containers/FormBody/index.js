// @flow strict

import React from 'react'
import { Form } from 'react-redux-form/immutable'

import { IADetail } from '../../Components/IADetail'
import { IASupervisor } from '../../Components/IASupervisor'
import { PersonalInfo } from '../../Components/PersonalInfo'
import { ProgramInfo } from '../../Components/ProgramInfo'
import { SiteVisit } from '../../Components/SiteVisit'
import { inputMap } from '../../inputMap'
import { INITIAL_STATE } from '../../redux/form/reducer'
import {
  getCompletePercentage,
  getInitPercentage
} from '../../utils/formHelper'

type State = {
  percentage: { [string]: number }
}

export class FormBody extends React.PureComponent<{}, State> {
  state = {
    percentage: getInitPercentage(inputMap)
  }

  componentDidMount () {
    const percentageObj = getCompletePercentage(inputMap, INITIAL_STATE.toJS())
    this.setState({ percentage: percentageObj })
  }

  handleChange = (values: Object) => {
    const percentageObj = getCompletePercentage(inputMap, values.toJS())
    this.setState({ percentage: percentageObj })
  }

  handleSubmit = (values: Object) => {
    console.log('submit', values.toJS())
  }

  render () {
    const { percentage } = this.state
    return (
      <Form
        model='form'
        onSubmit={val => this.handleSubmit(val)}
        onChange={this.handleChange}
        id='form'
      >
        <ProgramInfo percentage={percentage.programInfo} />
        <PersonalInfo
          percentage={
            (percentage.personalInfo + percentage.emergencyContact) / 2
          }
        />
        <IASupervisor percentage={percentage.iaSupervisor} />
        <IADetail
          percentage={
            (percentage.iaCompany +
              percentage.iaMentor +
              percentage.iaJob +
              percentage.iaRequirement) /
            4
          }
        />
        <SiteVisit percentage={percentage.siteVisit} />
      </Form>
    )
  }
}
