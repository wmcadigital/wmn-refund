import React from 'react';
import PropTypes from 'prop-types';
import useInput from 'customHooks/useFormValidation';

const Input = ({
  className,
  inputmode,
  label,
  name,
  // onChange,
  // onBlur,
  spellcheck,
  type,
}) => {
  const { handleChange, handleBlur, error } = useInput(name, '');

  // Set input to render below
  const input = (
    <>
      <span className="wmnds-error-message">{error}</span>
      <input
        className={`wmnds-fe-input ${error ? 'wmnds-fe-input--error' : ''}`}
        id={name}
        name={name}
        type={type}
        inputMode={inputmode}
        spellCheck={spellcheck}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </>
  );

  return (
    <div className="wmnds-fe-group">
      {label && (
        <label className="wmnds-fe-label" htmlFor={name}>
          {label}
        </label>
      )}
      {/* If className then wrap just input with the className else, just show input as usual */}
      {className ? <div className={className}>{input}</div> : input}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  inputmode: PropTypes.string,
  // onChange: PropTypes.func,
  // onBlur: PropTypes.func,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  spellcheck: PropTypes.bool,
  type: PropTypes.string,
};

Input.defaultProps = {
  inputmode: 'text',
  // onChange: null,
  // onBlur: null,
  className: '',
  spellcheck: false,
  type: 'text',
};

export default Input;
