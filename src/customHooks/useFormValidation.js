import { useContext } from 'react';
import { FormContext } from 'globalState/FormContext';

const useValidate = () => {
  const [formState] = useContext(FormContext); // Get the state of form data from FormContext
  const { Application } = formState;
  const errors = {};

  if (!Application.PhoneNumber) {
    errors.PhoneNumber = 'Email address is required';
  }

  return errors;
};

export default useValidate;
