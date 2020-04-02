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
    // When input is changed then update state
    formDispatch({
      type: 'UPDATE_FORM_DATA',
      payload: { [name]: e.target.value },
    });
  }

  // set up event handler for onBlur
  function handleBlur() {
    if (!formState.Application[name]) return; // if value is not set, then return
    setIsTouched(true); // Set touched as the input has been touched by user (used below to determine whether to show errors)
  }

  // Re-use this logic everytime state is updated
  useEffect(() => {
    // If the user has touched the input then we can show errors
    if (isTouched) {
      // If there is no length
      if (!formState.Application[name].length) {
        setError(`${label} is required`);
      }
      // Else all is good, so reset error
      else {
        setError(null);
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
