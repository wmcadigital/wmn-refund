import { useState, useContext, useEffect } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';

const useInput = (name) => {
  // set up the state for the inputs value prop and set it to the default value
  const [formState, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext
  // set up state for the inputs error prop
  const [error, setError] = useState(null);
  const [isTouched, setIsTouched] = useState(false);

  // set up the event handler for onChange event
  function handleChange(e) {
    formDispatch({
      type: 'UPDATE_FORM_DATA',
      payload: { PhoneNumber: e.target.value },
    });
  }

  useEffect(() => {
    console.log(isTouched);
    // set the state no matter what
    if (isTouched) {
      if (formState.Application[name].length > 4) {
        setError('longer name');
      } else {
        setError('shorterName');
      }
    }
  }, [formState.Application, isTouched, name]);

  // set up event handler for onBlur, if value is not set, setError to true
  function handleBlur() {
    if (!formState.Application[name]) return;
    setIsTouched(true);
  }

  // return object
  return {
    name,
    handleChange,
    handleBlur,
    error,
  };
};

export default useInput;
