// @flow strict

import classnames from 'classnames'
import * as React from 'react'

import classes from './index.css'

type Props = {
  children: React.Node,
  for: string,
  label: string
}

export const FlexLabel = (props: Props) => (
  <div className={classes.flexWrapper}>
    {props.label && <label className={classes.label}>{props.label}</label>}
    {props.children}
  </div>
)
