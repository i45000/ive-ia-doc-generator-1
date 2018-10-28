// @flow strict

import { actions } from 'react-redux-form/immutable'

const setField = (id: string, value: any) => actions.change(id, value)

export const formCreators = {
  setField
}
