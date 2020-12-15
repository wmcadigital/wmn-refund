import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
// Import custom hooks
import useStepLogic from 'components/Form/useStepLogic';
// Import components
import Radios from 'components/shared/FormElements/Radios/Radios';
import SectionStepInfo from 'components/shared/SectionStepInfo/SectionStepInfo';

const Step1 = ({ setCannotProcess }) => {
  const formRef = useRef(); // Used so we can keep track of the form DOM element
  const {
    register,
    formDataState,
    formDataDispatch,
    handleSubmit,
    showGenericError,
    continueButton,
  } = useStepLogic(formRef, setCannotProcess); // Custom hook for handling continue button (validation, errors etc)

  const [hasChanged, setHasChanged] = useState(false);

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
      setHasChanged(true);
    } else {
      setHasChanged(false);
    }
  };

  const radioSubmit = (e) => {
    formDataDispatch({
      type: 'UPDATE_FORM_NAV',
      payload: {
        isPaperTicket: e.target.value === 'PaperTicket', // If paper ticket chosen set isPaperTicket to true (value used in step 3)
        isSwiftOnMobile: e.target.value === 'SwiftPortal', // If Swift on Mobile chosen (only one with SwiftPortal val on this step)
      },
    });

    if (hasChanged) {
      // update form data removing unnecessary fields
      formDataDispatch({
        type: 'REWRITE_FORM_DATA',
        payload: {},
      });
      // check if user has reached confirmation before
      if (formDataState.formStatus.hasReachedConfirmation) {
        // set hasReachedConfirmation false to allow user to continue to next question
        formDataDispatch({
          type: 'UPDATE_FORM_NAV',
          payload: { hasReachedConfirmation: false },
        });
      }
    }

    handleSubmit(e);
  };

  return (
    <form onSubmit={radioSubmit} ref={formRef} autoComplete="on">
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
  setCannotProcess: PropTypes.func.isRequired,
};

export default Step1;
