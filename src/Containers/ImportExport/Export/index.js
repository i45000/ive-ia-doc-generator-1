// @flow strict

import FileSaver from 'file-saver'
import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import ReactJson from 'react-json-view'

import { ToolbarBtn } from '../../../Components/ToolbarBtn'
import classes from './index.css'

type Props = {
  formData: Object
}

export class Export extends React.PureComponent<Props> {
  download = () => {
    const data = JSON.stringify(this.props.formData, null, 2)
    const blob = new Blob([data], {
      type: 'text/json;charset=utf-8'
    })
    FileSaver.saveAs(blob, 'exportedData.json')
  }

  render () {
    const { formData } = this.props
    return (
      <React.Fragment>
        <div className={classes.jsonToolbar}>
          <ToolbarBtn onClick={this.download}>
            <i className='fas fa-download' />
          </ToolbarBtn>
          <CopyToClipboard text={JSON.stringify(formData, null, 2)}>
            <ToolbarBtn>
              <i className='fas fa-copy' />
            </ToolbarBtn>
          </CopyToClipboard>
        </div>
        <div className={classes.jsonContent}>
          <ReactJson
            src={formData}
            enableClipboard={false}
            displayDataTypes={false}
            name='form'
          />
        </div>
      </React.Fragment>
    )
  }
}
