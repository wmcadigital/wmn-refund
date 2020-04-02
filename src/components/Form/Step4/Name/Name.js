import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const Name = () => {
  const [, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h3 className="wmnds-fe-question">What is your name?</h3>
      </legend>
      <Input
        className="wmnds-col-1-2 wmnds-col-sm-2-3"
        name="Firstname"
        label="First name"
        onChange={(e) =>
          formDispatch({
            type: 'UPDATE_FORM_DATA',
            payload: { Firstname: e.target.value },
          })
        }
      />
      <Input
        className="wmnds-col-1-2 wmnds-col-sm-2-3"
        name="Lastname"
        label="Last name"
        onChange={(e) =>
          formDispatch({
            type: 'UPDATE_FORM_DATA',
            payload: { Lastname: e.target.value },
          })
        }
      />
    </fieldset>
  );
};

export default Name;
