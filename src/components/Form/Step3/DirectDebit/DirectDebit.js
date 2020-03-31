import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const DirectDebit = () => {
  const [, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext

  return (
    <div className="wmnds-fe-group">
      <fieldset className="wmnds-fe-fieldset">
        <legend className="wmnds-fe-fieldset__legend">
          <h3 className="wmnds-fe-question">
            What is your Direct Debit reference?
          </h3>
        </legend>
        <div className="wmnds-col-1-2 wmnds-col-sm-1-5">
          <Input
            name="DirectDebitNumber"
            label="Direct Debit reference"
            inputmode="numeric"
            onChange={(e) =>
              formDispatch({
                type: 'UPDATE_FORM_DATA',
                payload: { DirectDebitNumber: e.target.value },
              })
            }
          />
        </div>
      </fieldset>
    </div>
  );
};

export default DirectDebit;
