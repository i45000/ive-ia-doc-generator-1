// @flow strict

import React from 'react'
import { Fieldset } from 'react-redux-form'

import { Box } from '../../Components/Box'
import { FlexLabel } from '../../Components/FlexLabel'
import { inputMap } from '../../inputMap'
import { getFields } from '../../utils/formHelper'
import classes from './index.css'

type Props = {
  percentage: number
}

const fields = getFields(inputMap.programInfo)

export const ProgramInfo = (props: Props) => (
  <Box title='Program Information' percentage={props.percentage}>
    <Fieldset model='.programInfo'>
      <FlexLabel label='Year'>
        {fields.firstYear}
        <span className={classes.to}>to</span>
        {fields.thisYear}
      </FlexLabel>
      <FlexLabel label='Student ID'>{fields.stuNo}</FlexLabel>
      <FlexLabel label='Campus'>{fields.campus}</FlexLabel>
      <FlexLabel label='Department'>{fields.department}</FlexLabel>
      <FlexLabel label='Department Head'>{fields.departmentHead}</FlexLabel>
      <FlexLabel label='Programme Title'>{fields.programmeTitle}</FlexLabel>
      <FlexLabel label='Programme Code'>{fields.programmeCode}</FlexLabel>
      <FlexLabel label='Class'>{fields.class}</FlexLabel>
    </Fieldset>
  </Box>
)
