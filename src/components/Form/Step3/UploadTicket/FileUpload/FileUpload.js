import React, { useState, useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Icon from 'components/shared/Icon/Icon';
// Import styles
import s from './FileUpload.module.scss';

const FileUpload = () => {
  const [, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext

  const [isFileInputFocused, setIsFileInputFocused] = useState(false);
  const [fileName, setFileName] = useState('Upload photo');

  const handleFileSelected = (file) => {
    setFileName(file.name); // Set file name that the user has chosen (this will display in our label)

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
  };

  return (
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
        onFocus={() => setIsFileInputFocused(true)}
        onBlur={() => setIsFileInputFocused(false)}
        onChange={(e) => handleFileSelected(e.target.files[0])}
        className={s.fileUpload}
      />
    </label>
  );
};

export default FileUpload;
