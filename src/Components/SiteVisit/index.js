// @flow strict

import React from 'react'
import { Fieldset } from 'react-redux-form'

import { Box } from '../../Components/Box'
import { FlexLabel } from '../../Components/FlexLabel'
import { inputMap } from '../../inputMap'
import { getFields } from '../../utils/formHelper'

type Props = {
  percentage: number
}

const fields = getFields(inputMap.siteVisit)

export const SiteVisit = (props: Props) => (
  <Box title='Site Visit (老作)' percentage={props.percentage}>
    <Fieldset model='.siteVisit'>
      <FlexLabel label='Date'>
        {fields.date}
        <span>Hour</span>
      </FlexLabel>
      <FlexLabel label='Time Length'>
        {fields.timeLen}
        <span>Hour</span>
      </FlexLabel>
      <FlexLabel label='Work Done'>{fields.workDone}</FlexLabel>
      <FlexLabel label='Summary of work'>{fields.summaryOfWork}</FlexLabel>
      <FlexLabel label='老作一句讚自己'>{fields.g1}</FlexLabel>
      <FlexLabel label='老作一句讚自己x2'>{fields.g2}</FlexLabel>
      <FlexLabel label='老作一句讚自己x3'>{fields.g3}</FlexLabel>
      <FlexLabel label='老作一句彈自己'>{fields.b1}</FlexLabel>
      <FlexLabel label='老作一句彈自己x2'>{fields.b2}</FlexLabel>
    </Fieldset>
  </Box>
)
