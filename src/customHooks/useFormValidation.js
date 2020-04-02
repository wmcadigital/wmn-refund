import { useState, useContext, useEffect } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';

const useInput = (name, label) => {
  // set up the state for the inputs value prop and set it to the default value
  const [formState, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext
  // set up state for the inputs error prop
  const [error, setError] = useState(null);
  const [isTouched, setIsTouched] = useState(false);

  // set up the event handler for onChange event
  function handleChange(e) {
    formDispatch({
      type: 'UPDATE_FORM_DATA',
      payload: { [name]: e.target.value },
    });
  }

  // set up event handler for onBlur, if value is not set, setError to true
  function handleBlur() {
    if (!formState.Application[name]) return;
    setIsTouched(true);
  }

  useEffect(() => {
    // set the state no matter what
    if (isTouched) {
      if (!formState.Application[name].length) {
        setError(`${label} is required`);
      } else {
        setError('shorterName');
      }
    }
  }, [formState.Application, isTouched, label, name]);

  // return object
  return {
    handleChange,
    handleBlur,
    error,
  };
};

export default useInput;
