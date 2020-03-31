import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, inputmode, name, pattern, spellcheck }) => {
  return (
    <div className="wmnds-fe-group">
      <label className="wmnds-fe-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="wmnds-fe-input"
        id={name}
        name={name}
        type="text"
        pattern={pattern}
        inputMode={inputmode}
        spellCheck={spellcheck}
        required
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  inputmode: PropTypes.string,
  name: PropTypes.string.isRequired,
  spellcheck: PropTypes.bool,
};

Input.defaultProps = {
  inputmode: 'text',
  spellcheck: false,
};

export default Input;
