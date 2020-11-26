import React from 'react';
// Import contexts
import { useFormContext } from 'react-hook-form';
// Import components
import DateInput from 'components/shared/FormElements/Date/Date';

const LastUsed = () => {

  const { register } = useFormContext(); // Custom hook for handling continue button (validation, errors etc)
  
  // helper function to determine if a number is between two values 
  const between = (number, min, max) => number >= min && number <= max; 

  const dateValidation = register({
    required: 'Enter last used date',
    validate:{
      // make sure date is after 16/03/2020
      lastUsed: value => value > '2020-03-16' || 'We can only issue refunds from the 16 March 2020. If you stopped travelling before this date, please still use 16 March 2020.',
      // make sure day is valid
      checkDay: value => between(value.split('-')[2], 1, 31) || 'Enter a valid last used date',
      // make sure month is valid
      checkMonth: value => between(value.split('-')[1], 1, 12) || 'Enter a valid last used date',
      // make sure date entered is in the past or today
      pastDate: value => {
        const dateToday = new Date();
        const dateString = `${dateToday.getFullYear()}-${dateToday.getMonth() + 1}-${dateToday.getDate()}`
        return dateString > value || 'Last used date cannot be in the future'
      }
    }
  })

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h2 className="wmnds-fe-question">
          When did you last use your ticket to travel?
        </h2>
        <p>We can only issue refunds from the 16 March 2020. For example, 16 03 2020</p>
      </legend>
      <DateInput
        name="LastUsedDate"
        label="Last used date"
        fieldValidation={dateValidation}
      />
    </fieldset>
  );
};

export default LastUsed;
