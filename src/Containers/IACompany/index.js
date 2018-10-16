// @flow strict

import React from 'react'

import { Box } from '../../Components/Box'

type State = {
  percentage: number
}

export default class IACompany extends React.PureComponent<{}, State> {
  state = {
    percentage: 10
  }
  render () {
    return (
      <Box title='IA Company' percentage={this.state.percentage}>
        test
      </Box>
    )
  }
}
