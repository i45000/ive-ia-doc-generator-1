// @flow strict

import classNames from 'classnames'
import * as R from 'ramda'
import React from 'react'
import Dropzone from 'react-dropzone'

import { dropZoneMap, dropZoneType } from './dropZoneMap'
import type { DropZoneType } from './dropZoneMap'
import classes from './index.css'

type State = {
  status: DropZoneType
}

type Props = {
  validateAndSet: Object => void,
  isDarkTheme: boolean
}

export class ImportFromFile extends React.PureComponent<Props, State> {
  state = {
    status: dropZoneType.DEFAULT
  }

  onDragEnter = () => {
    this.setState({ status: dropZoneType.HOVER })
  }

  onDragLeave = () => {
    this.setState({ status: dropZoneType.DEFAULT })
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
          this.setState({ status: dropZoneType.SUCCESS })
          setTimeout(() => {
            this.setState({ status: dropZoneType.DEFAULT })
          }, 3000)
        } catch (error) {
          this.setState({ status: dropZoneType.INVALID })
          setTimeout(() => {
            this.setState({ status: dropZoneType.DEFAULT })
          }, 3000)
        }
      }
      fileReader.readAsText(files[0], 'UTF-8')
    } catch (error) {
      this.setState({ status: dropZoneType.INVALID })
      setTimeout(() => {
        this.setState({ status: dropZoneType.DEFAULT })
      }, 3000)
    }
  }

  render () {
    const zoneObj = R.find(R.propEq('enum', this.state.status), dropZoneMap)
    return zoneObj ? (
      <Dropzone
        onDrop={this.onDrop}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        accept={'application/json'}
        multiple={false}
        disabled={zoneObj.disabled}
        className={classNames(classes.dropZone, {
          [classes.dark]: this.props.isDarkTheme,
          [classes.invalid]: this.state.status === dropZoneType.INVALID,
          [classes.success]: this.state.status === dropZoneType.SUCCESS
        })}
      >
        {zoneObj.element}
      </Dropzone>
    ) : null
  }
}
