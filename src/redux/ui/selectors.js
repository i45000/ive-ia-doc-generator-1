// @flow strict

export const isImportExportCollapsedSelector = (state: Object) =>
  state.ui.getIn(['importExport', 'isCollapsed'])

export const isDarkThemeSelector = (state: Object) =>
  state.ui.getIn(['theme', 'dark'])
