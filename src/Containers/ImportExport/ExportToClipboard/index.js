// @flow strict

import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { ToolbarBtn } from '../../../Components/ToolbarBtn'

type Props = {
  formData: Object
}

type State = {
  copied: boolean
}

export class ExportToClipboard extends React.PureComponent<Props, State> {
  state = {
    copied: false
  }

  handelCopy = () => {
    this.setState({ copied: true })
    setTimeout(() => {
      this.setState({ copied: false })
    }, 3000)
  }

  render () {
    return this.state.copied ? (
      <ToolbarBtn label='Copied!' disabled>
        <i className='fas fa-check' />
      </ToolbarBtn>
    ) : (
      <CopyToClipboard
        onCopy={this.handelCopy}
        text={JSON.stringify(this.props.formData, null, 2)}
        label='Copy to Clipboard'
      >
        <ToolbarBtn>
          <i className='fas fa-copy' />
        </ToolbarBtn>
      </CopyToClipboard>
    )
  }
}
