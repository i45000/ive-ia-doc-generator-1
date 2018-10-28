// @flow strict

import * as React from 'react'
import { connect } from 'react-redux'

import { Container } from '../../Components/Container'
import { ToolbarBtn } from '../../Components/ToolbarBtn'
import { uiCreators } from '../../redux'
import { isImportExportCollapsedSelector } from '../../redux/ui/selectors'
import classes from './index.css'

type Props = {
  children: React.Node,
  isImportExportCollapsed: boolean,
  setImportExportCollapsed: boolean => void
}

class ToolBar extends React.PureComponent<Props> {
  toggleImportExportCollapsed = () => {
    this.props.setImportExportCollapsed(!this.props.isImportExportCollapsed)
  }

  render () {
    const { children } = this.props
    return (
      <div className={classes.wrapper}>
        <div className={classes.toolBar}>
          <Container>
            <ToolbarBtn type='submit' form='form' label='Generate Document'>
              <i className='fas fa-file-signature' />
            </ToolbarBtn>
            <ToolbarBtn
              onClick={this.toggleImportExportCollapsed}
              label='Import / Export'
            >
              <i className='fas fa-file-import' />
            </ToolbarBtn>
          </Container>
        </div>
        {children}
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
