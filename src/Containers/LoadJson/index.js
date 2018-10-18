// @flow strict

import React from 'react'

import { Box } from '../../Components/Box'

type State = {
  percentage: number
}

export default class LoadJson extends React.PureComponent<{}, State> {
  loadJson = () => {}
  render () {
    return <Box title='Read Existing Json file'>test</Box>
  }
}
