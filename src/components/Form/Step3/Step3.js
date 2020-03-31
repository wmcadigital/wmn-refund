import React from 'react';
import Input from 'components/shared/FormElements/Input/Input';

const Step3 = () => {
  return (
    <>
      <h2>Tell us about your ticket</h2>
      <div className="wmnds-fe-group">
        <fieldset className="wmnds-fe-fieldset">
          <legend className="wmnds-fe-fieldset__legend">
            <h3 className="wmnds-fe-question">What is your Direct Debit reference?</h3>
          </legend>
          <div className="wmnds-col-1-2 wmnds-col-sm-1-5">
            <Input name="DirectDebitNumber" label="Direct Debit reference" inputmode="numeric" />
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default Step3;
