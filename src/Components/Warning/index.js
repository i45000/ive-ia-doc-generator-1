// @flow strict

import React from 'react'

import { Box } from '../Box'
import classes from './index.css'

export const Warning = () => (
  <Box title='Warning'>
    <div className={classes.container}>
      Site visit(老作) part are for Page 17-18 and 26, and scores are pre filled{' '}
      <br />
      Because it require company to sign, 老作 it with your own risk！ <br />
      If company want to fill the report, please clear page 17-18 and 26 after
      generated the doc <br />
    </div>
  </Box>
)
