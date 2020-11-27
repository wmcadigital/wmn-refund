import React, { useState, useContext } from 'react';
import { useFormContext } from 'react-hook-form';
// Import contexts
import { FormDataContext } from 'globalState/FormDataContext';
// Import components
import GenericError from 'components/shared/Errors/GenericError';

const useSubmitForm = (formRef, setFormSubmitStatus) => {
  const { errors, trigger, getValues } = useFormContext(); // Get useForm methods

  const [formDataState, formDataDispatch] = useContext(FormDataContext); // Get the state/dispatch of form data from FormDataContext

  const [isContinuePressed, setIsContinuePressed] = useState(false); // State for tracking if continue has been pressed

  const [isFetching, setIsFetching] = useState(false);

  // Update the current step to the correct one depending on users selection
  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await trigger();

    setIsContinuePressed(true);
    // if no errors
    if (result) {
      formDataDispatch({ type: 'UPDATE_FORM_DATA', payload: getValues() });

      const dataToSend = {
          CustomerType: formDataState.CustomerType,
          Application: {
              ...formDataState.Application,
              ...getValues()
            }
        }

      window.dataLayer = window.dataLayer || []; // Set datalayer (GA thing)

      setIsFetching(true); // Set this so we can put loading state on button
      console.log(JSON.stringify(dataToSend))

      // Go hit the API with the data
      fetch(process.env.REACT_APP_API_HOST, {
        method: 'post',
        body: JSON.stringify(dataToSend),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          // If the response is successful(200: OK)
          if (response.status === 200) {
            return response.text(); // Return response (reference number)
          }
          throw new Error(response.statusText, response.Message); // Else throw error and go to our catch below
        })
        .then((payload) => {
          // If formsubmission is successful
          formDataDispatch({ type: 'ADD_FORM_REF', payload }); // Update form state with the form ref received from server
          // Log event to analytics/tag manager
          window.dataLayer.push({
            event: 'formAbandonment',
            eventCategory: 'wmn-refund',
            eventAction: 'form submitted: success',
            eventLabel: formDataState.CustomerType,
          });
          setIsFetching(false); // set to false as we are done fetching now
          setFormSubmitStatus(true); // Set form status to success
          window.scrollTo(0, 0); // Scroll to top of page
        })
        .catch((error) => {
          // If formsubmission errors
          // eslint-disable-next-line no-console
          console.error({ error });
          let errMsg;

          if (error.text) {
            error.text().then((errorMessage) => {
              errMsg = errorMessage;
            });
          } else {
            errMsg = error;
          }

          // Log event to analytics/tag manager
          window.dataLayer.push({
            event: 'formAbandonment',
            eventCategory: 'wmn-refund',
            eventAction: 'form submitted: error',
            eventLabel: errMsg,
          });
          setIsFetching(false); // set to false as we are done fetching now
          setFormSubmitStatus(false); // Set form status to error
          window.scrollTo(0, 0); // Scroll to top of page
        });
    }
    // else, errors are true...
    else {
      window.scrollTo(0, formRef.current.offsetTop); // Scroll to top of form
    }
  };

  const showGenericError = Object.keys(errors).length > 0 &&
    isContinuePressed && <GenericError />;

  return {
    handleSubmit,
    isFetching,
    showGenericError,
    formDataState,
  };
};

export default useSubmitForm;
