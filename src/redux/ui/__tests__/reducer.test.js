// @flow strict

import { uiCreators } from '../actions'
import {
  INITIAL_STATE,
  setColorTheme,
  setImportExportCollapsed
} from '../reducer'

describe('ui/reducer', () => {
  test('#setImportExportCollapsed', () => {
    const trueAction = uiCreators.setImportExportCollapsed(true)
    const falseAction = uiCreators.setImportExportCollapsed(false)
    const mockInitialState = INITIAL_STATE

    const expectedTrueState = setImportExportCollapsed(
      mockInitialState,
      trueAction
    )
    const expectedFalseState = setImportExportCollapsed(
      mockInitialState,
      falseAction
    )

    expect(expectedTrueState).toHaveProperty('importExport.isCollapsed', true)
    expect(expectedFalseState).toHaveProperty('importExport.isCollapsed', false)
  })

  test('#setColorTheme', () => {
    const trueAction = uiCreators.setColorTheme(true)
    const falseAction = uiCreators.setColorTheme(false)
    const mockInitialState = INITIAL_STATE

    const expectedTrueState = setColorTheme(mockInitialState, trueAction)
    const expectedFalseState = setColorTheme(mockInitialState, falseAction)

    expect(expectedTrueState).toHaveProperty('theme.dark', true)
    expect(expectedFalseState).toHaveProperty('theme.dark', false)
  })
})
