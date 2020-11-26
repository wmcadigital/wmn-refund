import React from 'react';
// Import contexts
import { useFormContext } from 'react-hook-form';
// Import components
import DateInput from 'components/shared/FormElements/Date/Date';
// Import helper functions
import dateValidationHelpers  from 'components/shared/FormElements/Date/dateValidationHelpers';

const DOB = () => {
  const { register } = useFormContext(); // Custom hook for handling validation (errors etc)

  const { validateDay, validateDate, validateMonth, pastDate } = dateValidationHelpers;
  
  const dateValidation = register({
    required: 'Enter a date of birth',
    validate: {
      // make sure day is valid between 1 & 31
      checkDay: value => validateDay(value) || 'Enter a valid day',

      // make sure month is valid between 1 & 12
      checkMonth: value => validateMonth(value) || 'Enter a valid month',
      
      // make sure date is valid e.g not 30th Feb
      checkDate: value => validateDate(value) || 'Enter a valid date',
      
      // make sure date entered is in the past or today
      pastDate: value => pastDate(value) || 'Date of birth cannot be in the future'
    }
  })
  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h2 className="wmnds-fe-question">What is your date of birth?</h2>
        <p>For example, 31 03 1980</p>
      </legend>
      <DateInput
        name="DateOfBirth"
        label="Date of birth"
        autoCompletPrefix="bday-"
        fieldValidation={dateValidation}
      />
    </fieldset>
  );
};

export default DOB;
