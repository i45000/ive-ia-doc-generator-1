// @flow strict

import React from 'react'

import { Box } from '../../Components/Box'
import { FlexLabel } from '../../Components/FlexLabel'
import { getDecoratedField } from '../../Utils/FormHelper'
import { inputMap } from '../Form/inputMap'

type Props = {
  form: Object,
  inputMap: $ElementType<typeof inputMap, string>,
  percentage: number
}

export default class ProgramInfo extends React.PureComponent<Props> {
  getDecoratedField = getDecoratedField(this.props.form, this.props.inputMap)

  render () {
    return (
      <Box title='Program Information' percentage={this.props.percentage}>
        <FlexLabel label='Year'>
          {this.getDecoratedField('first_year')}
          to
          {this.getDecoratedField('this_year')}
        </FlexLabel>
        <FlexLabel label='Student ID'>
          {this.getDecoratedField('st_no')}
        </FlexLabel>
        <FlexLabel label='Campus'>{this.getDecoratedField('campus')}</FlexLabel>
        <FlexLabel label='Department'>
          {this.getDecoratedField('department')}
        </FlexLabel>
        <FlexLabel label='Department Head'>
          {this.getDecoratedField('department_head')}
        </FlexLabel>
        <FlexLabel label='Programme Title'>
          {this.getDecoratedField('program_title')}
        </FlexLabel>
        <FlexLabel label='Programme Code'>
          {this.getDecoratedField('program_no')}
        </FlexLabel>
        <FlexLabel label='Class'>{this.getDecoratedField('class')}</FlexLabel>
      </Box>
    )
  }
}
