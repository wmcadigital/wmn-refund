import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const Email = () => {
  const [, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h3 className="wmnds-fe-question">What is your email address?</h3>
      </legend>

      <Input
        className="wmnds-col-sm-1-2"
        name="Email"
        label="Email address, for example name@example.com"
        type="email"
        onChange={(e) =>
          formDispatch({
            type: 'UPDATE_FORM_DATA',
            payload: { Email: e.target.value },
          })
        }
      />
    </fieldset>
  );
};

export default Email;
