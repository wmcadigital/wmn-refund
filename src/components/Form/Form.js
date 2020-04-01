import React, { useState, useContext } from 'react';
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

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPaperTicket, setIsPaperTicket] = useState(false); // Used to track if a user is using a paper ticket (set in step 1). Then read this value in step 3 to show 'upload proof/photo'
  const [isSwiftCard, setIsSwiftCard] = useState(false); // Used to track if a user is using a SwiftCard(set in step 1). Then read this value in step 2 to hide 'bought on website radio option'

  const [formState] = useContext(FormContext); // Get the state of form data from FormContext

  return (
    <>
      <div className="wmnds-col-1 wmnds-col-md-3-4 ">
        <ProgressIndicator currentStep={currentStep} />
        <div className={`wmnds-p-lg ${s.formWrapper}`}>
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
            <Step4 setCurrentStep={setCurrentStep} currentStep={currentStep} />
          )}
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

export default Form;
