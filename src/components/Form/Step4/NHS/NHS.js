import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Radios from 'components/shared/FormElements/Radios/Radios';

const NHS = () => {
  const [, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext

  // Update customerType on radio button change
  const handleRadioChange = (e) =>
    formDispatch({
      type: 'UPDATE_FORM_DATA',
      payload: { ActionType: e.target.value },
    });

  return (
    <Radios
      name="ActionType"
      label="Do you work for the NHS?"
      radios={[
        {
          text: 'Yes',
          value: true,
        },
        {
          text: `No`,
          value: false,
        },
      ]}
      onChange={handleRadioChange}
    />
  );
};

export default NHS;
