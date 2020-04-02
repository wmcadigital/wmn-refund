import React, { useState, useContext, useEffect } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Icon from 'components/shared/Icon/Icon';
// Import styles
import s from './FileUpload.module.scss';

const FileUpload = () => {
  const [formState, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext

  // Local state for controlling file upload
  const [isFileInputFocused, setIsFileInputFocused] = useState(false);
  const [fileName, setFileName] = useState('Upload photo');

  // set up state for the inputs error prop
  const [error, setError] = useState(null);
  const [isTouched, setIsTouched] = useState(false);
  const [fileSize, setFileSize] = useState(0);

  const handleChange = (file) => {
    if (file) {
      setFileName(file.name); // Set file name that the user has chosen (this will display in our label)
      setFileSize(file.size);

      const PhotoBase64Extension = file.type.split('/')[1]; // => image/png (split at '/' and grab second part 'png')
      // Start base64'n our uploaded image
      const reader = new FileReader(); // Start new file reader
      reader.readAsDataURL(file); // Read file as dataURL
      // When loaded
      reader.onloadend = () => {
        // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
        const PhotoBase64 = reader.result.replace(/^data:.+;base64,/, '');

        // Update our formData with the base64Extension and Base64 photo
        formDispatch({
          type: 'UPDATE_FORM_DATA',
          payload: { PhotoBase64Extension, PhotoBase64 },
        });
      };
    }
  };

  const handleFocus = () => {
    setIsTouched(true); // Set touched as the input has been touched by user (used below to determine whether to show errors)
    setIsFileInputFocused(true);
  };

  useEffect(() => {
    // If the user has touched the input then we can show errors
    if (isTouched) {
      if (!formState.Application.PhotoBase64Extension) {
        setError('Select a photo');
      } else if (
        formState.Application.PhotoBase64Extension !== 'png' &&
        formState.Application.PhotoBase64Extension !== 'jpg' &&
        formState.Application.PhotoBase64Extension !== 'jpeg'
      ) {
        setError('The selected file must be a JPG, JPEG, or PNG');
      } else if (fileSize > 4194304) {
        setError('The selected file must be smaller than 4MB');
      }
      // Else all is good, so reset error
      else {
        setError(null);
      }
    }
  }, [fileSize, formState.Application.PhotoBase64Extension, isTouched]);

  return (
    <div className="wmnds-fe-group">
      <fieldset className="wmnds-fe-fieldset">
        <legend className="wmnds-fe-fieldset__legend">
          <h3 className="wmnds-fe-question">
            Upload a photo of the front of the ripped ticket
          </h3>
          <p>
            We need to be able to read the ticket type and expiry date to
            process the refund
          </p>
        </legend>
        {/* If there is an error, show here */}
        {error && <span className="wmnds-fe-error-message">{error}</span>}
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
            name="fileUpload"
            id="fileUpload"
            onFocus={handleFocus}
            onBlur={() => setIsFileInputFocused(false)}
            onChange={(e) => handleChange(e.target.files[0])}
            className={s.fileUpload}
          />
        </label>
      </fieldset>
    </div>
  );
};

export default FileUpload;
