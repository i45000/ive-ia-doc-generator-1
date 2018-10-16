// @flow strict

import { createForm } from 'rc-form'
import React from 'react'

import IACompany from '../IACompany'

class Form extends React.PureComponent<{}> {
  submit = () => {
    console.log('test')
  }
  render () {
    return (
      <React.Fragment>
        <IACompany />
      </React.Fragment>
    )
  }
}

export default createForm()(Form)
