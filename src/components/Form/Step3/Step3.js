import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import DirectDebit from './DirectDebit/DirectDebit';
import SwiftCard from './SwiftCard/SwiftCard';
import TicketNumber from './TicketNumber/TicketNumber';
import UploadTicket from './UploadTicket/UploadTicket';

const Step3 = ({ currentStep, setCurrentStep }) => {
  const [formState] = useContext(FormContext); // Get the state of form data from FormContext

  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
  };
  return (
    <>
      <h2>Tell us about your ticket</h2>
      {formState.customerType === 'DirectDebit' && <DirectDebit />}

      {(formState.customerType === 'DirectDebit' ||
        formState.customerType === 'Workwise' ||
        formState.customerType === 'Corporate') && <SwiftCard />}

      {(formState.customerType === 'OnlineSales' ||
        formState.customerType === 'Shop' ||
        formState.customerType === 'SwiftPortal') && <TicketNumber />}

      <UploadTicket />

      <button
        type="button"
        className="wmnds-btn wmnds-btn--disabled wmnds-col-1 wmnds-m-t-md"
        onClick={() => handleContinue()}
        disabled={
          !formState.Application.directDebitNumber ||
          !formState.Application.cardNumber
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
  handleFormData: PropTypes.func.isRequired,
};

export default Step3;
