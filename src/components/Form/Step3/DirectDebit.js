import React from 'react';
import PropTypes from 'prop-types';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const DirectDebit = ({ setDirectDebitNumber, setCardNumber }) => {
  return (
    <>
      <div className="wmnds-fe-group">
        <fieldset className="wmnds-fe-fieldset">
          <legend className="wmnds-fe-fieldset__legend">
            <h3 className="wmnds-fe-question">
              What is your Direct Debit reference?
            </h3>
          </legend>
          <div className="wmnds-col-1-2 wmnds-col-sm-1-5">
            <Input
              name="DirectDebitNumber"
              label="Direct Debit reference"
              inputmode="numeric"
              onChange={(e) => setDirectDebitNumber(e.target.value)}
            />
          </div>
        </fieldset>
      </div>
      <div className="wmnds-fe-group">
        <fieldset className="wmnds-fe-fieldset">
          <legend className="wmnds-fe-fieldset__legend">
            <h3 className="wmnds-fe-question">
              What is your Swift card number?
            </h3>
            <p>
              This is the long number on the front of the card and begins with{' '}
              <strong>633597 0107</strong>
            </p>
          </legend>
          <div className="wmnds-col-1-2 wmnds-col-sm-1-5">
            <Input
              name="CardNumber"
              label="Swift card number"
              inputmode="numeric"
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
        </fieldset>
      </div>
    </>
  );
};

DirectDebit.propTypes = {
  setDirectDebitNumber: PropTypes.func.isRequired,
  setCardNumber: PropTypes.func.isRequired,
};

export default DirectDebit;
