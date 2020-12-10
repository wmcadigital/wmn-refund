import React from 'react';
import PropTypes from 'prop-types';
// Import custom hooks
import useStepLogic from '../useStepLogic';

const BackButton = ({ setIsFormStarted }) => {
  const { formDataState, setStep } = useStepLogic(); // Custom hook for handling continue button (validation, errors etc)

  const { currentStep, CustomerType, Application } = formDataState;

  const goBack = () => {
    if (currentStep > 1) {
      if (
        currentStep === 4 &&
        (CustomerType === 'Scratchcard' || CustomerType === 'ClassPass')
      ) {
        setStep(currentStep - 3);
      } else if (
        currentStep === 3 &&
        CustomerType === 'SwiftPortal' &&
        !Application.CustomerTypeStep2
      ) {
        setStep(currentStep - 2);
      } else {
        setStep(currentStep - 1);
      }
    } else {
      setStep(1);
      setIsFormStarted(false);
    }
  };

  return (
    <div className="wmnds-col-1 wmnds-m-b-md">
      <button
        type="button"
        className="wmnds-btn wmnds-btn--link"
        onClick={goBack}
      >
        &lt; Back
      </button>
    </div>
  );
};

BackButton.propTypes = {
  setIsFormStarted: PropTypes.func.isRequired,
};

export default BackButton;
