import React from 'react';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const DirectDebit = () => {
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
        label="Direct Debit reference"
        inputmode="numeric"
      />
    </fieldset>
  );
};

export default DirectDebit;
