import React from 'react';
// Import contexts
import { useFormContext } from 'react-hook-form';
// Import components
import Input from 'components/shared/FormElements/Input/Input';
import paperTicketImg from 'assets/images/paper-ticket-example.jpg';

const TicketNumber = () => {
  const {register} = useFormContext();

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h2 className="wmnds-fe-question">What is your ticket number?</h2>
        <p>
          This is the five-digit number found near the expiry date on your paper
          ticket
        </p>
        <p>
          <img
            src={paperTicketImg}
            alt="Paper Network travel ticket, with expiry date located in the middle and ticket number indicated in a red box."
            loading="auto"
          />
        </p>
      </legend>
      <Input
        className="wmnds-col-1-2 wmnds-col-sm-1-5"
        name="TicketNumber"
        label="Ticket number"
        inputmode="numeric"
        fieldValidation={register({
          required: 'Enter a ticket number',
          validate: {
            length: value => value.length === 5 ||  'Ticket number must be 5 digits'
          }
        })}
      />
    </fieldset>
  );
};

export default TicketNumber;
