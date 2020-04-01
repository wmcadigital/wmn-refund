import React from 'react';
import Company from './Company/Company';
import DOB from './DOB/DOB';
import Address from './Address/Address';

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
      <Address />

      <h3>What is your email address?</h3>
      <h3>What is your telephone number?</h3>
    </>
  );
};

export default Step4;
