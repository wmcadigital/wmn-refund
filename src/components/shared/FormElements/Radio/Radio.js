/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import dompurify from 'dompurify';

import useRadioValidation from './useRadioValidation';

const { sanitize } = dompurify;

const Radio = ({ name, onChange, text, value }) => {
  const { error } = useRadioValidation(name);

  return (
    <>
      {/* If there is an error, show here */}
      {error && (
        <span
          className="wmnds-fe-error-message"
          dangerouslySetInnerHTML={{ __html: sanitize(error) }}
        />
      )}
      <label className="wmnds-fe-radios__container">
        <div dangerouslySetInnerHTML={{ __html: sanitize(text) }} />
        <input
          className="wmnds-fe-radios__input"
          value={value}
          name={name}
          type="radio"
          onChange={onChange}
        />
        <span className="wmnds-fe-radios__checkmark" />
      </label>
    </>
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Radio.defaultProps = {
  onChange: null,
};

export default Radio;
