// @flow strict

import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'
import storage from 'redux-persist/lib/storage'

import { formReducer } from './form/reducer'
import { uiReducer } from './ui/reducer'

const rootPersistConfig = {
  transforms: [immutableTransform()],
  key: 'redux',
  storage: storage
}

const rootReducer = combineReducers({
  ui: uiReducer,
  ...formReducer
})

// $FlowFixMe
export default persistReducer(rootPersistConfig, rootReducer)
