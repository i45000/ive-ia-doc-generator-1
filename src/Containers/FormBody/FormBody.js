// @flow strict

import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-redux-form'

import { IADetail } from '../../Components/IADetail'
import { IASupervisor } from '../../Components/IASupervisor'
import { PersonalInfo } from '../../Components/PersonalInfo'
import { ProgramInfo } from '../../Components/ProgramInfo'
import { SiteVisit } from '../../Components/SiteVisit'
import { inputMap } from '../../inputMap'
import { formSelector } from '../../redux/form/selectors'
import {
  generateFile,
  getCompletePercentage,
  getInitPercentage
} from '../../utils/formHelper'

type State = {
  percentage: { [string]: number }
}

type Props = {
  form: Object
}

class FormBody extends React.PureComponent<Props, State> {
  state = {
    percentage: getInitPercentage(inputMap)
  }

  componentDidMount () {
    const percentageObj = getCompletePercentage(inputMap, this.props.form)
    this.setState({ percentage: percentageObj })
  }

  handleChange = (values: Object) => {
    const percentageObj = getCompletePercentage(inputMap, values)
    this.setState({ percentage: percentageObj })
  }

  handleSubmit = (values: Object) => {
    generateFile(values)
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

const mapStateToProps = state => ({
  form: formSelector(state)
})

export default connect(mapStateToProps)(FormBody)
