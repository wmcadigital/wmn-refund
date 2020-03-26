import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, name }) => {
  return (
    <div className="wmnds-fe-input">
      <label htmlFor={name} className="fe-title">
        {label}
      </label>
      <input type="text" name={name} id={name} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
