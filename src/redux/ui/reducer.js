// @flow strict

import { Record } from 'immutable'
import type { RecordOf } from 'immutable'
import { handleActions } from 'redux-actions'
import type { ActionType } from 'redux-actions'

import { uiCreators, uiTypes } from './actions'

type StateProps = RecordOf<{
  importExport: RecordOf<{ isCollapsed: boolean }>,
  theme: RecordOf<{ dark: boolean }>
}>

export const INITIAL_STATE: RecordOf<StateProps> = Record({
  importExport: Record({
    isCollapsed: true
  })(),
  theme: Record({
    dark: false
  })()
})()

export const setImportExportCollapsed = (
  state: typeof INITIAL_STATE,
  { payload }: ActionType<typeof uiCreators.setImportExportCollapsed>
) => state.setIn(['importExport', 'isCollapsed'], payload)

export const setColorTheme = (
  state: typeof INITIAL_STATE,
  { payload }: ActionType<typeof uiCreators.setColorTheme>
) => state.setIn(['theme', 'dark'], payload)

export const uiReducer = handleActions(
  {
    [uiTypes.SET_IMPORT_EXPORT_COLLAPSED]: setImportExportCollapsed,
    [uiTypes.SET_COLOR_THEME]: setColorTheme
  },
  INITIAL_STATE
)
