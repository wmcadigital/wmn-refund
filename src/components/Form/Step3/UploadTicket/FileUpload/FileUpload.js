import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Import components
import Icon from 'components/shared/Icon/Icon';
// Import contexts
import { useFormContext } from 'react-hook-form'
// Import styles
import s from './FileUpload.module.scss';

const FileUpload = ({name, fieldValidation}) => {
  
  const { errors } = useFormContext()

  // Local state for controlling file upload
  const [isFileInputFocused, setIsFileInputFocused] = useState(false); // This is used to emulate the input focus class on the label
  const [fileName, setFileName] = useState('Upload photo'); // Used to change the name of the input/label button to the users file name


  const handleChange = (e) => {
    const file = e.target.files[0];

    // If a file exists (user hasn't clicked cancel button or something)
    if (file) {
      setFileName(file.name); // Set file name that the user has chosen (this will display in our label)
    }
  };

  // HandleFocus (when user joins input)
  const handleFocus = () => {
    setIsFileInputFocused(true); // Set input to focus
  };

  // Handleblur (when user leaves input), set input to unfocus
  const handleBlur = () => setIsFileInputFocused(false);

  return (
    <div className={`wmnds-fe-group ${errors[name] ? 'wmnds-fe-group--error' : ''}`}>
      <fieldset className="wmnds-fe-fieldset">
        <legend className="wmnds-fe-fieldset__legend">
          <h2 className="wmnds-fe-question">
            Upload a photo of the front of the ripped ticket
          </h2>
          <p>
            We need to be able to read the ticket type and expiry date to
            process the refund
          </p>
        </legend>
        {/* If there is an error, show here */}
        {errors[name] && <span className="wmnds-fe-error-message">{errors[name].message}</span>}
        <label
          htmlFor="fileUpload"
          className={`wmnds-btn wmnds-btn--primary ${
            isFileInputFocused ? s.fileUploadLabelFocused : ''
          }`}
        >
          {fileName}
          <Icon
            className="wmnds-btn__icon wmnds-btn__icon--right"
            iconName="general-paperclip"
          />
          <input
            type="file"
            name={name}
            id="fileUpload"
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
            className={s.fileUpload}
            ref={fieldValidation}
          />
        </label>
      </fieldset>
    </div>
  );
};

FileUpload.propTypes = {
  name: PropTypes.string.isRequired,
  fieldValidation: PropTypes.func,
};

FileUpload.defaultProps = {
  fieldValidation: null,
};


export default FileUpload;
