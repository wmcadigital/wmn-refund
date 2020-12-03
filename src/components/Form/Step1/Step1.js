import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// Import custom hooks
import useStepLogic from 'components/Form/useStepLogic';
// Import components
import Radios from 'components/shared/FormElements/Radios/Radios';
import SectionStepInfo from 'components/shared/SectionStepInfo/SectionStepInfo';

const Step1 = ({ setIsPaperTicket, setIsSwiftOnMobile, setCannotProcess }) => {
  const formRef = useRef(); // Used so we can keep track of the form DOM element
  const {
    register,
    formDataState,
    formDataDispatch,
    handleSubmit,
    showGenericError,
    continueButton,
  } = useStepLogic(formRef, setCannotProcess); // Custom hook for handling continue button (validation, errors etc)

  // Update customerType on radio button change
  const handleRadioChange = (e) => {
    formDataDispatch({ type: 'UPDATE_CUSTOMER_TYPE', payload: e.target.value });

    // function to compare previous and new values to check if we should clear the form data
    const mustRewrite = (previousValue, newValue) => {
      // if switching between Scratchcard & classpass, we don't need to clear the form data as the steps are the same
      return !(
        (previousValue === 'Scratchcard' && newValue === 'ClassPass') ||
        (previousValue === 'ClassPass' && newValue === 'Scratchcard')
      );
    };

    if (mustRewrite(formDataState.Application.CustomerType, e.target.value)) {
      // check if user has reached confirmation before
      if (formDataState.hasReachedConfirmation) {
        // set hasReachedConfirmation false to allow user to continue to next question
        formDataDispatch({
          type: 'REACHED_CONFIRMATION',
          payload: false,
        });
      }

      // update form data removing unnecessary fields
      formDataDispatch({
        type: 'REWRITE_FORM_DATA',
        payload: {},
      });
    }

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
        section="Section 1 of 3"
        description="Before you start"
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
  setIsPaperTicket: PropTypes.func.isRequired,
  setIsSwiftOnMobile: PropTypes.func.isRequired,
  setCannotProcess: PropTypes.func.isRequired,
};

export default Step1;
