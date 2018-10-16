// @flow strict

import * as React from 'react'

import classes from './index.css'

type Props = {
  children: React.Node,
  title: string
}

export const Box = (props: Props) => (
  <div className={classes.flexWrapper}>
    <div className={classes.box}>
      {props.title && <div className={classes.title}>{props.title}</div>}
      <div className={classes.body}>{props.children}</div>
    </div>
  </div>
)
