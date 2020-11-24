import React, { useState, useContext } from 'react';
import { useFormContext, useForm } from 'react-hook-form';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import GenericError from 'components/shared/Errors/GenericError';

const useStepLogic = (formRef) => {
    const { register, errors, triggerValidation, getValues } = useFormContext(); // Get useForm methods

    const [formState, formDispatch] = useContext(FormContext); // Get the state/dispatch of form data from FormContext

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await triggerValidation();
        console.log(result)
    }

    const showGenericError = Object.keys(errors).length > 0 && <GenericError />;

    return {register, handleSubmit, showGenericError}
}

export default useStepLogic;