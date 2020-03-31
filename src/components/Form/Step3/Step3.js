import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Import components
import DirectDebit from './DirectDebit';
import SwiftCard from './SwiftCard';

const Step3 = ({
  currentStep,
  setCurrentStep,
  customerType,
  handleFormData,
}) => {
  const [directDebitNumber, setDirectDebitNumber] = useState();
  const [cardNumber, setCardNumber] = useState();

  const handleContinue = () => {
    handleFormData('DirectDebitNumber', directDebitNumber);
    handleFormData('CardNumber', cardNumber);
    setCurrentStep(currentStep + 1);
  };
  return (
    <>
      <h2>Tell us about your ticket</h2>
      {customerType === 'DirectDebit' && (
        <DirectDebit setDirectDebitNumber={setDirectDebitNumber} />
      )}
      {(customerType === 'DirectDebit' || customerType === 'Workwise') && (
        <SwiftCard setCardNumber={setCardNumber} />
      )}
      <button
        type="button"
        className="wmnds-btn wmnds-btn--disabled wmnds-col-1 wmnds-m-t-md"
        onClick={() => handleContinue()}
        disabled={!directDebitNumber || !cardNumber}
      >
        Continue
      </button>
    </>
  );
};

Step3.propTypes = {
  currentStep: PropTypes.number.isRequired,
  customerType: PropTypes.string.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
};

export default Step3;
