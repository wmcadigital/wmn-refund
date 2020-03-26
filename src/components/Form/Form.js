import React, { useState } from 'react';
import Step1 from 'components/Form/Step1/Step1';

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return <>{currentStep === 1 && <Step1 setCurrentStep={setCurrentStep} />}</>;
};

export default Form;
