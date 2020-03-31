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
  const [formState] = useContext(FormContext); // Get the state of form data from FormContext

  return (
    <div className="wmnds-col-1 wmnds-col-md-3-4 ">
      <ProgressIndicator currentStep={currentStep} />
      <div className={`wmnds-p-lg ${s.formWrapper}`}>
        {currentStep === 1 && (
          <Step1 setCurrentStep={setCurrentStep} currentStep={currentStep} />
        )}
        {currentStep === 2 && (
          <Step2 setCurrentStep={setCurrentStep} currentStep={currentStep} />
        )}
        {currentStep === 3 && (
          <Step3 setCurrentStep={setCurrentStep} currentStep={currentStep} />
        )}
        {currentStep === 4 && (
          <Step4 setCurrentStep={setCurrentStep} currentStep={currentStep} />
        )}
      </div>
      <pre className="wmnds-p-md">{JSON.stringify(formState, null, 2)}</pre>
    </div>
  );
};

export default Form;
