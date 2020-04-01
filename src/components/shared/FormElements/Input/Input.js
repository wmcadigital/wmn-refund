import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, inputmode, onChange, name, className, spellcheck }) => {
  return (
    <div className={className ? className : 'wmnds-fe-group'}>
      {label && (
        <label className="wmnds-fe-label" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className="wmnds-fe-input"
        id={name}
        name={name}
        type="text"
        inputMode={inputmode}
        spellCheck={spellcheck}
        onChange={onChange}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  inputmode: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  spellcheck: PropTypes.bool,
};

Input.defaultProps = {
  inputmode: 'text',
  onChange: null,
  className: null,
  spellcheck: false,
};

export default Input;
