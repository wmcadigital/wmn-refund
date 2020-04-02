import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const DirectDebit = () => {
  const [formState] = useContext(FormContext); // Get the state of form data from FormContext
  const label = 'Direct Debit reference'; // Used on input and for validation

  const ddValidation = () => {
    let error;

    // DirectDebit reference should start with 6
    if (formState.Application.DirectDebitNumber.charAt(0) !== '6') {
      error = `${label} should start with '6'`;
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
          This is shown next to WMCA on your bank statement and begins with{' '}
          <strong>6</strong>
        </p>
      </legend>
      <Input
        className="wmnds-col-1-2 wmnds-col-sm-1-5"
        name="DirectDebitNumber"
        label={label}
        inputmode="numeric"
        customValidation={ddValidation}
      />
    </fieldset>
  );
};

export default DirectDebit;
