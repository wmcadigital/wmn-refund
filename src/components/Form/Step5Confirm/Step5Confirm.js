/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// Import custom hooks
import useSubmitForm from '../useSubmitForm';
import SummarySection from './Step5SummarySection';
import Consent from './Step5ConsentForm';
// Import components
import Button from '../../shared/Button/Button';

function Step5Confirm({ setFormSubmitStatus }) {
  const formRef = useRef(); // Used so we can keep track of the form DOM element
  const {
    formDataState,
    formDataDispatch,
    showGenericError,
    handleSubmit,
    isFetching,
  } = useSubmitForm(formRef, setFormSubmitStatus); // Custom hook for handling continue button (validation, errors etc)

  useEffect(() => {
    if (formDataState.currentStep === 5) {
      formDataDispatch({
        type: 'UPDATE_FORM_NAV',
        payload: { hasReachedConfirmation: true },
      });
    }
  }, [formDataDispatch, formDataState.currentStep]);

  return (
    <form onSubmit={handleSubmit} ref={formRef} data-private>
      {/* Show generic error message */}
      {showGenericError}

      <SummarySection />

      <Consent />

      <div className="wmnds-col-1">
        {/* Button onClick logic is located in parent Form component as it is 'submit' form logic */}
        <Button
          isFetching={isFetching}
          disabled={isFetching}
          type="submit"
          text="Submit application"
          btnClass="wmnds-btn--start wmnds-btn--disabled wmnds-m-t-md"
          iconRight="general-chevron-right"
        />
      </div>
    </form>
  );
}

Step5Confirm.propTypes = {
  setFormSubmitStatus: PropTypes.func.isRequired,
};

export default Step5Confirm;
