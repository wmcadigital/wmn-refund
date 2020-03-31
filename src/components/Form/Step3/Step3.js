import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const Step3 = ({ currentStep, setCurrentStep, handleFormData }) => {
  const [directDebitNumber, setDirectDebitNumber] = useState();
  const [cardNumber, setCardNumber] = useState();

  const handleContinue = () => {
    handleFormData('CustomerType', directDebitNumber);
    setCurrentStep(currentStep + 1);
  };
  return (
    <>
      <h2>Tell us about your ticket</h2>
      <div className="wmnds-fe-group">
        <fieldset className="wmnds-fe-fieldset">
          <legend className="wmnds-fe-fieldset__legend">
            <h3 className="wmnds-fe-question">
              What is your Direct Debit reference?
            </h3>
          </legend>
          <div className="wmnds-col-1-2 wmnds-col-sm-1-5">
            <Input
              name="DirectDebitNumber"
              label="Direct Debit reference"
              inputmode="numeric"
              onChange={(e) => setDirectDebitNumber(e.target.value)}
            />
          </div>
        </fieldset>
        <h4 className="wmnds-fe-question wmnds-m-t-none wmnds-m-b-xl">and</h4>
        <fieldset className="wmnds-fe-fieldset">
          <legend className="wmnds-fe-fieldset__legend">
            <h3 className="wmnds-fe-question">
              What is your Swift card number?
            </h3>
            <p>
              This is the long number on the front of the card and begins with{' '}
              <strong>633597 0107</strong>
            </p>
          </legend>
          <div className="wmnds-col-1-2 wmnds-col-sm-1-5">
            <Input
              name="CardNumber"
              label="Swift card number"
              inputmode="numeric"
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
        </fieldset>
      </div>
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
  setCurrentStep: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
};

export default Step3;
