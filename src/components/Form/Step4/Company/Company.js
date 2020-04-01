import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const Company = () => {
  const [, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext

  return (
    <div className="wmnds-fe-group">
      <fieldset className="wmnds-fe-fieldset">
        <legend className="wmnds-fe-fieldset__legend">
          <h3 className="wmnds-fe-question">
            What company or organisation do you work for?
          </h3>
        </legend>
        <div className="wmnds-col-1 wmnds-col-sm-1-2">
          <Input
            name="CompanyName"
            label="Company or organisation name"
            onChange={(e) =>
              formDispatch({
                type: 'UPDATE_FORM_DATA',
                payload: { CompanyName: e.target.value },
              })
            }
          />
        </div>
      </fieldset>
    </div>
  );
};

export default Company;
