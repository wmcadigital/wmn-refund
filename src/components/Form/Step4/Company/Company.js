import React from 'react';
// Import contexts
import { useFormContext } from 'react-hook-form';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const Company = () => {
  const { register } = useFormContext();
  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h2 className="wmnds-fe-question">
          What company or organisation do you work for?
        </h2>
      </legend>
      <Input
        className="wmnds-col-1 wmnds-col-sm-1-2"
        name="CompanyName"
        label="Company or organisation name"
        autocomplete="organization"
        fieldValidation={register({
          required: 'Enter company or organisation name',
        })}
      />
    </fieldset>
  );
};

export default Company;
