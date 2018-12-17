// @flow strict

import React from 'react'
import { Fieldset } from 'react-redux-form'

import { Box } from '../../Components/Box'
import { FlexLabel } from '../../Components/FlexLabel'
import { inputMap } from '../../inputMap'
import globalClasses from '../../style.css'
import { getFields } from '../../utils/formHelper'

type Props = {
  percentage: number
}

const fields = getFields(inputMap.iaSupervisor)

export const IASupervisor = (props: Props) => (
  <Box title='IA Supervisor' percentage={props.percentage}>
    <Fieldset model='.iaSupervisor'>
      <FlexLabel label='Name'>
        <span className={globalClasses.comment}>English</span>
        {fields.name}
      </FlexLabel>
      <FlexLabel label='Post'>{fields.post}</FlexLabel>
      <FlexLabel label='Phone'>{fields.tel}</FlexLabel>
      <FlexLabel label='Email'>{fields.email}</FlexLabel>
    </Fieldset>
  </Box>
)
