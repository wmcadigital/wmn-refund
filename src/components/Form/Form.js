import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useForm, FormProvider } from 'react-hook-form';
// Import contexts
import { FormDataContext } from 'globalState/FormDataContext';

// Import components
import Step1 from 'components/Form/Step1/Step1';
import Step2 from 'components/Form/Step2/Step2';
import Step3 from 'components/Form/Step3/Step3';
import Step4 from 'components/Form/Step4/Step4';
// Import custom hooks
import useTrackFormAbandonment from './useTrackFormAbandonment';
import useLogRocketTracking from './useLogRocketTracking';
// Import styling
import s from './Form.module.scss';

const Form = ({ formSubmitStatus, setFormSubmitStatus, setCannotProcess }) => {
  const [formDataState] = useContext(FormDataContext); // Get the state/dispatch of form data from FormDataContext
  const { currentStep } = formDataState; // Destructure step from state

  // const formRef = useRef(null); // Ref for tracking the dom of the form (used in Google tracking)

  const [isPaperTicket, setIsPaperTicket] = useState(false); // Used to track if a user is using a paper ticket (set in step 1). Then read this value in step 3 to show 'upload proof/photo'
  const [isSwiftOnMobile, setIsSwiftOnMobile] = useState(false); // Used to track if a user has clicked Swift On Mobile (set in step 1). Then read this value in step 3 to show 'different text for swift card number'

  const methods = useForm({
    mode: 'onBlur',
  }); // Trigger validation onBlur events (config for react hook form lib)

  useTrackFormAbandonment(currentStep, formSubmitStatus); // Used to track user abandonment via Google Analytics/Tag Manager

  useLogRocketTracking(formDataState, isPaperTicket, isSwiftOnMobile); // Used to track javascript errors etc. in Log Rocket

  return (
    <>
      <div className="wmnds-col-1 wmnds-col-md-3-4 ">
        {/* pass all methods into the context */}
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <FormProvider {...methods}>
          <div className={`wmnds-p-lg ${s.formWrapper}`}>
            {/* Start of form */}
            {currentStep === 1 && (
              <Step1
                currentStep={currentStep}
                setIsPaperTicket={setIsPaperTicket}
                setIsSwiftOnMobile={setIsSwiftOnMobile}
                setCannotProcess={setCannotProcess}
              />
            )}
            {currentStep === 2 && (
              <Step2
                currentStep={currentStep}
                isPaperTicket={isPaperTicket}
                setCannotProcess={setCannotProcess}
              />
            )}
            {currentStep === 3 && (
              <Step3
                currentStep={currentStep}
                isPaperTicket={isPaperTicket}
                isSwiftOnMobile={isSwiftOnMobile}
              />
            )}
            {currentStep === 4 && (
              <Step4
                currentStep={currentStep}
                formSubmitStatus={formSubmitStatus}
                setFormSubmitStatus={setFormSubmitStatus}
              />
            )}
          </div>
        </FormProvider>
      </div>
      {/* If in dev mode or on netlify then show debugging options */}
      {(process.env.NODE_ENV === 'development' || process.env.NETLIFY) && (
        <pre
          className="wmnds-col-1 wmnds-col-md-1-4 wmnds-p-md"
          style={{
            overflowX: 'auto',
            position: 'fixed',
            right: 0,
          }}
        >
          {JSON.stringify(formDataState, null, 2)}
        </pre>
      )}
    </>
  );
};

Form.propTypes = {
  formSubmitStatus: PropTypes.bool,
  setFormSubmitStatus: PropTypes.func.isRequired,
  setCannotProcess: PropTypes.func.isRequired,
};

Form.defaultProps = {
  formSubmitStatus: null,
};

export default Form;
