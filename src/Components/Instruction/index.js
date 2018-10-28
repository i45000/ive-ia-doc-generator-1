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
        Load existing json above
      </li>
      <li>
        Press &quot;Generate IA Doc&quot;
        <div className={classes.or}>or</div>
        export as JSON (If you want to edit the info later)
      </li>
      <li>Sign the IA document at page 6, 7, 11, 13, 14, 16, 18</li>
    </ol>
  </Box>
)
