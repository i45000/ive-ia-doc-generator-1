// @flow strict

import React from 'react'

import { Header } from '../../Components/Header'
import { Instruction } from '../../Components/Instruction'
import { FormBody } from '../FormBody'
import { ImportExport } from '../ImportExport'
import { ToolBar } from '../ToolBar'

export const App = () => (
  <React.Fragment>
    <Header />
    <ToolBar>
      <ImportExport />
    </ToolBar>
    <Instruction />
    <FormBody />
  </React.Fragment>
)
