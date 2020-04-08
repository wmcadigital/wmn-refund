import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// Import contexts
import { FormContext } from 'globalState/FormContext';
import { FormErrorContext } from 'globalState/FormErrorContext';
// Import components
import DirectDebit from './DirectDebit/DirectDebit';
import SwiftCard from './SwiftCard/SwiftCard';
import TicketNumber from './TicketNumber/TicketNumber';
// import SoMTicketNumber from './SoMTicketNumber/SoMTicketNumber';
import UploadTicket from './UploadTicket/UploadTicket';
import LastUsed from './LastUsed/LastUsed';
import HowProcess from './HowProcess/HowProcess';

const Step3 = ({
  currentStep,
  setCurrentStep,
  isPaperTicket,
  isSwiftOnMobile,
}) => {
  const [formState] = useContext(FormContext); // Get the state of form data from FormContext
  const [errorState, errorDispatch] = useContext(FormErrorContext); // Get the error state of form data from FormErrorContext

  const handleContinue = () => {
    // If errors, then don't progress and set continue button to true(halt form and show errors)
    if (errorState.errors.length) {
      errorDispatch({ type: 'CONTINUE_PRESSED', payload: true }); // set continue button pressed to true so errors can show
    } else {
      errorDispatch({ type: 'CONTINUE_PRESSED', payload: false }); // Reset submit button pressed before going to next step
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const { CustomerType } = formState; // Destructure object

  // Set placeholder vars which we will change in the switch below (based on CustomerType)
  let elementsToRender; // Used to change conditional elements to render

  // If not a paper ticket then must be online customertype so run switch on it
  if (!isPaperTicket) {
    // Switch on customer type, then change disabledState and elementsToRender accordingly
    switch (CustomerType) {
      // DirectDebit
      case 'DirectDebit':
        elementsToRender = (
          <>
            <DirectDebit />
            <SwiftCard />
          </>
        );

        break;

      //  Corporate
      case 'Corporate':
        elementsToRender = (
          <>
            <SwiftCard />
            <HowProcess />
          </>
        );

        break;

      // Worwise, Shop, SwiftPortal, OnlineSales(this won't happen as it is hidden in step2 unless paper ticket is chosen, so it will be part of the else statement below)
      // Pass isSwiftOnMobile state to see if user has selected this option in step 1, if so we show slightly different text for swiftCard
      default:
        elementsToRender = <SwiftCard isSwiftOnMobile={isSwiftOnMobile} />;
    }
  }
  // Else paper ticket so show paper ticket number
  else {
    // If the customertype is DD then show that else must be paper ticket
    elementsToRender =
      CustomerType === 'DirectDebit' ? (
        <>
          <DirectDebit />
          <TicketNumber />
        </>
      ) : (
        <TicketNumber />
      );
  }

  return (
    <>
      <h2>Tell us about your ticket</h2>

      {/* This changes based on switch logic above */}
      {elementsToRender}

      <LastUsed />

      {/* Only show this if a user selected paper ticket in step 1 */}
      {isPaperTicket && <UploadTicket />}

      <button
        type="button"
        className="wmnds-btn wmnds-btn--disabled wmnds-col-1 wmnds-m-t-md"
        onClick={() => handleContinue()}
      >
        Continue
      </button>
    </>
  );
};

Step3.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  isPaperTicket: PropTypes.bool.isRequired,
  isSwiftOnMobile: PropTypes.bool.isRequired,
};

export default Step3;
