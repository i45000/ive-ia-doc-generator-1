// @flow strict

import classNames from 'classnames'
import React from 'react'
import ScrollToTop from 'react-scroll-up'

import classes from './index.css'

export const GoToTop = ({ isDarkTheme }: { isDarkTheme: boolean }) => (
  <ScrollToTop showUnder={160}>
    <button
      type='button'
      className={classNames(classes.btn, { [classes.dark]: isDarkTheme })}
    >
      <i className='fas fa-angle-double-up' />
    </button>
  </ScrollToTop>
)
