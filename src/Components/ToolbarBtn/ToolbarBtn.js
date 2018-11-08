// @flow strict

import classNames from 'classnames'
import * as React from 'react'
import { connect } from 'react-redux'

import { isDarkThemeSelector } from '../../redux/ui/selectors'
import classes from './index.css'

type Props = {
  children: React.Node,
  light: boolean,
  label?: string,
  className?: string,
  isDarkTheme: boolean
}

const ToolbarBtn = ({
  children,
  light,
  label,
  className,
  isDarkTheme,
  ...restProps
}: Props) => (
  <div className={classes.wrapper}>
    <button
      type='button'
      className={classNames(
        classes.btn,
        { [classes.light]: light || isDarkTheme },
        className
      )}
      {...restProps}
    >
      {children}
    </button>
    {label !== undefined && (
      <div
        className={classNames(classes.label, { [classes.dark]: isDarkTheme })}
      >
        {label}
      </div>
    )}
  </div>
)

const mapStateToProps = state => ({
  isDarkTheme: isDarkThemeSelector(state)
})

export default connect(mapStateToProps)(ToolbarBtn)
