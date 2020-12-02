import React, { useState, useContext } from 'react';
import { useFormContext } from 'react-hook-form';
// Import contexts
import { FormDataContext } from 'globalState/FormDataContext';
// Import components
import GenericError from 'components/shared/Errors/GenericError';
import Button from 'components/shared/Button/Button';

const useStepLogic = (formRef) => {
  const { register, errors, trigger, getValues } = useFormContext(); // Get useForm methods

  const [formDataState, formDataDispatch] = useContext(FormDataContext); // Get the state/dispatch of form data from FormDataContext

  const [isContinuePressed, setIsContinuePressed] = useState(false); // State for tracking if continue has been pressed

  // Function for setting the step of the form
  const setStep = (step) => {
    formDataDispatch({
      type: 'UPDATE_STEP',
      payload: step,
    });
  };

  // Update the current step to the correct one depending on users selection
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await trigger();
    const { currentStep } = formDataState;
    setIsContinuePressed(true);
    // if no errors
    if (result) {
      if (Object.keys(getValues()).includes('UploadTicket')) {
        const payload = getValues();

        // upload ticket key is no longer needed
        delete payload.UploadTicket;

        const file = getValues('UploadTicket')[0];

        const PhotoBase64Extension = file.type.split('/')[1]; // => image/png (split at '/' and grab second part 'png')
        // Start base64'n our uploaded image
        const reader = new FileReader(); // Start new file reader
        reader.readAsDataURL(file); // Read file as dataURL

        // When loaded
        reader.onloadend = () => {
          // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
          const PhotoBase64 = reader.result.replace(/^data:.+;base64,/, '');

          // Update our formData with the base64Extension and Base64 photo
          formDataDispatch({
            type: 'UPDATE_FORM_DATA',
            payload: { ...payload, PhotoBase64Extension, PhotoBase64 },
          });
        };
      } else {
        formDataDispatch({ type: 'UPDATE_FORM_DATA', payload: getValues() });
      }

      if (!formDataState.hasReachedConfirmation) {
        // step logic that applies to step 1 only
        if (formDataState.currentStep === 1) {
          // SwiftCard, paperTicket
          if (
            formDataState.CustomerType === 'SwiftCard' ||
            formDataState.CustomerType === 'PaperTicket'
          ) {
            setStep(currentStep + 1); // Go to next step (2) so we can set customerType
          }
          // classPass, scratchcard
          else if (
            formDataState.CustomerType === 'Scratchcard' ||
            formDataState.CustomerType === 'ClassPass'
          ) {
            setStep(currentStep + 3); // Skip to last steps as payment info isn't needed for scratchcard and classPass
          }
          // swiftOnMobile;
          else {
            setStep(currentStep + 2); // Skip two steps(step 3) as customerType has been set
          }
        }
        // if not on step 1...
        else {
          setStep(formDataState.currentStep + 1);
        }
      } else {
        setStep(5);
      }
    }
    // else, errors are true...
    else {
      window.scrollTo(0, formRef.current.offsetTop); // Scroll to top of form
    }
  };

  // Continue button
  const continueButton = (
    <Button
      btnClass="wmnds-btn wmnds-col-1 wmnds-m-t-md"
      type="submit"
      text="Continue"
    />
  );

  const showGenericError = Object.keys(errors).length > 0 &&
    isContinuePressed && <GenericError />;

  return {
    setStep,
    register,
    handleSubmit,
    showGenericError,
    continueButton,
    formDataState,
    formDataDispatch,
  };
};

export default useStepLogic;
