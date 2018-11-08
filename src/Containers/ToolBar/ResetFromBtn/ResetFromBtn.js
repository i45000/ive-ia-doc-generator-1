// @flow strict

import * as React from 'react'
import { connect } from 'react-redux'

import { ToolbarBtn } from '../../../Components/ToolbarBtn'
import { inputMap } from '../../../inputMap'
import { formCreators } from '../../../redux'
import { getInitState } from '../../../utils/formHelper'

type Props = {
  setFields: (string, any) => void
}

type State = {
  reset: boolean
}

class ResetFromBtn extends React.PureComponent<Props, State> {
  state = {
    reset: false
  }

  handelReset = () => {
    const initialState = getInitState(inputMap)
    this.props.setFields('form', initialState)
    this.setState({ reset: true })
    setTimeout(() => {
      this.setState({ reset: false })
    }, 3000)
  }

  render () {
    return this.state.reset ? (
      <ToolbarBtn label='Reset!' disabled>
        <i className='fas fa-check' />
      </ToolbarBtn>
    ) : (
      <ToolbarBtn label='Reset Form' onClick={this.handelReset}>
        <i className='fas fa-redo-alt' />
      </ToolbarBtn>
    )
  }
}

const mapDispatchToProps = {
  setFields: formCreators.setFields
}

export default connect(
  null,
  mapDispatchToProps
)(ResetFromBtn)
