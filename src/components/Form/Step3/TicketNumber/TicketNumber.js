import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Input from 'components/shared/FormElements/Input/Input';
import paperTicketImg from 'assets/images/paper-ticket-example.jpg';

const TicketNumber = () => {
  const [, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h3 className="wmnds-fe-question">What is your ticket number?</h3>
        <p>
          This is the five-digit number found near the expiry date on your paper
          ticket
        </p>
        <p>
          <img
            src={paperTicketImg}
            alt="A paper Network travel ticket. The expiry date of the ticket is in the middle. There is a red rectangle box to the right of the expiry date to show where the ticket number is located."
            loading="auto"
          />
        </p>
      </legend>
      <Input
        className="wmnds-col-1-2 wmnds-col-sm-1-5"
        name="TicketNumber"
        label="Ticket number"
        inputmode="numeric"
        onChange={(e) =>
          formDispatch({
            type: 'UPDATE_FORM_DATA',
            payload: { TicketNumber: e.target.value },
          })
        }
      />
    </fieldset>
  );
};

export default TicketNumber;
