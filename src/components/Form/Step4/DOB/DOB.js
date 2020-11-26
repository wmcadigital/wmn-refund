import React from 'react';
// Import contexts
import { useFormContext } from 'react-hook-form';
// Import components
import DateInput from 'components/shared/FormElements/Date/Date';

const DOB = () => {
  const { register } = useFormContext(); // Custom hook for handling validation (errors etc)
  const dateValidation = register({
    required: 'Enter a date of birth',
    validate: {
      pastDate: value => {
        // make sure date entered is in the past
        const dateToday = new Date();
        const dateString = `${dateToday.getFullYear()}-${dateToday.getMonth() + 1}-${dateToday.getDate()}`
        return dateString > value || 'Date of birth cannot be in the future'
      }
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
