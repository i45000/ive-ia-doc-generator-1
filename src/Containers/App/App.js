// @flow strict

import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

import { Container } from '../../Components/Container'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header'
import { Instruction } from '../../Components/Instruction'
import { isDarkThemeSelector } from '../../redux/ui/selectors'
import { FormBody } from '../FormBody'
import { ImportExport } from '../ImportExport'
import { ToolBar } from '../ToolBar'
import classes from './index.css'

const App = ({ isDarkTheme }: { isDarkTheme: boolean }) => (
  <div className={classNames(classes.wrapper, { [classes.dark]: isDarkTheme })}>
    <Header isDarkTheme={isDarkTheme} />
    <ToolBar isDarkTheme={isDarkTheme} />
    <ImportExport isDarkTheme={isDarkTheme} />
    <Container>
      <Instruction />
      <FormBody />
    </Container>
    <Footer isDarkTheme={isDarkTheme} />
  </div>
)

const mapStateToProps = state => ({
  isDarkTheme: isDarkThemeSelector(state)
})

export default connect(mapStateToProps)(App)
