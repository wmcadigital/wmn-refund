import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// Import custom hooks
import useStepLogic from 'components/Form/useStepLogic';
// Import components
import Radios from 'components/shared/FormElements/Radios/Radios';
import SectionStepInfo from 'components/shared/SectionStepInfo/SectionStepInfo';

const Step1 = ({ currentStep, setIsPaperTicket, setIsSwiftOnMobile }) => {
  const formRef = useRef(); // Used so we can keep track of the form DOM element
  const {
    register,
    formDataDispatch,
    handleSubmit,
    showGenericError,
    continueButton,
  } = useStepLogic(formRef); // Custom hook for handling continue button (validation, errors etc)

  // Update customerType on radio button change
  const handleRadioChange = (e) => {
    formDataDispatch({ type: 'UPDATE_CUSTOMER_TYPE', payload: e.target.value });
    formDataDispatch({
      type: 'REACHED_CONFIRMATION',
      payload: false,
    });
    // If paper ticket chosen
    if (e.target.value === 'PaperTicket') {
      setIsPaperTicket(true); // Then set paper ticket to true (value used in step 3)
    } else {
      setIsPaperTicket(false); // Else set to false
    }
    // If Swift on Mobile chosen (only one with SwiftPortal val on this step)
    if (e.target.value === 'SwiftPortal') {
      setIsSwiftOnMobile(true);
    } else {
      setIsSwiftOnMobile(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} autoComplete="on">
      <SectionStepInfo
        section={`Section ${currentStep} of 4`}
        description="About your ticket"
      />

      {/* Show generic error message */}
      {showGenericError}

      <Radios
        name="CustomerType"
        label="Which best describes your ticket?"
        radios={[
          { text: 'Swift card', value: 'SwiftCard' },
          {
            text: 'Paper ticket',
            value: 'PaperTicket',
          },
          {
            text: 'Swift on Mobile app',
            value: 'SwiftPortal',
          },
          {
            text: 'Scratchcard',
            value: 'Scratchcard',
          },
          {
            text: 'Class pass',
            value: 'ClassPass',
          },
        ]}
        fieldValidation={register({
          required: `Select which best describes your ticket`,
        })}
        onChange={handleRadioChange}
      />
      {continueButton}
    </form>
  );
};

Step1.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setIsPaperTicket: PropTypes.func.isRequired,
  setIsSwiftOnMobile: PropTypes.func.isRequired,
};

export default Step1;
