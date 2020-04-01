import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

// Set placeholder vars for capturing date fields (not inside component as it will reload the vars)
let day;
let month;
let year;

const LastUsed = () => {
  const [, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext

  const handleLastUsed = (e) => {
    // Switch on the input name, depending on name then update the relevant var
    switch (e.name) {
      case 'LastUsedDay':
        day = e.value;
        break;
      case 'LastUsedMonth':
        month = e.value;
        break;
      default:
        year = e.value;
    }

    // If day, month and year exists then update state
    if (day && month && year) {
      const LastUsedDate = `${year}-${month}-${day}`; // Set LastUsed var on how API expects it
      // Update state
      formDispatch({
        type: 'UPDATE_FORM_DATA',
        payload: { LastUsedDate },
      });
    }
  };

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h3 className="wmnds-fe-question">
          When did you last use your ticket to travel?
        </h3>
        <p>For example, 18 3 2020</p>
      </legend>
      <div className="wmnds-col-1-2 wmnds-col-sm-1-12 wmnds-m-r-md">
        <Input
          name="LastUsedDay"
          label="Day"
          inputmode="numeric"
          onChange={(e) => handleLastUsed(e.target)}
        />
      </div>
      <div className="wmnds-col-1-2 wmnds-col-sm-1-12 wmnds-m-r-md">
        <Input
          name="LastUsedMonth"
          label="Month"
          inputmode="numeric"
          onChange={(e) => handleLastUsed(e.target)}
        />
      </div>
      <div className="wmnds-col-1-2 wmnds-col-sm-1-8">
        <Input
          name="LastUsedYear"
          label="Year"
          inputmode="numeric"
          onChange={(e) => handleLastUsed(e.target)}
        />
      </div>
    </fieldset>
  );
};

export default LastUsed;
