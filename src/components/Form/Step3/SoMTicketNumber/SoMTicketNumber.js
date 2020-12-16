import React from 'react';

// Import components
import Input from 'components/shared/FormElements/Input/Input';
// Import contexts
import { useFormContext } from 'react-hook-form';

const SoMTicketNumber = () => {
  const { register } = useFormContext(); // Custom hook for handling validation (errors etc)
  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h2 className="wmnds-fe-question">What is your ticket number?</h2>
        <p>This is the number in the history tab of the Swift on Mobile app</p>
      </legend>
      <Input
        className="wmnds-col-1-2 wmnds-col-sm-1-5"
        name="TicketNumber"
        label="Ticket number"
        inputmode="numeric"
        fieldValidation={register({
          required: 'Enter ticket number',
        })}
      />
    </fieldset>
  );
};

export default SoMTicketNumber;
