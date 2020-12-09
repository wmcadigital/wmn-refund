import React, { useContext } from 'react';
// Import contexts
import { FormDataContext } from 'globalState/FormDataContext';
import { useFormContext } from 'react-hook-form';
// Import components
import Radios from 'components/shared/FormElements/Radios/Radios';

const CovidRefund = () => {
  const [, formDispatch] = useContext(FormDataContext); // Get the state of form data from FormDataContext
  const { register } = useFormContext();

  // Update customerType on radio button change
  const handleRadioChange = (e) =>
    formDispatch({
      type: 'UPDATE_FORM_DATA',
      payload: { CovidRefund: e.target.value },
    });

  return (
    <Radios
      name="CovidRefund"
      label="Did you stop using your ticket to travel because of the coronavirus (COVID-19) pandemic?"
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
      onChange={handleRadioChange}
      fieldValidation={register({
        required: 'Select a response',
      })}
    />
  );
};

export default CovidRefund;
