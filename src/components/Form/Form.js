import React, { useState, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
// Import contexts
import { FormContext } from 'globalState/FormContext';
import { FormErrorContext } from 'globalState/FormErrorContext';

// Import components
import Step1 from 'components/Form/Step1/Step1';
import Step2 from 'components/Form/Step2/Step2';
import Step3 from 'components/Form/Step3/Step3';
import Step4 from 'components/Form/Step4/Step4';
import ProgressIndicator from './ProgressIndicator/ProgressIndicator';
// Import custom hooks
import useTrackFormAbandonment from './useTrackFormAbandonment';
// Import styling
import s from './Form.module.scss';

const Form = ({ formSubmitStatus, setFormSubmitStatus }) => {
  const [formState, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext
  const [errorState, errorDispatch] = useContext(FormErrorContext); // Get the error state of form data from FormErrorContext

  const formRef = useRef(null); // Ref for tracking the dom of the form (used in Google tracking)
  const [currentStep, setCurrentStep] = useState(1);
  const [isPaperTicket, setIsPaperTicket] = useState(false); // Used to track if a user is using a paper ticket (set in step 1). Then read this value in step 3 to show 'upload proof/photo'

  useTrackFormAbandonment(formRef, currentStep, formSubmitStatus); // Used to track user abandonment via Google Analytics/Tag Manager

  const handleSubmit = (event) => {
    event.preventDefault();
    if (errorState.errors.length) {
      errorDispatch({ type: 'CONTINUE_PRESSED', payload: true }); // set continue button pressed to true so errors can show
    } else {
      errorDispatch({ type: 'CONTINUE_PRESSED', payload: false }); // Reset submit button pressed before going to next step

      // The above is temp commented whilst we wait for CORS
      fetch('https://apisNWM.cenapps.org.uk/ticketapplications/Refund', {
        method: 'post',
        body: JSON.stringify(formState),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          // If the response is successful(200: OK)
          if (response.status === 200) {
            return response.text(); // Return response (reference number)
          }
          throw new Error(response.statusText, response.Message); // Else throw error and go to our catch below
        })
        .then((payload) => {
          formDispatch({ type: 'ADD_FORM_REF', payload }); // Update form state with the form ref received from server
          setFormSubmitStatus(true); // Set form status to success
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error({ error });
          setFormSubmitStatus(false); // Set form status to error
        });
    }
  };

  return (
    <>
      <div className="wmnds-col-1 wmnds-col-md-3-4 ">
        <ProgressIndicator currentStep={currentStep} />
        <div className={`wmnds-p-lg ${s.formWrapper}`}>
          {/* Start of form */}
          <form onSubmit={handleSubmit} autoComplete="on" ref={formRef}>
            {currentStep === 1 && (
              <Step1
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
                setIsPaperTicket={setIsPaperTicket}
              />
            )}
            {currentStep === 2 && (
              <Step2
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
                isPaperTicket={isPaperTicket}
              />
            )}
            {currentStep === 3 && (
              <Step3
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
                isPaperTicket={isPaperTicket}
              />
            )}
            {currentStep === 4 && (
              <Step4
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
              />
            )}
          </form>
        </div>
      </div>
      <pre
        className="wmnds-col-1 wmnds-col-md-1-4 wmnds-p-md"
        style={{
          overflowX: 'auto',
          position: 'fixed',
          right: 0,
        }}
      >
        {JSON.stringify(formState, null, 2)}
      </pre>
    </>
  );
};

Form.propTypes = {
  formSubmitStatus: PropTypes.bool,
  setFormSubmitStatus: PropTypes.func.isRequired,
};

Form.defaultProps = {
  formSubmitStatus: null,
};

export default Form;
