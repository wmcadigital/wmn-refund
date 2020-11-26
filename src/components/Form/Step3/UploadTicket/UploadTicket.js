import React from 'react';
// Import components
import Icon from 'components/shared/Icon/Icon';
import FileUpload from './FileUpload/FileUpload';
import { useFormContext } from 'react-hook-form';

const UploadTicket = () => {
  const {register} = useFormContext();

  const fileValidation = (uploadedFiles) => {
    let error;
    
    const file = uploadedFiles[0]

    // If a file exists (user hasn't clicked cancel button or something)
    if (file) {

      const PhotoBase64Extension = file.type.split('/')[1]; // => image/png (split at '/' and grab second part 'png')

      if (PhotoBase64Extension !== 'png' && PhotoBase64Extension !== 'jpg' && PhotoBase64Extension !== 'jpeg') {
        error = 'The selected file must be a JPG, JPEG, or PNG';
      } 
      else if (file.size > 4194304) {
        error = 'The selected file must be smaller than 4MB';
      }
    }

    return error;
  };

  const fileUploadValidation = register({
    required: 'Select a photo',
    validate: {
      test: value => fileValidation(value) && fileValidation(value)
    }
  })


  return (
    <>
      <div className="wmnds-msg-summary wmnds-msg-summary--warning wmnds-m-t-xl wmnds-m-b-xl">
        <div className="wmnds-msg-summary__header">
          <Icon
            className="wmnds-msg-summary__icon"
            iconName="general-warning-circle"
          />
          <h2 className="wmnds-msg-summary__title">
            Rip your paper ticket in half
          </h2>
        </div>
      </div>

      <FileUpload name='UploadTicket' fieldValidation={fileUploadValidation} />
    </>
  );
};

export default UploadTicket;
