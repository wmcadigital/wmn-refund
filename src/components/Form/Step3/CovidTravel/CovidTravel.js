import React, { useContext } from 'react';
// Import contexts
import { FormDataContext } from 'globalState/FormDataContext';
import { useFormContext } from 'react-hook-form';
// Import components
import Radios from 'components/shared/FormElements/Radios/Radios';

const CovidTravel = () => {
  const [, formDispatch] = useContext(FormDataContext); // Get the state of form data from FormDataContext
  const { register } = useFormContext();

  // Update customerType on radio button change
  const handleRadioChange = (e) =>
    formDispatch({
      type: 'UPDATE_FORM_DATA',
      payload: { CovidTravel: e.target.value },
    });

  return (
    <Radios
      name="CovidTravel"
      label="Did you stop using your ticket to travel because of the coronavirus (COVID-19) pandemic?"
      radios={[
        {
          text: 'Yes',
          value: 'Yes',
        },
        {
          text: `No`,
          value: 'No',
        },
      ]}
      onChange={handleRadioChange}
      fieldValidation={register({
        required: 'Select a response',
      })}
    />
  );
};

export default CovidTravel;
