// @flow strict

import { emergencyContact } from './emergencyContact'
import { iaSupervisor } from './iaSupervisor'
import { personalInfo } from './personalInfo'
import { programInfo } from './programInfo'
import { siteVisit } from './siteVisit'

export const inputMap: {
  [string]: {
    [string]: {
      required: boolean,
      initialValue: any,
      key?: string,
      element: any
    }
  }
} = {
  programInfo,
  personalInfo,
  emergencyContact,
  iaSupervisor,
  siteVisit
}
