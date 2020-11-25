import React, { useContext } from 'react';
// Import contexts
import { useFormContext } from 'react-hook-form';
import { FormContext } from 'globalState/FormContext';
// Import components
import DateInput from 'components/shared/FormElements/Date/Date';

const LastUsed = () => {
  const [formState] = useContext(FormContext); // Get the state of form data from FormContext

  const { register } = useFormContext(); // Custom hook for handling continue button (validation, errors etc)

  const dateValidation = register({
    required: 'Enter last used date',
    validate:{
      // make sure date is after 16/03/2020
      lastUsed: value => value > '2020-03-16' || 'We can only issue refunds from the 16 March 2020. If you stopped travelling before this date, please still use 16 March 2020.',
      checkDate: value => {
        // make sure date and month entries are valid
        const dateArray = value.split('-')
        const between = (min, max, num) => num >= min && num <= max; 
        return between(1, 12, dateArray[1]) && between(1, 31, dateArray[2]) || 'Enter a valid last used date';
      },
      pastDate: value => {
        // make sure date entered is in the past or today
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
        name="LastUsedDated"
        label="Last used date"
        fieldValidation={dateValidation}
      />
    </fieldset>
  );
};

export default LastUsed;
