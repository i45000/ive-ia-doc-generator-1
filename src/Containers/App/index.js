// @flow strict

import React from 'react'

import { Header } from '../../Components/Header'
import { Instruction } from '../../Components/Instruction'
import Form from '../Form/Form'
import LoadJson from '../LoadJson'

export const App = () => (
  <React.Fragment>
    <Header />
    <Instruction />
    <LoadJson />
    <Form />
  </React.Fragment>
)
