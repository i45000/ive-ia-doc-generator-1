// @flow strict

import { actions } from 'react-redux-form'

const setFields = (id: string, value: any) => actions.change(id, value)

export const formCreators = { setFields }
