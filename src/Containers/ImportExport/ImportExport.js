// @flow strict

import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

import { Container } from '../../Components/Container'
import { formCreators } from '../../redux'
import { formSelector } from '../../redux/form/selectors'
import { isImportExportCollapsedSelector } from '../../redux/ui/selectors'
import { Export } from './Export'
import classes from './index.css'

type Props = {
  form: Object,
  isCollapsed: boolean
}

const ImportExport = (props: Props) => (
  <div
    className={classNames(classes.container, {
      [classes.collapsed]: props.isCollapsed
    })}
  >
    <Container>
      <div className={classes.column}>
        <div className={classes.columnWrapper}>
          <span className={classes.title}>Import</span>
        </div>
      </div>
      <div className={classes.column}>
        <div className={classes.columnWrapper}>
          <span className={classes.title}>Export</span>
          <Export formData={props.form.toJS()} />
        </div>
      </div>
    </Container>
  </div>
)

const mapStateToProps = state => ({
  form: formSelector(state),
  isCollapsed: isImportExportCollapsedSelector(state)
})

const mapDispatchToProps = {
  set: formCreators.setField
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImportExport)
