import React from 'react';

const Step4 = () => {
  return (
    <>
      <h2>Tell us about yourself</h2>
      <p>
        We’ll use this information to confirm your identity and contact you if we need more
        information
      </p>

      <h4>What company or organisation do you work for?</h4>
      <div className="wmnds-fe-input">
        <label htmlFor="hello" className="fe-title">
          Company or organisation name
        </label>
        <input type="text" name="hello" id="hello" />
      </div>
      <h4>What is your date of birth?</h4>

      <h4>What is your home address?</h4>
      <h4>What is your email address?</h4>
      <h4>What is your telephone number?</h4>
    </>
  );
};

export default Step4;
