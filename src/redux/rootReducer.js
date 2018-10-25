// @flow strict

import { combineForms } from 'react-redux-form/immutable'
import { combineReducers } from 'redux'

import { programInfo } from './form/programInfo'
import { uiReducer } from './ui/reducer'

export const rootReducer = combineReducers({
  ui: uiReducer,
  form: combineForms({ programInfo }, 'form')
})
