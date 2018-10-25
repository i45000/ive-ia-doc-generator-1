// @flow strict

import { Record } from 'immutable'
import type { RecordOf } from 'immutable'

type props = RecordOf<{ name: string }>

export const programInfo: props = Record({ name: '' })
