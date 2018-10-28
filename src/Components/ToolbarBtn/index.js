// @flow strict

import classNames from 'classnames'
import * as React from 'react'

import classes from './index.css'

type Props = {
  children: React.Node,
  light: boolean,
  label?: string
}

export const ToolbarBtn = ({ children, light, label, ...restProps }: Props) => (
  <div className={classes.wrapper}>
    <button
      type='button'
      className={classNames(classes.btn, { [classes.light]: light })}
      {...restProps}
    >
      {children}
    </button>
    {label !== undefined && <div className={classes.label}>{label}</div>}
  </div>
)
