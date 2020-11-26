import { useState, useContext } from 'react';
// Import contexts
import { FormDataContext } from 'globalState/FormDataContext';

const useFileUploadValidation = () => {
  const [formDispatch] = useContext(FormDataContext); // Get the state of form data from FormContext


  // Local state for controlling file upload
  const [fileName, setFileName] = useState('Upload photo'); // Used to change the name of the input/label button to the users file name

  const [fileSize, setFileSize] = useState(0);

  const handleChange = (e) => {
    const file = e.target.files[0];

    // If a file exists (user hasn't clicked cancel button or something)
    if (file) {
      setFileName(file.name); // Set file name that the user has chosen (this will display in our label)
      setFileSize(file.size); // Set file size of the file

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

  // return object
  return {
    handleChange,
    fileName,
    fileSize,
  };
};

export default useFileUploadValidation;
