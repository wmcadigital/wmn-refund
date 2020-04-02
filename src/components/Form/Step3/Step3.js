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
import HowProcess from './HowProcess/HowProcess';

const Step3 = ({ currentStep, setCurrentStep, isPaperTicket }) => {
  const [formState] = useContext(FormContext); // Get the state of form data from FormContext

  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
  };

  const { Application, CustomerType } = formState; // Destructure object

  // Set placeholder vars which we will change in the switch below (based on CustomerType)
  let disabledState = !Application.LastUsedDate; // Used to change the disabled state on continue button (by default we put in LastUsedDate as this is used by every outcome)
  let elementsToRender; // Used to change conditional elements to render

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
      disabledState =
        disabledState ||
        !Application.DirectDebitNumber ||
        !Application.CardNumber;
      break;

    // Workwise
    case 'Workwise':
      elementsToRender = <SwiftCard />;
      disabledState = disabledState || !Application.CardNumber;
      break;

    //  Corporate
    case 'Corporate':
      elementsToRender = (
        <>
          <SwiftCard />
          <HowProcess />
        </>
      );
      disabledState =
        disabledState || !Application.CardNumber || !Application.ActionType;
      break;

    // OnlineSales, Shop, SwiftPortal
    default:
      elementsToRender = <TicketNumber />;
      disabledState = disabledState || !Application.TicketNumber;
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
