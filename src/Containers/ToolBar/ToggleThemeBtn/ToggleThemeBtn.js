// @flow strict

import * as React from 'react'
import { connect } from 'react-redux'

import { ToolbarBtn } from '../../../Components/ToolbarBtn'
import { uiCreators } from '../../../redux'
import { isDarkThemeSelector } from '../../../redux/ui/selectors'

type Props = {
  isDarkTheme: boolean,
  setColorTheme: boolean => void
}

class ToggleThemeBtn extends React.PureComponent<Props> {
  toggleImportExportCollapsed = () => {
    this.props.setColorTheme(!this.props.isDarkTheme)
  }

  render () {
    return (
      <ToolbarBtn
        onClick={this.toggleImportExportCollapsed}
        label={this.props.isDarkTheme ? 'Light Theme' : 'Dark Mode'}
      >
        <i className='fas fa-fill-drip' />
      </ToolbarBtn>
    )
  }
}

const mapStateToProps = state => ({
  isDarkTheme: isDarkThemeSelector(state)
})

const mapDispatchToProps = {
  setColorTheme: uiCreators.setColorTheme
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleThemeBtn)
