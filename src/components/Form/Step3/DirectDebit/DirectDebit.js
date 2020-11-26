import React from 'react';
// Import contexts
import { useFormContext } from 'react-hook-form';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const DirectDebit = () => {

  const label = 'Direct Debit reference'; // Used on input and for validation

  const { register } = useFormContext(); // Custom hook for handling continue button (validation, errors etc)
  
  const ddNumValidation = register({
    required: `Enter a valid ${label}`,
    pattern: {
      value: /^(0|[1-9][0-9]*)$/,
      message: `${label} must only include numbers`
    },
    validate: {
      // DirectDebit reference should start with 6
      firstNumberCheck: value => value.charAt(0) === '6' || `${label} is a number that begins with '6'`,
      // Must be 6 digits long
      lengthCheck: value => value.length === 6 || `${label} must be 6 digits`,
    },
  })

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h3 className="wmnds-fe-question">
          What is your Direct Debit reference?
        </h3>
        <p>
          This is the <strong>6-digit number</strong> beginning with a{' '}
          <strong>6</strong>. It is shown next to every payment to WMCA for your
          Direct Debit on your bank statement.
        </p>
      </legend>
      <Input
        className="wmnds-col-1-2 wmnds-col-sm-1-5"
        name="DirectDebitNumber"
        label={label}
        inputmode="numeric"
        fieldValidation={ddNumValidation}
      />
    </fieldset>
  );
};

export default DirectDebit;
