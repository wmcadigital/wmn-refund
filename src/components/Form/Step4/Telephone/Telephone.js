import React from 'react';

// Import components
import Input from 'components/shared/FormElements/Input/Input';
import useInput from 'customHooks/useFormValidation';

const Telephone = () => {
  const { handleChange, handleBlur, error } = useInput('PhoneNumber', '');

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h3 className="wmnds-fe-question">What is your telephone number?</h3>
      </legend>
      <Input
        className="wmnds-col-sm-1-2"
        name="PhoneNumber"
        label="UK telephone number"
        inputmode="numeric"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p>{error}</p>
    </fieldset>
  );
};

export default Telephone;
