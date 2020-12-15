import { useState, useContext, useEffect } from 'react';
// Import contexts
import { useFormContext } from 'react-hook-form';
import { FormDataContext } from 'globalState/FormDataContext';

const useRadioSubmit = (name) => {
  const [formDataState, formDataDispatch] = useContext(FormDataContext); // Get the state/dispatch of form data from FormDataContext
  const { formStatus, CustomerType } = formDataState;

  const { getValues } = useFormContext(); // Get useForm methods

  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    // make sure customer type is set correctly if user changed customer type
    if (CustomerType !== getValues(name)) {
      formDataDispatch({
        type: 'UPDATE_CUSTOMER_TYPE',
        payload: getValues(name),
      });
    }
  }, [CustomerType, formDataDispatch, getValues, name]);

  // function to compare previous and new values to check if we should clear the form data
  const mustRewrite = (previousValue, newValue) => {
    // if switching between Scratchcard & classpass, we don't need to clear the form data as the steps are the same
    return !(
      (previousValue === 'Scratchcard' && newValue === 'ClassPass') ||
      (previousValue === 'ClassPass' && newValue === 'Scratchcard') ||
      previousValue === newValue
    );
  };

  // Update customerType on radio button change
  const handleRadioChange = (e, previousValue) => {
    formDataDispatch({ type: 'UPDATE_CUSTOMER_TYPE', payload: e.target.value });

    if (
      mustRewrite(
        previousValue || formDataState.Application[e.target.name],
        e.target.value
      )
    ) {
      setHasChanged(true);
    } else {
      setHasChanged(false);
    }
  };

  const radioSubmit = (e, handleSubmit, payload) => {
    if (hasChanged) {
      // update form data removing unnecessary fields
      formDataDispatch({
        type: 'REWRITE_FORM_DATA',
        payload: payload || {},
      });
      // check if user has reached confirmation before
      if (formStatus.hasReachedConfirmation) {
        // set hasReachedConfirmation false to allow user to continue to next question
        formDataDispatch({
          type: 'UPDATE_FORM_NAV',
          payload: { hasReachedConfirmation: false },
        });
      }
    }

    handleSubmit(e);
  };

  return {
    handleRadioChange,
    radioSubmit,
  };
};

export default useRadioSubmit;
