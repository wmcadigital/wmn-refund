import React from 'react';
// Import contexts
import { useFormContext } from 'react-hook-form';
import { FormDataContext } from 'globalState/FormDataContext';

// Import components
import InputCheckbox from '../../shared/FormElements/Input/InputCheckbox';

const Step5ConsentForm = () => {
  const { register } = useFormContext(FormDataContext); // Custom hook for handling continue button (validation, errors etc)

  // Labels used on inputs and for validation
  const checkBoxLabel = (
    <>
      I have read the &nbsp;
      <a
        href="https://www.wmca.org.uk/policies"
        target="_blank"
        title="Read our Privacy Policy"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>
      &nbsp; and agree to be emailed about disruptions.
    </>
  );
  // Logic used to validate the email field
  const checkboxValidation = register({
    required: 'Agree to terms and conditions before continue',
    validate: {
      shouldBeTrue: (val) =>
        val === true || 'Agree to terms and conditions before continue',
    },
  });

  return (
    <fieldset className="wmnds-fe-fieldset">
      <h3 className="wmnds-m-t-lg wmnds-m-b-lg">Consent</h3>
      <InputCheckbox
        name="Terms"
        type="checkbox"
        fieldValidation={checkboxValidation}
        labelElement={checkBoxLabel}
      />
    </fieldset>
  );
};

export default Step5ConsentForm;
