// @flow strict

// @flow strict

import FileSaver from 'file-saver'
import React from 'react'

import { ToolbarBtn } from '../../../Components/ToolbarBtn'

type Props = {
  formData: Object
}

export class SaveAsFile extends React.PureComponent<Props> {
  download = () => {
    const data = JSON.stringify(this.props.formData, null, 2)
    const blob = new Blob([data], {
      type: 'text/json;charset=utf-8'
    })
    FileSaver.saveAs(blob, 'exportedData.json')
  }

  render () {
    return (
      <ToolbarBtn onClick={this.download} label='Download as Json'>
        <i className='fas fa-download' />
      </ToolbarBtn>
    )
  }
}
