import React from 'react';
import PropTypes from 'prop-types';
import dompurify from 'dompurify';

import Radio from './Radio/Radio';
import useRadioValidation from './useRadiosValidation';

const { sanitize } = dompurify;

const Radios = ({ label, onChange }) => {
  const { error } = useRadioValidation('CustomerType', label);

  return (
    <div className={`wmnds-fe-group ${error ? 'wmnds-fe-group--error' : ''}`}>
      <fieldset className="wmnds-fe-fieldset">
        <legend className="wmnds-fe-fieldset__legend">
          <h3 className="wmnds-fe-question">{label}</h3>
          {/* If there is an error, show here */}
          {error && (
            <span
              className="wmnds-fe-error-message"
              dangerouslySetInnerHTML={{ __html: sanitize(error) }}
            />
          )}
        </legend>
        <div className="wmnds-fe-radios">
          <Radio
            name="CustomerType"
            text="Swift card"
            value="SwiftCard"
            onChange={onChange}
          />
          <Radio
            name="CustomerType"
            text="Paper ticket"
            value="PaperTicket"
            onChange={onChange}
          />
          <Radio
            name="CustomerType"
            text="Swift on Mobile app"
            value="SwiftPortal"
            onChange={onChange}
          />
          <Radio
            name="CustomerType"
            text="Scratchcard"
            value="Scratchcard"
            onChange={onChange}
          />
          <Radio
            name="CustomerType"
            text="Class pass"
            value="ClassPass"
            onChange={onChange}
          />
        </div>
      </fieldset>
    </div>
  );
};

Radios.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Radios.defaultProps = {
  onChange: null,
};

export default Radios;
