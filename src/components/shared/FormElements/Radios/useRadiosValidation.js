import { useState, useContext, useEffect } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
import { FormErrorContext } from 'globalState/FormErrorContext';

const useRadiosValidation = (name, label) => {
  // set up the state for the inputs value prop and set it to the default value
  const [formState, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext
  const [, errorDispatch] = useContext(FormErrorContext); // Get the state of form data from FormContext

  // set up state for the inputs error prop
  const [error, setError] = useState(null);
  // const [isTouched, setIsTouched] = useState(false);

  const value = formState.Application[name] || ''; // Get value from state

  // Handle validation
  // Re-use this logic everytime state is updated
  useEffect(() => {
    // If the user has touched the input then we can show errors

    // if (isTouched) {
    // If there is no length
    if (!value.length) {
      setError(`Select ${label.toLowerCase().replace(/\?/, '')}`);
    }

    // Else all is good, so reset error
    else {
      setError(null);
    }
    // }
  }, [label, name, value, value.length]);

  // UseEffect to control global error state (this is used to halt the continue/submit button)
  useEffect(() => {
    // If there is an error or there is no value in the input
    if (error || !value.length) {
      errorDispatch({ type: 'ADD_ERROR', payload: name }); // Then add this error to global error state
    } else {
      errorDispatch({ type: 'REMOVE_ERROR', payload: name }); // Else remove from global error state
    }
  }, [error, errorDispatch, name, value.length]);

  return { error };
};

export default useRadiosValidation;
