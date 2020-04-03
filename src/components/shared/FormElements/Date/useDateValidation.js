import { useState, useContext, useEffect } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';

let day;
let month;
let year;

const useInputValidation = () => {
  const [formState, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext
  // set up state for the inputs error prop
  const [error, setError] = useState(null);
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e) => {
    // Switch on the input name, depending on name then update the relevant var
    switch (e.target.name) {
      case 'LastUsedDay':
        day = e.target.value;
        break;
      case 'LastUsedMonth':
        month = e.target.value;
        break;
      default:
        year = e.target.value;
    }

    // If day, month and year exists then update state
    if (day && month && year) {
      const LastUsedDate = `${year}-${month}-${day}`; // Set LastUsed var on how API expects it
      // Update state
      formDispatch({
        type: 'UPDATE_FORM_DATA',
        payload: { LastUsedDate },
      });
    }
  };

  // set up event handler for onBlur
  function handleBlur() {
    setIsTouched(true); // Set touched as the input has been touched by user (used below to determine whether to show errors)
  }

  useEffect(() => {
    if (isTouched) {
      if (!day) {
        setError('no day');
      }
    }
  }, [isTouched]);

  // return object
  return {
    handleChange,
    handleBlur,
    error,
  };
};

export default useInputValidation;
