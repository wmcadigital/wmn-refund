import React, { useRef } from 'react';
// Import custom hooks
import useStepLogic from 'components/Form/useStepLogic';
// Import components
import SectionStepInfo from 'components/shared/SectionStepInfo/SectionStepInfo';
import Company from './Company/Company';
import DOB from './DOB/DOB';
import Address from './Address/Address';
import Email from './Email/Email';
import Telephone from './Telephone/Telephone';
import Name from './Name/Name';
// import NHS from './NHS/NHS';

const Step4 = () => {
  const formRef = useRef(); // Used so we can keep track of the form DOM element
  const {
    handleSubmit,
    showGenericError,
    continueButton,
    formDataState,
  } = useStepLogic(formRef); // Custom hook for handling continue button (validation, errors etc)
  const { CustomerType } = formDataState; // Destructure customertype

  return (
    <form onSubmit={handleSubmit} ref={formRef} autoComplete="on">
      <SectionStepInfo section="Section 3 of 3" description="About you" />
      {/* Show generic error message */}
      {showGenericError}
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

      {/* Only show address if not scratchcard and not classpass */}
      {CustomerType !== 'Scratchcard' && CustomerType !== 'ClassPass' && (
        <>
          <Address />
          {/* <NHS /> */}
        </>
      )}

      <Email />
      <Telephone />

      {continueButton}
    </form>
  );
};

export default Step4;
