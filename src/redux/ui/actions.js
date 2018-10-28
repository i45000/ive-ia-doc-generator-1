// @flow strict

import { createAction } from 'redux-actions'

export const uiTypes = {
  SET_IMPORT_EXPORT_COLLAPSED: 'SET_IMPORT_EXPORT_COLLAPSED',
  SET_TERMINAL_COLLAPSED: 'SET_TERMINAL_COLLAPSED'
}

const setImportExportCollapsed = createAction(
  uiTypes.SET_IMPORT_EXPORT_COLLAPSED,
  (collapsed: boolean) => collapsed
)

const setConsoleCollapsed = createAction(
  uiTypes.SET_TERMINAL_COLLAPSED,
  (collapsed: boolean) => collapsed
)

export const uiCreators = {
  setImportExportCollapsed,
  setConsoleCollapsed
}
