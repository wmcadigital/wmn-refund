import React, { useEffect, useState, useContext } from 'react';
// Import contexts
import { useFormContext } from 'react-hook-form';
import { FormDataContext } from 'globalState/FormDataContext';
// Import components
import Input from 'components/shared/FormElements/Input/Input';
import InputCheckbox from 'components/shared/FormElements/Input/InputCheckbox';
// Style
import style from './DirectDebit.module.scss';

const DirectDebit = () => {
  const label = 'Direct Debit reference'; // Used on input and for validation

  const [formDataState] = useContext(FormDataContext); // Get the state of form data from FormDataContext

  const { register, setValue } = useFormContext(); // Custom hook for handling continue button (validation, errors etc)

  const [noDDNumber, setNoDDNumber] = useState(
    formDataState.Application.NoDirectDebitNumber
  ); // state for setting can't find direct debit number checkbox

  useEffect(() => {
    // set the Direct debit number value to 0 if checkbox is selected
    if (noDDNumber) {
      setValue('DirectDebitNumber', '0', { shouldValidate: true });
    } else {
      setValue('DirectDebitNumber', '');
    }
  }, [noDDNumber, setValue]);

  const ddNumValidation = register({
    required: `Enter a valid ${label}`,
    pattern: {
      value: /^[0-9]+$/,
      message: `${label} must only include numbers`,
    },
    validate: {
      // DirectDebit reference should start with 6
      firstNumberCheck: (value) =>
        value.charAt(0) === '6' ||
        value === '0' ||
        `${label} is a number that begins with '6'`,
      // Must be 6 digits long
      lengthCheck: (value) =>
        value.length === 6 || value === '0' || `${label} must be 6 digits`,
    },
  });

  // Labels used on inputs and for validation
  const checkBoxLabel = <>I can&rsquo;t find my Direct Debit reference</>;

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h3 className="wmnds-fe-question">
          What is your Direct Debit reference?
        </h3>
        <p>
          This is the <strong>6-digit number</strong> beginning with a{' '}
          <strong>6</strong>.<br /> It is shown next to every payment to WMCA
          for your Direct Debit on your bank statement.
        </p>
      </legend>
      <Input
        className={`wmnds-col-1-2 wmnds-col-sm-1-5 ${
          noDDNumber && style.disabled
        }`}
        name="DirectDebitNumber"
        label={label}
        inputmode="numeric"
        fieldValidation={ddNumValidation}
        disabled={noDDNumber}
      />
      <div className="wmnds-fe-group">
        <details className="wmnds-details">
          <summary className="wmnds-link">
            I can&rsquo;t find my Direct Debit reference
          </summary>
          <div className="wmnds-details__content">
            <p>
              Check for an email when you originally set up your Direct Debit.
            </p>
            <p>
              <strong>I still can&rsquo;t find the number</strong>
            </p>
            <p>
              We&rsquo;ll try to match your details and we&rsquo;ll get in touch
              if we need any more information.
            </p>
            <InputCheckbox
              name="NoDirectDebitNumber"
              type="checkbox"
              fieldValidation={register({
                required: false,
              })}
              handleChange={() => setNoDDNumber(!noDDNumber)}
              labelElement={checkBoxLabel}
            />
          </div>
        </details>
      </div>
    </fieldset>
  );
};

export default DirectDebit;
