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

  return (
    <div className="wmnds-col-1 wmnds-col-md-3-4 ">
      <ProgressIndicator currentStep={currentStep} />
      <div className={`wmnds-p-lg ${s.formWrapper}`}>
        {currentStep === 1 && <Step1 setFormData={setFormData} formData={formData} />}
        {currentStep === 2 && <Step2 setFormData={setFormData} />}
        {currentStep === 3 && <Step3 setFormData={setFormData} />}
        {currentStep === 4 && <Step4 setFormData={setFormData} />}

        {/* Only show continue button if we are not on the summary page */}
        {currentStep <= 4 && (
          <button
            type="button"
            className="wmnds-btn wmnds-col-1 wmnds-m-t-md"
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
