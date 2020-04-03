import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Date from 'components/shared/FormElements/Date/Date';

// Set placeholder vars for capturing date fields (not inside component as it will reload the vars)

const LastUsed = () => {
  const [, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h3 className="wmnds-fe-question">
          When did you last use your ticket to travel?
        </h3>
        <p>For example, 18 3 2020</p>
      </legend>
      <Date name="LastUsed" label="Last used" />
    </fieldset>
  );
};

export default LastUsed;
