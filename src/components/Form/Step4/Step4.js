import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Company from './Company/Company';
import DOB from './DOB/DOB';
import Address from './Address/Address';
import Email from './Email/Email';
import Telephone from './Telephone/Telephone';

const Step4 = () => {
  const [formState] = useContext(FormContext); // Get the state of form data from FormContext

  const { CustomerType } = formState; // Destructure customertype

  return (
    <>
      <h2>Tell us about yourself</h2>
      <p>
        We’ll use this information to confirm your identity and contact you if
        we need more information
      </p>

      {/* Only show Company if customer is one of the below */}
      {(CustomerType === 'DirectDebit' ||
        CustomerType === 'Shop' ||
        CustomerType === 'SwoftPortal' ||
        CustomerType === 'Workwise') && <Company />}

      <DOB />
      <Address />

      <Email />
      <Telephone />
    </>
  );
};

export default Step4;
