// @flow strict

import classnames from 'classnames'
import * as React from 'react'

import { Container } from '../Container'
import classes from './index.css'

type Props = {
  children: React.Node,
  title: string,
  percentage: number
}

export const Box = (props: Props) => (
  <Container>
    <div className={classes.box}>
      <div className={classes.titleWrapper}>
        {props.title && (
          <div
            className={classnames(classes.title, {
              [classes.border]: props.percentage === undefined
            })}
          >
            {props.title}
          </div>
        )}
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
  </Container>
)
