// @flow strict

import { combineReducers } from 'redux'

import { formReducer } from './form/reducer'
import { uiReducer } from './ui/reducer'

export const rootReducer = combineReducers({
  ui: uiReducer,
  ...formReducer
})
