// @flow strict

import { emergencyContact } from './emergencyContact'
import { iaCompany } from './iaCompany'
import { iaJob } from './iaJob'
import { iaMentor } from './iaMentor'
import { iaRequirement } from './iaRequirement'
import { iaSupervisor } from './iaSupervisor'
import { medicalInfo } from './medicalInfo'
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
  medicalInfo,
  emergencyContact,
  iaSupervisor,
  iaCompany,
  iaMentor,
  iaJob,
  iaRequirement,
  siteVisit
}
