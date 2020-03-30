import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Import components
import Radio from 'components/shared/FormElements/Radio/Radio';

const Step2 = ({ currentStep, setCurrentStep, handleFormData }) => {
  const [CustomerType, setCustomerType] = useState(null);

  const handleContinue = () => {
    handleFormData('CustomerType', CustomerType);
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      <h2>Tell us about your ticket</h2>
      <div className="wmnds-fe-group">
        <fieldset className="wmnds-fe-fieldset">
          <legend className="wmnds-fe-fieldset__legend">
            <h3 className="wmnds-fe-question">How did you buy your ticket?</h3>
          </legend>
          <div className="wmnds-fe-radios">
            <Radio
              name="CustomerType"
              text="I pay monthly by Direct Debit"
              value="DirectDebit"
              onChange={(e) => setCustomerType(e.target.value)}
            />
            <Radio
              name="CustomerType"
              text="I bought it from the West Midlands Network or Swift website"
              value="SwiftPortal"
              onChange={(e) => setCustomerType(e.target.value)}
            />
            <Radio
              name="CustomerType"
              text="I pay for it through my company"
              value="Corporate"
              onChange={(e) => setCustomerType(e.target.value)}
            />
            <Radio
              name="CustomerType"
              text="I am on the Workwise scheme"
              value="Workwise"
              onChange={(e) => setCustomerType(e.target.value)}
            />
            <Radio
              name="CustomerType"
              text="I bought it from a Swift ticket machine"
              value="SwiftPortal"
              onChange={(e) => setCustomerType(e.target.value)}
            />
            <Radio
              name="CustomerType"
              text="I bought it from a ticket office, West Midlands Network travel shop or Payzone shop"
              value="Shop"
              onChange={(e) => setCustomerType(e.target.value)}
            />
          </div>
        </fieldset>
      </div>
      <button
        type="button"
        className="wmnds-btn wmnds-col-1 wmnds-m-t-md"
        onClick={() => handleContinue()}
      >
        Continue
      </button>
    </>
  );
};

Step2.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
};

export default Step2;
