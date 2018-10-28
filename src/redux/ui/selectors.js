// @flow strict

export const isImportExportCollapsedSelector = (state: Object) =>
  state.ui.getIn(['importExport', 'isCollapsed'])

export const isConsoleCollapsedSelector = (state: Object) =>
  state.ui.getIn(['console', 'isCollapsed'])
