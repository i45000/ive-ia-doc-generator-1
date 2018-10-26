// @flow strict

import { combineForms } from 'react-redux-form/immutable'

import { programInfo } from './programInfo'

export const formReducer = combineForms({ programInfo }, 'form')
