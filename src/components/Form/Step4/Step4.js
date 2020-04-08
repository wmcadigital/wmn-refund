import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Company from './Company/Company';
import DOB from './DOB/DOB';
import Address from './Address/Address';
import Email from './Email/Email';
import Telephone from './Telephone/Telephone';
import Name from './Name/Name';
import NHS from './NHS/NHS';

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

      {/* Only show name fields if customer type is none of the below */}
      {CustomerType !== 'Scratchcard' && CustomerType !== 'ClassPass' && (
        <Name />
      )}

      {/* Only show Company if customer is one of the below */}
      {(CustomerType === 'Corporate' ||
        CustomerType === 'ClassPass' ||
        CustomerType === 'Scratchcard') && <Company />}

      {/* Only show  DOB if not scratchcard and not classpass and not corporate and not Shop */}
      {CustomerType !== 'Scratchcard' &&
        CustomerType !== 'ClassPass' &&
        CustomerType !== 'Corporate' &&
        CustomerType !== 'Shop' && <DOB />}

      {/* Only show address and NHS if not scratchcard and not classpass */}
      {CustomerType !== 'Scratchcard' && CustomerType !== 'ClassPass' && (
        <>
          <Address />
          <NHS />
        </>
      )}

      <Email />
      <Telephone />

      {/* Button onClick logic is located in parent Form component as it is 'submit' form logic */}
      <button
        type="submit"
        className="wmnds-btn wmnds-btn--disabled wmnds-col-1 wmnds-m-t-md"
      >
        Submit application
      </button>
    </>
  );
};

export default Step4;
