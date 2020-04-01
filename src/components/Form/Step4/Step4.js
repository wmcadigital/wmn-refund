import React from 'react';
import Company from './Company/Company';
import DOB from './DOB/DOB';
import Address from './Address/Address';
import Email from './Email/Email';
import Telephone from './Telephone/Telephone';

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

      <Email />
      <Telephone />
    </>
  );
};

export default Step4;
