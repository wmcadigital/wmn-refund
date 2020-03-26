import React from 'react';
import Input from 'components/shared/FormElements/Input/Input';

const Step4 = () => {
  return (
    <>
      <h2>Tell us about yourself</h2>
      <p>
        We’ll use this information to confirm your identity and contact you if we need more
        information
      </p>

      <h3>What company or organisation do you work for?</h3>
      <Input label="Company or organisation name" name="CompanyName" />
      <h3>What is your date of birth?</h3>

      <h3>What is your home address?</h3>

      <h3>What is your email address?</h3>
      <h3>What is your telephone number?</h3>
    </>
  );
};

export default Step4;
