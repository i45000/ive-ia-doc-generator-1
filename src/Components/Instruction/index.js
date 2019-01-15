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
      <li>Sign the Document at page 6, 7, 11, 13, 14, 18, 23, 24</li>
      <li>Complete the survey at page 19-21</li>
      <li>Complete the report at page 25-27</li>
    </ol>
    <div className={classes.note}>
      Note <br />
      Page 15, 16 will not generate(and no need to sign) because it is optional
      (see page 15 head)
    </div>
  </Box>
)
