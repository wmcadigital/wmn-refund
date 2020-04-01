import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

// Set placeholder vars for capturing date fields (not inside component as it will reload the vars)
let day;
let month;
let year;

const DOB = () => {
  const [, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext

  const handleDOB = (e) => {
    // Switch on the input name, depending on name then update the relevant var
    switch (e.name) {
      case 'DOBDay':
        day = e.value;
        break;
      case 'DOBMonth':
        month = e.value;
        break;
      default:
        year = e.value;
    }

    // If day, month and year exists then update state
    if (day && month && year) {
      const DateOfBirth = `${year}-${month}-${day}`; // Set DOB var on how API expects it
      // Update state
      formDispatch({
        type: 'UPDATE_FORM_DATA',
        payload: { DateOfBirth },
      });
    }
  };

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h3 className="wmnds-fe-question">What is your date of birth?</h3>
      </legend>
      <div className="wmnds-col-1-2 wmnds-col-sm-1-12 wmnds-m-r-md">
        <Input
          name="DOBDay"
          label="Day"
          inputmode="numeric"
          onChange={(e) => handleDOB(e.target)}
        />
      </div>
      <div className="wmnds-col-1-2 wmnds-col-sm-1-12 wmnds-m-r-md">
        <Input
          name="DOBMonth"
          label="Month"
          inputmode="numeric"
          onChange={(e) => handleDOB(e.target)}
        />
      </div>
      <div className="wmnds-col-1-2 wmnds-col-sm-1-8">
        <Input
          name="DOBYear"
          label="Year"
          inputmode="numeric"
          onChange={(e) => handleDOB(e.target)}
        />
      </div>
    </fieldset>
  );
};

export default DOB;
