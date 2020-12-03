import React, { useContext } from 'react';
// Import contexts
import { FormDataContext } from 'globalState/FormDataContext';
import { useFormContext } from 'react-hook-form';
// Import components
import Radios from 'components/shared/FormElements/Radios/Radios';

const NHS = () => {
  const [, formDispatch] = useContext(FormDataContext); // Get the state of form data from FormDataContext
  const { register } = useFormContext();
  // Update NHS on radio button change
  const handleRadioChange = (e) =>
    formDispatch({
      type: 'UPDATE_FORM_DATA',
      payload: { NHS: e.target.value },
    });

  return (
    <Radios
      name="NHS"
      label="Do you work for the NHS?"
      radios={[
        {
          text: 'Yes',
          value: 'true',
        },
        {
          text: `No`,
          value: 'false',
        },
      ]}
      fieldValidation={register({
        required: 'Select a response',
      })}
      onChange={handleRadioChange}
    />
  );
};

export default NHS;
