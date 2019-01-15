// @flow strict

import * as R from 'ramda'
import { handleActions } from 'redux-actions'
import type { ActionType } from 'redux-actions'

import { uiCreators, uiTypes } from './actions'

type State = {
  importExport: { isCollapsed: boolean },
  theme: { dark: boolean }
}

export const INITIAL_STATE: State = {
  importExport: {
    isCollapsed: true
  },
  theme: {
    dark: false
  }
}

export const setImportExportCollapsed = (
  state: typeof INITIAL_STATE,
  { payload }: ActionType<typeof uiCreators.setImportExportCollapsed>
) => R.assocPath(['importExport', 'isCollapsed'], payload, state)

export const setColorTheme = (
  state: typeof INITIAL_STATE,
  { payload }: ActionType<typeof uiCreators.setColorTheme>
) => R.assocPath(['theme', 'dark'], payload, state)

export const uiReducer = handleActions(
  {
    [uiTypes.SET_IMPORT_EXPORT_COLLAPSED]: setImportExportCollapsed,
    [uiTypes.SET_COLOR_THEME]: setColorTheme
  },
  INITIAL_STATE
)
