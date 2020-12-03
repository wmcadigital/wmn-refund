import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import dompurify from 'dompurify';
import InputMask from 'react-input-mask';

// Import contexts
import { useFormContext } from 'react-hook-form';
import { FormDataContext } from 'globalState/FormDataContext';

const { sanitize } = dompurify;

const Input = ({
  autocomplete,
  className,
  inputmode,
  label,
  mask,
  maskPlaceholder,
  name,
  spellcheck,
  disabled,
  type,
  fieldValidation,
}) => {
  const { errors } = useFormContext();
  const [formDataState] = useContext(FormDataContext); // Get the state/dispatch of form data from FormDataContext

  // Set input to render below
  const input = mask ? (
    <InputMask
      className={`wmnds-fe-input ${
        errors[name] ? 'wmnds-fe-input--error' : ''
      }`}
      mask={mask}
      maskPlaceholder={maskPlaceholder}
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
        <span
          className="wmnds-fe-error-message"
          dangerouslySetInnerHTML={{ __html: sanitize(errors[name].message) }}
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
  maskPlaceholder: PropTypes.string,
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
  maskPlaceholder: null,
};

export default Input;
