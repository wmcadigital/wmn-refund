import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, name }) => {
  return (
    <div className="wmnds-fe-group">
      <label className="wmnds-fe-label" htmlFor={name}>
        {label}
      </label>
      <input className="wmnds-fe-input" id={name} name={name} type="text" />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
