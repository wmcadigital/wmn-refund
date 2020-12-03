import React from 'react';
// Import contexts
import { useFormContext } from 'react-hook-form';
// Import components
import DateInput from 'components/shared/FormElements/Date/Date';
// Import helper functions
import dateValidationHelpers from 'components/shared/FormElements/Date/dateValidationHelpers';

const DOB = () => {
  const { register } = useFormContext(); // Custom hook for handling validation (errors etc)

  const { dateRegex, pastDate } = dateValidationHelpers;

  const dateValidation = register({
    required: 'Enter a date of birth',
    pattern: {
      value: dateRegex,
      message:
        'Enter last used date in the correct format, for example 18 03 2020',
    },
    validate: {
      pastDate: (value) =>
        pastDate(value, 10) || 'Date of birth must be in the past',
    },
  });
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
