import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-maskinput';

// Import contexts
import { useFormContext } from 'react-hook-form';
import { FormDataContext } from 'globalState/FormDataContext';

const Input = ({
  autocomplete,
  className,
  inputmode,
  label,
  mask,
  maskChar,
  name,
  spellcheck,
  disabled,
  type,
  fieldValidation,
}) => {
  const { errors, trigger } = useFormContext();
  const [formDataState] = useContext(FormDataContext); // Get the state/dispatch of form data from FormDataContext
  const [inputValue, setInputValue] = useState(formDataState.Application[name]);
  const [isTouched, setIsTouched] = useState(false);

  // Trigger validation every time input has been updated
  useEffect(() => {
    if (isTouched && inputValue) trigger(name);
  }, [inputValue, name, isTouched, trigger]);

  // Set input to render below
  const input = mask ? (
    <InputMask
      className={`wmnds-fe-input ${
        errors[name] ? 'wmnds-fe-input--error' : ''
      }`}
      mask={mask}
      maskChar={maskChar}
      type={type}
      defaultValue={inputValue}
      inputMode={inputmode}
      spellCheck={spellcheck}
      disabled={disabled}
      onChange={(e) => setInputValue(e.target.value)}
      onBlur={() => setIsTouched(true)}
      autoComplete={autocomplete}
    />
  ) : (
    <>
      <input
        className={`wmnds-fe-input ${
          errors[name] ? 'wmnds-fe-input--error' : ''
        }`}
        id={name}
        name={name}
        type={type}
        defaultValue={formDataState.Application[name]}
        inputMode={inputmode}
        spellCheck={spellcheck}
        disabled={disabled}
        autoComplete={autocomplete}
        ref={fieldValidation}
      />
    </>
  );

  return (
    <div
      className={`wmnds-fe-group ${
        errors[name] ? 'wmnds-fe-group--error' : ''
      }`}
    >
      {label && (
        <label className="wmnds-fe-label" htmlFor={name}>
          {label}
        </label>
      )}

      {/* If there is an error, show here */}
      {errors[name] && (
        <span className="wmnds-fe-error-message">{errors[name].message}</span>
      )}

      {mask && (
        <input
          id={name}
          name={name}
          ref={fieldValidation}
          value={inputValue || ''}
          type="hidden"
        />
      )}

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
  disabled: PropTypes.bool,
  type: PropTypes.string,
  fieldValidation: PropTypes.func,
  mask: PropTypes.string,
  maskChar: PropTypes.string,
};

Input.defaultProps = {
  autocomplete: null,
  inputmode: 'text',
  disabled: false,
  className: '',
  spellcheck: false,
  type: 'text',
  fieldValidation: null,
  mask: null,
  maskChar: null,
};

export default Input;
