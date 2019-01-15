// @flow strict

import classNames from 'classnames'
import React from 'react'
import { isIOS } from 'react-device-detect'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import faviconDark from '../../assets/favicon-dark.ico'
import favicon from '../../assets/favicon.ico'
import { Container } from '../../Components/Container'
import { Footer } from '../../Components/Footer'
import { GoToTop } from '../../Components/GoToTop'
import { Header } from '../../Components/Header'
import { Instruction } from '../../Components/Instruction'
import { IosWarning } from '../../Components/IosWarning'
import { Warning } from '../../Components/Warning'
import { isDarkThemeSelector } from '../../redux/ui/selectors'
import { FormBody } from '../FormBody'
import { ImportExport } from '../ImportExport'
import { ToolBar } from '../ToolBar'
import classes from './index.css'

const App = ({ isDarkTheme }: { isDarkTheme: boolean }) => (
  <React.Fragment>
    <Helmet>
      <link rel='shortcut icon' href={isDarkTheme ? faviconDark : favicon} />
    </Helmet>
    <div
      className={classNames(classes.wrapper, { [classes.dark]: isDarkTheme })}
    >
      {isIOS ? <IosWarning /> : null}
      <Header isDarkTheme={isDarkTheme} />
      <ToolBar isDarkTheme={isDarkTheme} />
      <ImportExport isDarkTheme={isDarkTheme} />
      <Container>
        <Instruction />
        <Warning />
        <FormBody />
      </Container>
      <Footer isDarkTheme={isDarkTheme} />
      <GoToTop isDarkTheme={isDarkTheme} />
    </div>
  </React.Fragment>
)

const mapStateToProps = state => ({
  isDarkTheme: isDarkThemeSelector(state)
})

export default connect(mapStateToProps)(App)
