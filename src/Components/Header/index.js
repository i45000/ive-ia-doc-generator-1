// @flow strict

import classNames from 'classnames'
import React from 'react'

import ghLogo from '../../assets/github-logo.svg'
import logo from '../../assets/logo.svg'
import classes from './index.css'

export const Header = ({ isDarkTheme }: { isDarkTheme: boolean }) => (
  <header
    className={classNames(classes.header, { [classes.dark]: isDarkTheme })}
  >
    <img src={logo} className={classes.logo} alt='logo' />
    <div className={classes.title}>IVE IA Document Generator</div>
    <a href='https://github.com/marklai1998/IVE-IA-Doc-Generator'>
      <img src={ghLogo} className={classes.ghLogo} alt='git-hub-logo' />
    </a>
  </header>
)
