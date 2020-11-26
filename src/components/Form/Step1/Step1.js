import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
// Import custom hooks
import useStepLogic from 'components/Form/useStepLogic';
// Import contexts
import { FormDataContext } from 'globalState/FormDataContext';
// Import components
import Radios from 'components/shared/FormElements/Radios/Radios';
import SectionStepInfo from 'components/shared/SectionStepInfo/SectionStepInfo'


const Step1 = ({
  currentStep,
  setIsPaperTicket,
  setIsSwiftOnMobile,
}) => {
  const formRef = useRef(); // Used so we can keep track of the form DOM element
  const { register, handleSubmit, showGenericError, continueButton } = useStepLogic(formRef); // Custom hook for handling continue button (validation, errors etc)

  const [, formDispatch] = useContext(FormDataContext); // Get the state of form data from FormDataContext
  
  // Update customerType on radio button change
  const handleRadioChange = (e) => {
    formDispatch({ type: 'UPDATE_CUSTOMER_TYPE', payload: e.target.value });

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
    <SectionStepInfo section={`Section ${currentStep} of 4`} description="About your ticket" />

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
  formRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default Step1;
