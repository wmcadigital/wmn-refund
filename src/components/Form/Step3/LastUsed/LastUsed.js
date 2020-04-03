import React from 'react';
// Import contexts
// Import components
import Date from 'components/shared/FormElements/Date/Date';

// Set placeholder vars for capturing date fields (not inside component as it will reload the vars)

const LastUsed = () => {
  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h3 className="wmnds-fe-question">
          When did you last use your ticket to travel?
        </h3>
        <p>For example, 18 03 2020</p>
      </legend>
      <Date name="LastUsedDate" label="Last used date" />
    </fieldset>
  );
};

export default LastUsed;
