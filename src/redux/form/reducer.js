// @flow strict

import { createForms } from 'react-redux-form'

import { inputMap } from '../../inputMap'
import { getInitState } from '../../utils/formHelper'

export const INITIAL_STATE = getInitState(inputMap)

export const formReducer = createForms({ form: INITIAL_STATE })
