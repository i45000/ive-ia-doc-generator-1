// @flow strict

import { Record } from 'immutable'
import type { RecordOf } from 'immutable'
import { handleActions } from 'redux-actions'
import type { ActionType } from 'redux-actions'

import { uiCreators, uiTypes } from './actions'

type StateProps = {
  importExport: RecordOf<{ isCollapsed: boolean }>,
  console: RecordOf<{ isCollapsed: boolean }>
}
export const INITIAL_STATE: RecordOf<StateProps> = Record({
  importExport: Record({
    isCollapsed: true
  })(),
  console: Record({
    isCollapsed: true
  })()
})()

export const setImportExportCollapsed = (
  state: typeof INITIAL_STATE,
  { payload }: ActionType<typeof uiCreators.setImportExportCollapsed>
) => state.setIn(['importExport', 'isCollapsed'], payload)

export const setConsoleCollapsed = (
  state: typeof INITIAL_STATE,
  { payload }: ActionType<typeof uiCreators.setConsoleCollapsed>
) => state.setIn(['console', 'isCollapsed'], payload)

export const uiReducer = handleActions(
  {
    [uiTypes.SET_IMPORT_EXPORT_COLLAPSED]: setImportExportCollapsed,
    [uiTypes.SET_TERMINAL_COLLAPSED]: setConsoleCollapsed
  },
  INITIAL_STATE
)
