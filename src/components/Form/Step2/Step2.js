import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Radio from 'components/shared/FormElements/Radio/Radio';

const Step2 = ({ currentStep, setCurrentStep, isPaperTicket }) => {
  const [formState, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext

  // Update customerType on radio button change
  const handleRadioChange = (e) =>
    formDispatch({
      type: 'UPDATE_CUSTOMER_TYPE',
      payload: e.target.value,
    });

  // Goto next step on continue
  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
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
              onChange={handleRadioChange}
            />
            <Radio
              name="CustomerType"
              text="I bought it from the West Midlands Network or Swift website"
              value="SwiftPortal"
              onChange={handleRadioChange}
            />
            <Radio
              name="CustomerType"
              text="I pay for it through my company"
              value="Corporate"
              onChange={handleRadioChange}
            />
            {/* Only show if not CustomerType of PaperTicket */}
            {!isPaperTicket && (
              <>
                <Radio
                  name="CustomerType"
                  text="I am on the Workwise scheme"
                  value="Workwise"
                  onChange={handleRadioChange}
                />
                <Radio
                  name="CustomerType"
                  text="I bought it from a Swift ticket machine"
                  value="SwiftPortal"
                  onChange={handleRadioChange}
                />
              </>
            )}
            <Radio
              name="CustomerType"
              text="I bought it from a ticket office, West Midlands Network travel shop or Payzone shop"
              value="Shop"
              onChange={handleRadioChange}
            />
          </div>
        </fieldset>
      </div>
      <button
        type="button"
        className="wmnds-btn wmnds-btn--disabled wmnds-col-1 wmnds-m-t-md"
        onClick={() => handleContinue()}
        disabled={
          formState.CustomerType === 'SwiftCard' ||
          formState.CustomerType === 'PaperTicket'
        }
      >
        Continue
      </button>
    </>
  );
};

Step2.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  isPaperTicket: PropTypes.bool.isRequired,
};

export default Step2;
