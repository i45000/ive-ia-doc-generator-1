// @flow strict

import * as R from 'ramda'

export const isImportExportCollapsedSelector = R.path([
  'ui',
  'importExport',
  'isCollapsed'
])

export const isDarkThemeSelector = R.path(['ui', 'theme', 'dark'])
