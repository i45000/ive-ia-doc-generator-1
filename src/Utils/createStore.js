// @flow strict

import { compose, createStore as reduxCreateStore } from 'redux'
import type { CombinedReducer } from 'redux'

type Payload = {|
  preloadedState?: Object,
  rootReducer: CombinedReducer<any, any>
|}

export const createStore = ({ rootReducer, preloadedState = {} }: Payload) => {
  const composeEnhancers =
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose

  const store = reduxCreateStore(
    rootReducer,
    preloadedState,
    composeEnhancers()
  )

  return store
}
