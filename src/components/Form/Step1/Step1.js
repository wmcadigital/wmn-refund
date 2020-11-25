import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
// Import custom hooks
import useStepLogic from 'components/Form/useStepLogic';
// Import contexts
import { FormDataContext } from 'globalState/FormDataContext';
import { FormErrorContext } from 'globalState/FormErrorContext';
// Import components
import Radios from 'components/shared/FormElements/Radios/Radios';
import SectionStepInfo from 'components/shared/SectionStepInfo/SectionStepInfo'


const Step1 = ({
  currentStep,
  setCurrentStep,
  setIsPaperTicket,
  setIsSwiftOnMobile,
}) => {
  const formRef = useRef(); // Used so we can keep track of the form DOM element
  const { register, handleSubmit, showGenericError } = useStepLogic(formRef); // Custom hook for handling continue button (validation, errors etc)

  const [formState, formDispatch] = useContext(FormDataContext); // Get the state of form data from FormDataContext
  const [errorState, errorDispatch] = useContext(FormErrorContext); // Get the error state of form data from FormErrorContext
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

  // // Update the current step to the correct one depending on users selection
  // const handleContinue = () => {
  //   // If errors, then don't progress and set continue button to true(halt form and show errors)
  //   if (errorState.errors.length) {
  //     window.scrollTo(0, formRef.current.offsetTop); // Scroll to top of form
  //     errorDispatch({ type: 'CONTINUE_PRESSED', payload: true }); // set continue button pressed to true so errors can show
  //   } else {
  //     errorDispatch({ type: 'CONTINUE_PRESSED', payload: false }); // Reset submit button pressed before going to next step

  //     // SwiftCard, paperTicket
  //     if (
  //       formState.CustomerType === 'SwiftCard' ||
  //       formState.CustomerType === 'PaperTicket'
  //     ) {
  //       setCurrentStep(currentStep + 1); // Go to next step(2) so we can set customerType
  //     }
  //     // classPass, scratchcard
  //     else if (
  //       formState.CustomerType === 'Scratchcard' ||
  //       formState.CustomerType === 'ClassPass'
  //     ) {
  //       setCurrentStep(currentStep + 3); // Skip to last steps as payment info isn't needed for scratchcard and classPass
  //     }
  //     // swiftOnMobile;
  //     else {
  //       setCurrentStep(currentStep + 2); // Skip two steps(step 3) as customerType has been set
  //     }

  //     window.scrollTo(0, 0); // Scroll to top of page
  //   }
  // };
  return (
    <form onSubmit={handleSubmit} ref={formRef} autoComplete="on">
    <SectionStepInfo section={`Section ${currentStep} of 4`} description="About your ticket" />

    {/* Show generic error message */}
    {showGenericError}
      {/* {errorState.errors.length > 0 && errorState.continuePressed && (
        <GenericError />
      )} */}
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
      <button
        type="submit"
        className="wmnds-btn wmnds-btn--disabled wmnds-col-1 wmnds-m-t-md"
        //onClick={() => handleContinue()}
      >
        Continue
      </button>
    </form>
  );
};

Step1.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
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
