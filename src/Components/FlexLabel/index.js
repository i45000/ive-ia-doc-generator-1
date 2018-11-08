// @flow strict

import * as React from 'react'

import classes from './index.css'

type Props = {
  children: React.Node,
  label: string
}

export const FlexLabel = (props: Props) => (
  <div className={classes.flexWrapper}>
    <label className={classes.label}>{props.label}</label>
    {props.children}
  </div>
)
