// @flow strict

import { createAction } from 'redux-actions'

export const uiTypes = {
  SET_IMPORT_EXPORT_COLLAPSED: 'SET_IMPORT_EXPORT_COLLAPSED',
  SET_COLOR_THEME: 'SET_COLOR_THEME'
}

const setImportExportCollapsed = createAction(
  uiTypes.SET_IMPORT_EXPORT_COLLAPSED,
  (collapsed: boolean) => collapsed
)

const setColorTheme = createAction(
  uiTypes.SET_COLOR_THEME,
  (collapsed: boolean) => collapsed
)

export const uiCreators = {
  setImportExportCollapsed,
  setColorTheme
}
