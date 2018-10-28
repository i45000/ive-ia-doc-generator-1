// @flow strict

import * as React from 'react'

import classes from './index.css'

type Props = {
  children: React.Node
}

export const Container = (props: Props) => (
  <div className={classes.flexWrapper}>
    <div className={classes.container}>{props.children}</div>
  </div>
)
