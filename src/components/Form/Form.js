import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Step1 from 'components/Form/Step1/Step1';
import Step2 from 'components/Form/Step2/Step2';
import Step3 from 'components/Form/Step3/Step3';
import Step4 from 'components/Form/Step4/Step4';
import ProgressIndicator from './ProgressIndicator/ProgressIndicator';
// Import styling
import s from './Form.module.scss';

const Form = ({ setFormSubmitStatus }) => {
  const [formState] = useContext(FormContext); // Get the state of form data from FormContext
  const [currentStep, setCurrentStep] = useState(1);
  const [isPaperTicket, setIsPaperTicket] = useState(false); // Used to track if a user is using a paper ticket (set in step 1). Then read this value in step 3 to show 'upload proof/photo'
  const [isSwiftCard, setIsSwiftCard] = useState(false); // Used to track if a user is using a SwiftCard(set in step 1). Then read this value in step 2 to hide 'bought on website radio option'

  const handleSubmit = (event) => {
    event.preventDefault();

    // The above is temp commented whilst we wait for CORS
    fetch('https://apisNWM.cenapps.org.uk/ticketapplications/Refund', {
      method: 'post',
      body: JSON.stringify(formState),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log({ data });
        setFormSubmitStatus(true); // Set form status to success

        alert(`form has been submitted as ${formState.CustomerType}`);
      })
      .catch((error) => {
        console.error('Error:', error);
        setFormSubmitStatus(false); // Set form status to success
      });
  };

  return (
    <>
      <div className="wmnds-col-1 wmnds-col-md-3-4 ">
        <ProgressIndicator currentStep={currentStep} />
        <div className={`wmnds-p-lg ${s.formWrapper}`}>
          {/* Start of form */}
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <Step1
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
                setIsPaperTicket={setIsPaperTicket}
                setIsSwiftCard={setIsSwiftCard}
              />
            )}
            {currentStep === 2 && (
              <Step2
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
                isSwiftCard={isSwiftCard}
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
  setFormSubmitStatus: PropTypes.func.isRequired,
};

export default Form;
