import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const SwiftCard = () => {
  const [, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h3 className="wmnds-fe-question">What is your Swift card number?</h3>
        <p>
          This is the long number on the front of the card and begins with{' '}
          <strong>633597 0107</strong>
        </p>
      </legend>
      <Input
        className="wmnds-col-1-2 wmnds-col-sm-1-5"
        name="CardNumber"
        label="Swift card number"
        inputmode="numeric"
        onChange={(e) =>
          formDispatch({
            type: 'UPDATE_FORM_DATA',
            payload: { CardNumber: e.target.value },
          })
        }
      />
    </fieldset>
  );
};

export default SwiftCard;
