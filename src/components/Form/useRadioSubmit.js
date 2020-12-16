import { useState, useContext, useEffect } from 'react';
// Import contexts
import { useFormContext } from 'react-hook-form';
import { FormDataContext } from 'globalState/FormDataContext';

const useRadioSubmit = (name) => {
  const [formDataState, formDataDispatch] = useContext(FormDataContext); // Get the state/dispatch of form data from FormDataContext
  const { formStatus, CustomerType } = formDataState;

  const { getValues } = useFormContext(); // Get useForm methods

  const [hasChanged, setHasChanged] = useState(false); // keep track of whether the user has made a change that requires more data
  const [didReachConfirmation, setDidReachConfirmation] = useState(false); // keep track of whether the user had come from the confirmation page

  useEffect(() => {
    if (formStatus.hasReachedConfirmation) {
      setDidReachConfirmation(true);
    }
  }, [formStatus.hasReachedConfirmation, didReachConfirmation]);

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
  const handleRadioChange = (e) => {
    formDataDispatch({ type: 'UPDATE_CUSTOMER_TYPE', payload: e.target.value });

    if (mustRewrite(formDataState.Application[e.target.name], e.target.value)) {
      setHasChanged(true);
      if (didReachConfirmation) {
        // if user has come from confirmation page and changed radio, set hasReached to false so they can continue to next page
        formDataDispatch({
          type: 'UPDATE_FORM_NAV',
          payload: { hasReachedConfirmation: false },
        });
      }
    } else {
      setHasChanged(false);
      if (didReachConfirmation) {
        // if user has come from confirmation page didn't change radio, set hasReached back to true so they can go back to confirmation
        formDataDispatch({
          type: 'UPDATE_FORM_NAV',
          payload: { hasReachedConfirmation: true },
        });
      }
    }
  };

  const radioSubmit = (e, handleSubmit, payload) => {
    if (hasChanged) {
      // update form data removing unnecessary fields
      formDataDispatch({
        type: 'REWRITE_FORM_DATA',
        payload: payload || {},
      });
    }

    handleSubmit(e);
  };

  return {
    handleRadioChange,
    radioSubmit,
  };
};

export default useRadioSubmit;
