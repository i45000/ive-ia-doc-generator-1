// @flow strict

import React from 'react'
import { Fieldset } from 'react-redux-form'

import { Box } from '../../Components/Box'
import { FlexLabel } from '../../Components/FlexLabel'
import { inputMap } from '../../inputMap'
import globalClasses from '../../style.css'
import { getFields } from '../../utils/formHelper'

type Props = {
  percentage: number
}

const fields = getFields(inputMap.personalInfo)
const medicalInfoFields = getFields(inputMap.medicalInfo)
const emergencyFields = getFields(inputMap.emergencyContact)

export const PersonalInfo = (props: Props) => (
  <Box title='Personal Information' percentage={props.percentage}>
    <Fieldset model='.personalInfo'>
      <FlexLabel label='Name'>
        <span className={globalClasses.comment}>Chinese</span>
        {fields.chineseName}
        <span className={globalClasses.comment}>English</span>
        {fields.englishName}
      </FlexLabel>
      <FlexLabel label='HKID Number'>
        <span className={globalClasses.comment}>Format: A1234567</span>
        {fields.hkid}
      </FlexLabel>
      <FlexLabel label='Tel'>
        <span>+852</span>
        {fields.tel}
      </FlexLabel>
      <FlexLabel label='Email'>{fields.email}</FlexLabel>
    </Fieldset>

    <Fieldset model='.medicalInfo'>
      <h4>Medical Information</h4>
      <FlexLabel label='Allergies'>
        {medicalInfoFields.allergies}
        <span>[optional]</span>
      </FlexLabel>
      <FlexLabel label='Prescription Drugs'>
        {medicalInfoFields.prescriptionDrugs}
        <span>[optional]</span>
      </FlexLabel>
      <FlexLabel label='Physical Limitations'>
        {medicalInfoFields.physicalLimitations}
        <span>[optional]</span>
      </FlexLabel>
      <FlexLabel label='Other'>
        {medicalInfoFields.other}
        <span>[optional]</span>
      </FlexLabel>
    </Fieldset>

    <Fieldset model='.emergencyContact'>
      <h4>Emergency Contact</h4>
      <FlexLabel label='Type'>{emergencyFields.type}</FlexLabel>
      <FlexLabel label='Name'>
        <span className={globalClasses.comment}>English</span>
        {emergencyFields.name}
      </FlexLabel>
      <FlexLabel label='Relationship'>{emergencyFields.relationship}</FlexLabel>
      <FlexLabel label='Place of Work'>{emergencyFields.placeOfWork}</FlexLabel>
      <FlexLabel label='Home Tel'>
        <span>+852</span>
        {emergencyFields.homeTel}
      </FlexLabel>
      <FlexLabel label='Work Tel'>
        <span>+852</span>
        {emergencyFields.workTel}
      </FlexLabel>
      <FlexLabel label='Mobile'>
        <span>+852</span>
        {emergencyFields.mobile}
      </FlexLabel>

      <h4>Doctor Contact</h4>
      <FlexLabel label='Name'>
        <span className={globalClasses.comment}>English</span>
        {emergencyFields.doctorName}
        <span>[optional]</span>
      </FlexLabel>
      <FlexLabel label='Tel'>
        <span>+852</span>
        {emergencyFields.doctorTel}
        <span>[optional]</span>
      </FlexLabel>
    </Fieldset>
  </Box>
)
