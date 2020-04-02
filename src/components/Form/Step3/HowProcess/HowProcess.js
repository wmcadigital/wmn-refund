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
            text="<strong>Cancel</strong> your ticket and get a refund for the period you have not travelled. We will process your refund from the date you last travelled up to the ticket expiry date and you will no longer be able to travel using this ticket."
            value="CancelTicket"
            onChange={handleRadioChange}
          />
        <p>or</p>
          <Radio
            name="ActionType"
            text="<strong>Suspend</strong> your ticket. Complete the refund form and let us know when you go back to work. We will calculate your refund from the the date you last travelled up to the day before you use your Swift card again. <br />By suspending your ticket, you will continue to pay monthly deducations from your salary and you can use the same Swift card on your first day back at work. The refund will be sent directly to you."
            value="NotTravelling"
            onChange={handleRadioChange}
          />
        </div>
      </fieldset>
    </div>
  );
};

export default HowProcess;
