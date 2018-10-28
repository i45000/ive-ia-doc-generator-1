// @flow strict

import { uiCreators } from '../actions'
import {
  INITIAL_STATE,
  setConsoleCollapsed,
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

  test('#setConsoleCollapsed', () => {
    const trueAction = uiCreators.setConsoleCollapsed(true)
    const falseAction = uiCreators.setConsoleCollapsed(false)
    const mockInitialState = INITIAL_STATE

    const expectedTrueState = setConsoleCollapsed(mockInitialState, trueAction)
    const expectedFalseState = setConsoleCollapsed(
      mockInitialState,
      falseAction
    )

    expect(expectedTrueState).toHaveProperty('console.isCollapsed', true)
    expect(expectedFalseState).toHaveProperty('console.isCollapsed', false)
  })
})
