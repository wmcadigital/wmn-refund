import React from 'react';
// Import contexts
import { useFormContext } from 'react-hook-form';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const Name = () => {
  const { register } = useFormContext(); // Custom hook for handling validation (errors etc)
  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h2 className="wmnds-fe-question">What is your name?</h2>
      </legend>
      <Input
        className="wmnds-col-1-2 wmnds-col-sm-2-3"
        name="Firstname"
        label="First name"
        autocomplete="given-name"
        fieldValidation={register({
          required: 'Enter a first name',
        })}
      />
      <Input
        className="wmnds-col-1-2 wmnds-col-sm-2-3"
        name="Lastname"
        label="Last name"
        autocomplete="family-name"
        fieldValidation={register({
          required: 'Enter a last name',
        })}
      />
    </fieldset>
  );
};

export default Name;
