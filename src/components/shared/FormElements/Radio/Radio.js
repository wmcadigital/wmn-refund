/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ name, text, value }) => {
  return (
    <label className="wmnds-fe-radios__container">
      {text}
      <input className="wmnds-fe-radios__input" value={value} name={name} type="radio" />
      <span className="wmnds-fe-radios__checkmark" />
    </label>
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Radio;
