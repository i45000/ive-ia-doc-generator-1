// @flow strict

import classNames from 'classnames'
import React from 'react'
import Dropzone from 'react-dropzone'

import classes from './index.css'

type State = {
  dragOver: boolean,
  invalid: boolean,
  success: boolean
}

type Props = {
  validateAndSet: Object => void
}

export class ImportFromFile extends React.PureComponent<Props, State> {
  state = {
    dragOver: false,
    invalid: false,
    success: false
  }

  onDragEnter = () => {
    this.setState({ dragOver: true })
  }

  onDragLeave = () => {
    this.setState({ dragOver: false })
  }

  onDrop = (files: [Object]) => {
    try {
      // eslint-disable-next-line
      let fileReader = new FileReader()
      // eslint-disable-next-line
      fileReader.onload = fileLoadedEvent => {
        try {
          const textToObject = JSON.parse(fileLoadedEvent.target.result)
          this.props.validateAndSet(textToObject)
          this.setState({ success: true, dragOver: false })
          setTimeout(() => {
            this.setState({ success: false })
          }, 3000)
        } catch (error) {
          this.setState({ invalid: true, dragOver: false })
          setTimeout(() => {
            this.setState({ invalid: false })
          }, 3000)
        }
      }
      fileReader.readAsText(files[0], 'UTF-8')
    } catch (error) {
      this.setState({ invalid: true })
      setTimeout(() => {
        this.setState({ invalid: false })
      }, 3000)
    }
  }

  render () {
    return (
      <Dropzone
        onDrop={this.onDrop}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        accept={'application/json'}
        multiple={false}
        disabled={this.state.invalid || this.state.success}
        className={classNames(classes.dropZone, {
          [classes.invalid]: this.state.invalid,
          [classes.success]: this.state.success
        })}
      >
        {this.state.invalid ? (
          <React.Fragment>
            <i className='fas fa-times' />
            Invalid File
          </React.Fragment>
        ) : this.state.success ? (
          <React.Fragment>
            <i className='fas fa-check' />
            Success!
          </React.Fragment>
        ) : this.state.dragOver ? (
          <React.Fragment>
            <i className='fas fa-mouse-pointer' />
            Release Drag
          </React.Fragment>
        ) : (
          <React.Fragment>
            <i className='fas fa-file' />
            Drop File Here
          </React.Fragment>
        )}
      </Dropzone>
    )
  }
}
