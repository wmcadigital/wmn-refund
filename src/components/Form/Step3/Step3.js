import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import DirectDebit from './DirectDebit/DirectDebit';
import SwiftCard from './SwiftCard/SwiftCard';
import TicketNumber from './TicketNumber/TicketNumber';
import UploadTicket from './UploadTicket/UploadTicket';
import LastUsed from './LastUsed/LastUsed';

const Step3 = ({ currentStep, setCurrentStep, isPaperTicket }) => {
  const [formState] = useContext(FormContext); // Get the state of form data from FormContext

  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
  };

  // Set placeholder vars which we will change in the switch below (based on CustomerType)
  let disabledState; // Used to change the disabled state on continue button
  let elementsToRender; // Used to change conditional elements to render

  const { Application, CustomerType } = formState; // Destructure object

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
      disabledState = !Application.DirectDebitNumber || !Application.CardNumber;
      break;

    // Workwise, Corporate
    case 'Workwise':
    case 'Corporate':
      elementsToRender = <SwiftCard />;
      disabledState = !Application.CardNumber;
      break;

    // OnlineSales, Shop, SwiftPortal
    default:
      elementsToRender = <TicketNumber />;
      disabledState = !Application.TicketNumber;
  }

  return (
    <>
      <h2>Tell us about your ticket</h2>

      {/* This changes based on switch logic above */}
      {elementsToRender}

      {/* Only show this if a user selected paper ticket in step 1 */}
      {isPaperTicket && (
        <>
          <LastUsed />
          <UploadTicket />
        </>
      )}

      <button
        type="button"
        className="wmnds-btn wmnds-btn--disabled wmnds-col-1 wmnds-m-t-md"
        onClick={() => handleContinue()}
        disabled={
          isPaperTicket
            ? !Application.PhotoBase64 || disabledState
            : disabledState
        }
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
};

export default Step3;
