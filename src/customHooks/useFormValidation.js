import { useState, useContext, useEffect } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';

const useInput = (name, label) => {
  // set up the state for the inputs value prop and set it to the default value
  const [formState, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext
  // set up state for the inputs error prop
  const [error, setError] = useState(null);
  const [isTouched, setIsTouched] = useState(false);

  const value = formState.Application[name] || ''; // Get value from state

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
    setIsTouched(true); // Set touched as the input has been touched by user (used below to determine whether to show errors)
  }

  // Re-use this logic everytime state is updated
  useEffect(() => {
    // If the user has touched the input then we can show errors
    if (isTouched) {
      // If there is no length
      if (!value.length) {
        setError(`${label} is required`);
      }
      // DirectDebit logic
      else if (name === 'DirectDebit') {
      }
      // Else all is good, so reset error
      else {
        setError(null);
      }
    }
  }, [isTouched, label, name, value.length]);

  // return object
  return {
    handleChange,
    handleBlur,
    error,
  };
};

export default useInput;
