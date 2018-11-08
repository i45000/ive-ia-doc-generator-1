// @flow strict

import React from 'react'

import classes from './index.css'

export const IosWarning = () => (
  <div className={classes.container}>
    iOS device detected! Import/Export function may impact. Suggest using
    android, PC or Mac
  </div>
)
