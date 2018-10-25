// @flow strict

import React from 'react'

import { Header } from '../../Components/Header'
import { Instruction } from '../../Components/Instruction'
import FormBody from '../FormBody/FormBody'
import LoadJson from '../LoadJson'

export const App = () => (
  <React.Fragment>
    <Header />
    <Instruction />
    <LoadJson />
    <FormBody />
  </React.Fragment>
)
