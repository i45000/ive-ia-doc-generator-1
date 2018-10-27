// @flow strict

import React from 'react'
import { Fieldset } from 'react-redux-form'

import { Box } from '../../Components/Box'
import { FlexLabel } from '../../Components/FlexLabel'
import { inputMap } from '../../inputMap'
import globalClasses from '../../style.css'
import { getFields } from '../../Utils/formHelper'

type Props = {
  percentage: number
}

const fields = getFields(inputMap.iaSupervisor)

export const IASupervisor = (props: Props) => (
  <Box title='IA Supervisor' percentage={props.percentage}>
    <Fieldset model='.iaSupervisor'>
      <FlexLabel label='Name'>
        <span className={globalClasses.comment}>English</span>
        {fields.Name}
      </FlexLabel>
      <FlexLabel label='Post'>{fields.Post}</FlexLabel>
      <FlexLabel label='Phone'>{fields.Tel}</FlexLabel>
      <FlexLabel label='Email'>{fields.Email}</FlexLabel>
    </Fieldset>
  </Box>
)
