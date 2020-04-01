import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Radio from 'components/shared/FormElements/Radio/Radio';

const HowProcess = () => {
  const [, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext

  // Update customerType on radio button change
  const handleRadioChange = (e) =>
    formDispatch({
      type: 'UPDATE_FORM_DATA',
      payload: { ActionType: e.target.value },
    });

  return (
    <div className="wmnds-fe-group">
      <fieldset className="wmnds-fe-fieldset">
        <legend className="wmnds-fe-fieldset__legend">
          <h3 className="wmnds-fe-question">
            Choose how we process your application
          </h3>
        </legend>
        <div className="wmnds-fe-radios wmnds-col-1 wmnds-col-md-3-4">
          <Radio
            name="ActionType"
            text="Cancel your ticket and get a refund for the period you have not travelled. You will have to apply for a new ticket when you go back to work."
            value="CancelTicket"
            onChange={handleRadioChange}
          />
          <Radio
            name="ActionType"
            text="Contact us again when you go back to work. After you have let us know, you will get refund for the period you have not travelled. You will continue to pay for your ticket every month during social distancing measures. You can use the same ticket when you go back to work."
            value="NotTravelling"
            onChange={handleRadioChange}
          />
        </div>
      </fieldset>
    </div>
  );
};

export default HowProcess;
