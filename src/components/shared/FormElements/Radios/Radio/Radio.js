/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import dompurify from 'dompurify';

// Import contexts
import { FormDataContext } from 'globalState/FormDataContext';

const { sanitize } = dompurify;

const Radio = ({ name, onChange, fieldValidation, text, value }) => {
  const [formDataState] = useContext(FormDataContext); // Get the state/dispatch of form data from FormDataContext

  return (
    <>
      <label className="wmnds-fe-radios__container">
        <div dangerouslySetInnerHTML={{ __html: sanitize(text) }} />
        <input
          className="wmnds-fe-radios__input"
          value={value}
          name={name}
          type="radio"
          ref={fieldValidation}
          onChange={onChange}
          defaultChecked={formDataState.Application[name] === value}
        />
        <span className="wmnds-fe-radios__checkmark" />
      </label>
    </>
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  fieldValidation: PropTypes.func,
};

Radio.defaultProps = {
  onChange: null,
  fieldValidation: null,
};

export default Radio;
