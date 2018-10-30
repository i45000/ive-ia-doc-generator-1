// @flow strict

import React from 'react'

import { Box } from '../Box'
import classes from './index.css'

export const Instruction = () => (
  <Box title='Instruction'>
    <ol className={classes.list}>
      <li>
        Fill in this form
        <div className={classes.or}>or</div>
        Import existing data
      </li>
      <li>
        Press &quot;Generate Document&quot;
        <div className={classes.or}>or</div>
        Export as JSON for future edit or share
      </li>
      <li>Sign the Document at page 6, 7, 11, 13, 14, 16, 18</li>
    </ol>
  </Box>
)
