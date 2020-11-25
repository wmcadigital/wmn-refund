import React, { useState, useContext } from 'react';
import { useFormContext, useForm } from 'react-hook-form';
// Import contexts
import { FormDataContext } from 'globalState/FormDataContext';
// Import components
import GenericError from 'components/shared/Errors/GenericError';
import Button from 'components/shared/Button/Button';

const useStepLogic = (formRef) => {
    const { register, errors, triggerValidation, getValues } = useFormContext(); // Get useForm methods

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
        const result = await triggerValidation();
        const {currentStep} = formDataState;
        setIsContinuePressed(true);
        // if no errors
        if (result) {
            console.log(getValues());

            formDataDispatch({ type: 'UPDATE_FORM_DATA', payload: getValues() });

            // // step logic that applies to step 1 only
            // if(formDataState.currentStep === 1){
            //     // SwiftCard, paperTicket
            //     if(
            //         formDataState.CustomerType === 'SwiftCard' ||
            //         formDataState.CustomerType === 'PaperTicket'
            //     ) {
            //         setStep(currentStep + 1) // Go to next step (2) so we can set customerType
            //     }
            //     // classPass, scratchcard
            //     else if (
            //         formDataState.CustomerType === 'Scratchcard' ||
            //         formDataState.CustomerType === 'ClassPass'
            //     ) {
            //         setStep(currentStep + 3); // Skip to last steps as payment info isn't needed for scratchcard and classPass
            //     }
            //     // swiftOnMobile;
            //     else {
            //         setStep(currentStep + 2); // Skip two steps(step 3) as customerType has been set
            //     }
            // } 
            // // if not on step 1...
            // else {
            //     setStep(!formDataState.hasReachedConfirmation && formDataState.currentStep + 1);
            // }

        }
        // else, errors are true...
        else {
            window.scrollTo(0, formRef.current.offsetTop); // Scroll to top of form
        }
    };

    // Continue button
    const continueButton = (
        <Button btnClass="wmnds-btn wmnds-col-1 wmnds-m-t-md" type="submit" text="Continue" />
    );


    const showGenericError = Object.keys(errors).length > 0 && isContinuePressed && <GenericError />;

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