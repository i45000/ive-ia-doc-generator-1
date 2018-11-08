// @flow strict

import * as React from 'react'

export const dropZoneType = {
  SUCCESS: 'SUCCESS',
  INVALID: 'INVALID',
  HOVER: 'HOVER',
  DEFAULT: 'DEFAULT'
}

export type DropZoneType = $Keys<typeof dropZoneType>

export type DropZoneMapType = Array<{
  enum: DropZoneType,
  element: React.Node,
  disabled: boolean
}>

export const dropZoneMap: DropZoneMapType = [
  {
    enum: dropZoneType.SUCCESS,
    disabled: true,
    element: (
      <React.Fragment>
        <i className='fas fa-check' />
        Success!
      </React.Fragment>
    )
  },
  {
    enum: dropZoneType.INVALID,
    disabled: true,
    element: (
      <React.Fragment>
        <i className='fas fa-times' />
        Invalid File
      </React.Fragment>
    )
  },
  {
    enum: dropZoneType.HOVER,
    disabled: false,
    element: (
      <React.Fragment>
        <i className='fas fa-file' />
        Drop File Here
      </React.Fragment>
    )
  },
  {
    enum: dropZoneType.DEFAULT,
    disabled: false,
    element: (
      <React.Fragment>
        <i className='fas fa-file' />
        Drop File Here
      </React.Fragment>
    )
  }
]
