// @flow strict

import * as React from 'react'

export const clipboardBtnType = {
  SUCCESS: 'SUCCESS',
  INVALID: 'INVALID',
  DEFAULT: 'DEFAULT'
}

export type ClipboardBtnType = $Keys<typeof clipboardBtnType>

export type ClipboardBtnMapType = Array<{
  enum: ClipboardBtnType,
  element: React.Node,
  disabled: boolean
}>

export const clipboardBtnMap: ClipboardBtnMapType = [
  {
    enum: clipboardBtnType.SUCCESS,
    disabled: true,
    element: (
      <React.Fragment>
        <i className='fas fa-check' />
        Success!
      </React.Fragment>
    )
  },
  {
    enum: clipboardBtnType.INVALID,
    disabled: true,
    element: (
      <React.Fragment>
        <i className='fas fa-times' />
        Invalid Clipboard Text
      </React.Fragment>
    )
  },
  {
    enum: clipboardBtnType.DEFAULT,
    disabled: false,
    element: (
      <React.Fragment>
        <i className='fas fa-clipboard' />
        Import From Clipboard
      </React.Fragment>
    )
  }
]
