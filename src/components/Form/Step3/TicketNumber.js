import React from 'react';
import PropTypes from 'prop-types';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const TicketNumber = ({ setTicketNumber }) => {
  return (
    <div className="wmnds-fe-group">
      <fieldset className="wmnds-fe-fieldset">
        <legend className="wmnds-fe-fieldset__legend">
          <h3 className="wmnds-fe-question">What is your ticket number?</h3>
          <p>
            This is the five-digit number found next to the expiry date on your
            paper ticket
          </p>
        </legend>
        <div className="wmnds-col-1-2 wmnds-col-sm-1-5">
          <Input
            name="TicketNumber"
            label="Ticket number"
            inputmode="numeric"
            onChange={(e) => setTicketNumber(e.target.value)}
          />
        </div>
      </fieldset>
    </div>
  );
};

TicketNumber.propTypes = {
  setTicketNumber: PropTypes.func.isRequired,
};

export default TicketNumber;
