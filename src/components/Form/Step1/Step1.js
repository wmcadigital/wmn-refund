import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Import components
import Radio from 'components/shared/FormElements/Radio/Radio';

const Step1 = ({ currentStep, setCurrentStep, setFormData }) => {
  const [CustomerType, setCustomerType] = useState(null);

  return (
    <>
      <h2>About your ticket</h2>
      <div className="wmnds-fe-group">
        <fieldset className="wmnds-fe-fieldset">
          <legend className="wmnds-fe-fieldset__legend">
            <h3 className="wmnds-fe-question">Which best describes your ticket?</h3>
          </legend>
          <div className="wmnds-fe-radios">
            <Radio
              name="CustomerType"
              text="Swift card"
              value="SwiftPortal"
              onChange={(e) => setFormData({ customerType: e.target.value })}
            />
            <Radio
              name="CustomerType"
              text="Paper ticket"
              value="SwiftCard"
              onChange={(e) => setFormData({ customerType: e.target.value })}
            />
            <Radio
              name="CustomerType"
              text="Swift on Mobile app"
              value="SwiftPortal"
              onChange={(e) => setFormData({ customerType: e.target.value })}
            />
            <Radio
              name="CustomerType"
              text="Scratchcard"
              value="Scratchcard"
              onChange={(e) => setFormData({ customerType: e.target.value })}
            />
            <Radio
              name="CustomerType"
              text="Class pass"
              value="ClassPass"
              onChange={(e) => setFormData({ customerType: e.target.value })}
            />
          </div>
        </fieldset>
      </div>
      <button
        type="button"
        className="wmnds-btn wmnds-col-1 wmnds-m-t-md"
        onClick={() => setCurrentStep(currentStep + 1)}
      >
        Continue
      </button>
    </>
  );
};

Step1.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default Step1;
