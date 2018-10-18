// @flow strict

import React from 'react'

export const inputMap: {
  [string]: {
    [string]: {
      required: boolean,
      initialValue?: any,
      element: any
    }
  }
} = {
  programInfo: {
    first_year: {
      required: true,
      initialValue: new Date().getFullYear() - 1,
      element: <input type='number' min='1000' max='9999' />
    },
    this_year: {
      required: true,
      initialValue: new Date().getFullYear(),
      element: <input type='number' min='1000' max='9999' />
    },
    st_no: {
      required: true,
      element: <input type='number' min='100000000' max='999999999' />
    },
    campus: {
      required: true,
      initialValue: 'Lee Wai Lee',
      element: <input type='text' />
    },
    department: {
      required: true,
      initialValue: 'Information Technology',
      element: <input type='text' />
    },
    department_head: {
      required: true,
      initialValue: 'Stanley Wong',
      element: <input type='text' />
    },
    program_title: {
      required: true,
      initialValue: 'Higher Diploma in Cloud and Data Center Administration',
      element: <input type='text' />
    },
    program_no: {
      required: true,
      initialValue: 'IT114115',
      element: <input type='text' minLength='8' maxLength='8' />
    },
    class: {
      required: true,
      initialValue: '2B',
      element: <input type='text' minLength='2' maxLength='2' />
    }
  }
}
