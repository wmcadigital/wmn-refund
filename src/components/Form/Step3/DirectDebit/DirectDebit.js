import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const DirectDebit = () => {
  const [formState] = useContext(FormContext); // Get the state of form data from FormContext
  const label = 'Direct Debit reference'; // Used on input and for validation

  const customValidation = () => {
    let error;
    const ddNum = formState.Application.DirectDebitNumber;

    // DirectDebit reference should start with 6
    if (ddNum.charAt(0) !== '6') {
      error = `${label} is a number that begins with '6'`;
    }
    // Must be 8 digits long
    else if (ddNum.length !== 8) {
      error = `${label} must be 8 digits`;
    }
    // Not valid ref if not between these numbers
    else if (+ddNum < 60000000 || ddNum > 60999999) {
      error = `Enter a valid ${label}`;
    }

    return error;
  };

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h3 className="wmnds-fe-question">
          What is your Direct Debit reference?
        </h3>
        <p>
          This is the <strong>8</strong> digit number that will be shown in an email with the subject starting 'Direct Debit Application Reference Number', sent from 'directsales@tfwm.org.uk'</p>
        </p>
      </legend>
      <Input
        className="wmnds-col-1-2 wmnds-col-sm-1-5"
        name="DirectDebitNumber"
        label={label}
        inputmode="numeric"
        customValidation={customValidation}
      />
    </fieldset>
  );
};

export default DirectDebit;
