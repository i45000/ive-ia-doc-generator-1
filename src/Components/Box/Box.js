// @flow strict

import classNames from 'classnames'
import * as React from 'react'
import { connect } from 'react-redux'

import { isDarkThemeSelector } from '../../redux/ui/selectors'
import classes from './index.css'

type Props = {
  children: React.Node,
  title: string,
  percentage: number,
  isDarkTheme: boolean
}

const Box = (props: Props) => (
  <div
    className={classNames(classes.box, { [classes.dark]: props.isDarkTheme })}
  >
    <div className={classes.titleWrapper}>
      <div
        className={classNames(classes.title, {
          [classes.border]: props.percentage === undefined
        })}
      >
        {props.title}
      </div>
      {props.percentage !== undefined && (
        <div className={classes.progressBg}>
          <div
            className={classes.progress}
            style={{ width: `${props.percentage}%` }}
          />
        </div>
      )}
    </div>
    <div className={classes.body}>{props.children}</div>
  </div>
)

const mapStateToProps = state => ({
  isDarkTheme: isDarkThemeSelector(state)
})

export default connect(mapStateToProps)(Box)
