import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Input from 'components/shared/FormElements/Input/Input';
import useValidate from 'customHooks/useFormValidation';

const Telephone = () => {
  const [, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext
  const error = useValidate();

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h3 className="wmnds-fe-question">What is your telephone number?</h3>
      </legend>

      <Input
        className="wmnds-col-sm-1-2"
        name="PhoneNumber"
        label="UK telephone number"
        inputmode="numeric"
        onChange={(e) => {
          formDispatch({
            type: 'UPDATE_FORM_DATA',
            payload: { PhoneNumber: e.target.value },
          });
        }}
      />
      <p>{error.PhoneNumber}</p>
    </fieldset>
  );
};

export default Telephone;
