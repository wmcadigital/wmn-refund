import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label,
  inputmode,
  onChange,
  name,
  className,
  spellcheck,
  type,
}) => {
  // Set input to render below
  const input = (
    <input
      className="wmnds-fe-input"
      id={name}
      name={name}
      type={type}
      inputMode={inputmode}
      spellCheck={spellcheck}
      onChange={onChange}
    />
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
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  spellcheck: PropTypes.bool,
  type: PropTypes.string,
};

Input.defaultProps = {
  inputmode: 'text',
  onChange: null,
  className: '',
  spellcheck: false,
  type: 'text',
};

export default Input;
