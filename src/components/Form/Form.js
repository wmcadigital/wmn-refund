import React, { useState } from 'react';
import Step1 from 'components/Form/Step1/Step1';
import Step2 from 'components/Form/Step2/Step2';
import Step3 from 'components/Form/Step3/Step3';
import Step4 from 'components/Form/Step4/Step4';
import ProgressIndicator from './ProgressIndicator/ProgressIndicator';
// Import styling
import s from './Form.module.scss';

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleFormData = (item, value) => {
    // If item is CustomerType then only update that
    if (item === 'CustomerType') {
      setFormData((state) => ({ ...state, [item]: value }));
    }
    // Else if it's anything else then update the item/value pair within the Application object
    else {
      setFormData((state) => ({
        ...state,
        Application: { ...state.Application, [item]: value },
      }));
    }
  };

  return (
    <div className="wmnds-col-1 wmnds-col-md-3-4 ">
      <ProgressIndicator currentStep={currentStep} />
      <div className={`wmnds-p-lg ${s.formWrapper}`}>
        {currentStep === 1 && (
          <Step1
            handleFormData={handleFormData}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        )}
        {currentStep === 2 && (
          <Step2
            handleFormData={handleFormData}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        )}
        {currentStep === 3 && (
          <Step3
            handleFormData={handleFormData}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        )}
        {currentStep === 4 && (
          <Step4
            handleFormData={handleFormData}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        )}
      </div>
    </div>
  );
};

export default Form;
