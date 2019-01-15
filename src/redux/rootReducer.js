// @flow strict

import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { formReducer } from './form/reducer'
import { uiReducer } from './ui/reducer'

const rootPersistConfig = {
  key: 'redux',
  storage: storage
}

const rootReducer = combineReducers({
  ui: uiReducer,
  ...formReducer
})

// $FlowFixMe
export default persistReducer(rootPersistConfig, rootReducer)
