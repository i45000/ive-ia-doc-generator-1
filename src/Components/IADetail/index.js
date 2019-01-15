// @flow strict

import React from 'react'
import { Fieldset } from 'react-redux-form'

import { Box } from '../../Components/Box'
import { FlexLabel } from '../../Components/FlexLabel'
import { inputMap } from '../../inputMap'
import globalClasses from '../../style.css'
import { getFields } from '../../utils/formHelper'
import classes from './index.css'

type Props = {
  percentage: number
}

const fields = getFields(inputMap.iaCompany)
const mentorFields = getFields(inputMap.iaMentor)
const jobFields = getFields(inputMap.iaJob)
const requirementFields = getFields(inputMap.iaRequirement)

export const IADetail = (props: Props) => (
  <Box title='IA Detail' percentage={props.percentage}>
    <Fieldset model='.iaCompany'>
      <h4>Company</h4>
      <FlexLabel label='Name'>
        <span className={globalClasses.comment}>Chinese</span>
        {fields.chineseName}
        <span className={globalClasses.comment}>English</span>
        {fields.englishName}
      </FlexLabel>
      <FlexLabel label='Address'>{fields.address}</FlexLabel>
      <FlexLabel label='District'>{fields.district}</FlexLabel>
      <FlexLabel label='Business Registration Certificate No.'>
        {fields.businessRegistrationCertificateNo}
        <span>[optional]</span>
      </FlexLabel>
      <FlexLabel label='Nature of Business'>
        <div className={classes.noWidth}>{fields.type}</div>
        <div className={classes.noWidth}>{fields.nature}</div>
        {fields.nonITNature}
      </FlexLabel>
    </Fieldset>

    <Fieldset model='.iaMentor'>
      <h4>Mentor</h4>
      <FlexLabel label='Name'>
        <div className={classes.noWidth}>{mentorFields.prefix}</div>
        <span className={globalClasses.comment}>English</span>
        {mentorFields.name}
      </FlexLabel>
      <FlexLabel label='Department'>{mentorFields.department}</FlexLabel>
      <FlexLabel label='Position'>{mentorFields.position}</FlexLabel>
      <FlexLabel label='Tel'>{mentorFields.tel}</FlexLabel>
      <FlexLabel label='Fax'>
        {mentorFields.fax}
        <span>[optional]</span>
      </FlexLabel>
      <FlexLabel label='Email'>{mentorFields.email}</FlexLabel>
    </Fieldset>

    <Fieldset model='.iaJob'>
      <h4>Job Details</h4>
      <FlexLabel label='Address'>
        {jobFields.address}
        <span>[optional]</span>
      </FlexLabel>
      <FlexLabel label='District'>
        {jobFields.district}
        <span>[optional]</span>
      </FlexLabel>
      <FlexLabel label='Work outside HK'>{jobFields.workOutsideHK}</FlexLabel>
      <FlexLabel label='Country of Workplace'>
        <div className={classes.noWidth}>{jobFields.country}</div>
        {jobFields.nonHKCountry}
      </FlexLabel>
      <FlexLabel label='Area'>
        <div className={classes.noWidth}>{jobFields.area}</div>
        {jobFields.nonITArea}
      </FlexLabel>
      <FlexLabel label='Property'>{jobFields.property}</FlexLabel>
      <FlexLabel label='Shift Duty'>{jobFields.shiftDuty}</FlexLabel>
      <FlexLabel label='Title'>{jobFields.title}</FlexLabel>
      <FlexLabel label='No. of Places'>{jobFields.noOfPlace}</FlexLabel>
      <FlexLabel label='Department'>{jobFields.department}</FlexLabel>
      <FlexLabel label='Description'>{jobFields.description}</FlexLabel>
      <FlexLabel label='Start Date'>{jobFields.startDate}</FlexLabel>
      <FlexLabel label='End Date'>{jobFields.endDate}</FlexLabel>
      <FlexLabel label='Working Hour per Day'>
        {jobFields.hrPerDay}
        <span>Hour(s)</span>
      </FlexLabel>
      <FlexLabel label='Working Day per Week'>
        {jobFields.dayPerWeek}
        <span>Day(s)</span>
      </FlexLabel>
      <FlexLabel label='Working Hour'>
        {jobFields.workingHrFr}
        <span className={classes.to}>to</span>
        {jobFields.workingHrTo}
      </FlexLabel>
      <FlexLabel label='Total Working Hour'>
        {jobFields.totalHour}
        <span>Hour(s)</span>
      </FlexLabel>
      <FlexLabel label='Allowance'>
        <span>$</span>
        {jobFields.allowance}
        <span className={classes.to}>per</span>
        <div className={classes.noWidth}>{jobFields.allowancePer}</div>
      </FlexLabel>
      <FlexLabel>
        <span className={classes.atTheEndOf}>pay at the end of</span>
        <div className={classes.noWidth}>{jobFields.payAt}</div>
      </FlexLabel>
      <FlexLabel label='Overtime Allowance'>
        <span>$</span>
        {jobFields.overtimeAllowance}
      </FlexLabel>
      <FlexLabel label='Bonus Price'>
        <span>$</span>
        {jobFields.bonus}
      </FlexLabel>
    </Fieldset>

    <Fieldset model='.iaRequirement'>
      <h4>Job Requirement</h4>
      <FlexLabel label='Disciplines of Student Preferred'>
        {requirementFields.discPreferred}
      </FlexLabel>
      <FlexLabel label='Specialized Skills Required'>
        {requirementFields.skillReq}
      </FlexLabel>
      <FlexLabel label='Other Requirements'>
        {requirementFields.otherReq}
      </FlexLabel>
      <h4>Language Requirement</h4>
      <FlexLabel label='Chinese'>{requirementFields.chiReq}</FlexLabel>
      <FlexLabel label='English'>{requirementFields.engReq}</FlexLabel>
      <FlexLabel label='Putonghua'>{requirementFields.putReq}</FlexLabel>
    </Fieldset>
  </Box>
)
