import React from 'react';
import Input from 'components/shared/FormElements/Input/Input';
import Company from './Company/Company';
import DOB from './DOB/DOB';

const Step4 = () => {
  return (
    <>
      <h2>Tell us about yourself</h2>
      <p>
        We’ll use this information to confirm your identity and contact you if
        we need more information
      </p>

      <Company />

      <DOB />

      <h3>What is your home address?</h3>
      <Input name="AddressLine1" label="Building and street" />
      <Input name="AddressLine2" />

      <Input name="AddressTown" label="Town or city" />
      <Input name="AddressLine3" label="County" />
      <Input name="AddressPostcode" label="Postcode" />

      <h3>What is your email address?</h3>
      <h3>What is your telephone number?</h3>
    </>
  );
};

export default Step4;
