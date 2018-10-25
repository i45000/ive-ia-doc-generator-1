// @flow strict

import React from 'react'
import { Control } from 'react-redux-form/immutable'

import { Box } from '../../Components/Box'

type Props = {
  percentage: number
}

export const ProgramInfo = (props: Props) => (
  <Box title='Program Information' percentage={props.percentage}>
    <label>Your name?</label>
    <Control.text model='.name' />
  </Box>
)
