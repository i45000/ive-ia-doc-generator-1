// @flow strict

import { actions } from 'react-redux-form/immutable'

const setFields = (id: string, value: any) => actions.change(id, value)

export const formCreators = {
  setFields
}
