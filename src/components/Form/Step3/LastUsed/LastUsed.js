import React from 'react';
// Import contexts
import { useFormContext } from 'react-hook-form';
// Import components
import DateInput from 'components/shared/FormElements/Date/Date';
// Import helper functions
import dateValidationHelpers from 'components/shared/FormElements/Date/dateValidationHelpers';

const LastUsed = () => {

  const { register } = useFormContext(); // Custom hook for handling continue button (validation, errors etc)
  
  const { dateRegex, pastDate } = dateValidationHelpers;

  const dateValidation = register({
    required: 'Enter last used date',
    pattern: {
      value: dateRegex,
      message: 'Enter last used date in the correct format, for example 18 03 2020'
    },
    validate:{
      lastUsed: value => value > '2020-03-16' || 'We can only issue refunds from the 16 March 2020. If you stopped travelling before this date, please still use 16 March 2020.',
      pastDate: value => pastDate(value) || 'Last used date must be today or in the past',
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
