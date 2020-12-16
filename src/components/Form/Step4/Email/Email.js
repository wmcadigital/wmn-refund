import React from 'react';
// Import contexts
import { useFormContext } from 'react-hook-form';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const Email = () => {
  const { register } = useFormContext();
  const emailRegex = /^[\w!#$%&amp;'*+\-/=?^_`{|}~]+(\.[\w!#$%&amp;'*+\-/=?^_`{|}~]+)*@((([-\w]+\.)+[a-zA-Z]{2,4})|(([0-9]{1,3}\.){3}[0-9]{1,3}))$/;

  const emailValidation = register({
    required: 'Enter an email address',
    pattern: {
      value: emailRegex,
      message: 'Enter an email address in the correct format',
    },
  });

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h2 className="wmnds-fe-question">What is your email address?</h2>
      </legend>

      <Input
        className="wmnds-col-sm-1-2"
        name="Email"
        label="Email address, for example name@example.com"
        type="email"
        autocomplete="email"
        fieldValidation={emailValidation}
      />
    </fieldset>
  );
};

export default Email;
