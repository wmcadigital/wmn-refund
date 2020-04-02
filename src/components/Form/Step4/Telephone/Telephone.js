import React from 'react';

// Import components
import Input from 'components/shared/FormElements/Input/Input';

const Telephone = () => {
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
        autocomplete="tel-national"
      />
    </fieldset>
  );
};

export default Telephone;
