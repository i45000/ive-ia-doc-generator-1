// @flow strict

import classNames from 'classnames'
import * as React from 'react'
import { connect } from 'react-redux'

import { Container } from '../../Components/Container'
import { ToolbarBtn } from '../../Components/ToolbarBtn'
import { uiCreators } from '../../redux'
import { isImportExportCollapsedSelector } from '../../redux/ui/selectors'
import classes from './index.css'
import { ResetFromBtn } from './ResetFromBtn'
import { ToggleThemeBtn } from './ToggleThemeBtn'

type Props = {
  isImportExportCollapsed: boolean,
  setImportExportCollapsed: boolean => void,
  isDarkTheme: boolean
}

class ToolBar extends React.PureComponent<Props> {
  componentDidMount () {
    this.collapseWindows()
  }

  toggleImportExportCollapsed = () => {
    this.props.setImportExportCollapsed(!this.props.isImportExportCollapsed)
  }

  resetForm = () => {
    this.collapseWindows()
  }

  collapseWindows = () => {
    this.props.setImportExportCollapsed(true)
  }

  render () {
    return (
      <div
        className={classNames(classes.toolBar, {
          [classes.dark]: this.props.isDarkTheme
        })}
      >
        <Container>
          <ToolbarBtn
            type='submit'
            form='form'
            label='Generate Document'
            onClick={this.collapseWindows}
          >
            <i className='fas fa-file-signature' />
          </ToolbarBtn>
          <div className={classes.spacer} />
          <ToolbarBtn
            onClick={this.toggleImportExportCollapsed}
            label='Import / Export'
          >
            <i className='fas fa-file-import' />
          </ToolbarBtn>
          <ResetFromBtn />
          <ToggleThemeBtn />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isImportExportCollapsed: isImportExportCollapsedSelector(state)
})

const mapDispatchToProps = {
  setImportExportCollapsed: uiCreators.setImportExportCollapsed
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBar)
