// @flow strict

import classNames from 'classnames'
import React from 'react'

import classes from './index.css'

export const Footer = ({ isDarkTheme }: { isDarkTheme: boolean }) => (
  <footer
    className={classNames(classes.footer, { [classes.dark]: isDarkTheme })}
  >
    All credits goes to: Mark Lai (IT114115 2016-2018)
    <br />
    Build with <i className='fab fa-react' />
    React.js
  </footer>
)
