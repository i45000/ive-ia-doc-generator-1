// @flow strict

import classNames from 'classnames'
import * as React from 'react'

import classes from './index.css'

type Props = {
  children: React.Node,
  light: boolean
}

export const ToolbarBtn = ({ children, light, ...restProps }: Props) => (
  <button
    type='button'
    className={classNames(classes.btn, { [classes.light]: light })}
    {...restProps}
  >
    {children}
  </button>
)
