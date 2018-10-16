// @flow strict

import { createForm } from 'rc-form'
import React from 'react'

class Form extends React.PureComponent<{}> {
  submit = () => {
    console.log('test')
  }
  render () {
    return <div />
  }
}

export default createForm()(Form)
