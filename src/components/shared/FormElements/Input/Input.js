import React from 'react';
import PropTypes from 'prop-types';
import useInput from 'customHooks/useInputValidation';

const Input = ({
  autocomplete,
  className,
  inputmode,
  label,
  name,
  spellcheck,
  type,
  customValidation,
}) => {
  const { handleChange, handleBlur, error } = useInput(
    name,
    label,
    inputmode,
    customValidation
  );

  // Set input to render below
  const input = (
    <>
      <input
        className={`wmnds-fe-input ${error ? 'wmnds-fe-input--error' : ''}`}
        id={name}
        name={name}
        type={type}
        inputMode={inputmode}
        spellCheck={spellcheck}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete={autocomplete}
      />
    </>
  );

  return (
    <div className={`wmnds-fe-group ${error ? 'wmnds-fe-group--error' : ''}`}>
      {label && (
        <label className="wmnds-fe-label" htmlFor={name}>
          {label}
        </label>
      )}

      {/* If there is an error, show here */}
      {error && <span className="wmnds-fe-error-message">{error}</span>}

      {/* If className then wrap just input with the className else, just show input as usual */}
      {className ? <div className={className}>{input}</div> : input}
    </div>
  );
};

Input.propTypes = {
  autocomplete: PropTypes.string,
  label: PropTypes.string.isRequired,
  inputmode: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  spellcheck: PropTypes.bool,
  type: PropTypes.string,
  customValidation: PropTypes.func,
};

Input.defaultProps = {
  autocomplete: null,
  inputmode: 'text',
  className: '',
  spellcheck: false,
  type: 'text',
  customValidation: null,
};

export default Input;
