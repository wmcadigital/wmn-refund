import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useForm, FormProvider } from 'react-hook-form';
// Import contexts
import { FormDataContext } from 'globalState/FormDataContext';

// Import components
import Step1 from 'components/Form/Step1/Step1';
import Step2 from 'components/Form/Step2/Step2';
import Step3 from 'components/Form/Step3/Step3';
import Step4 from 'components/Form/Step4/Step4';
import Step5 from 'components/Form/Step5Confirm/Step5Confirm';
import BackButton from './BackButton/BackButton';
// Import custom hooks
import useTrackFormAbandonment from './useTrackFormAbandonment';
import useLogRocketTracking from './useLogRocketTracking';
// Import styling
import s from './Form.module.scss';

const Form = ({
  formSubmitStatus,
  setFormSubmitStatus,
  setIsFormStarted,
  setCannotProcess,
}) => {
  const [formDataState] = useContext(FormDataContext); // Get the state/dispatch of form data from FormDataContext
  const { currentStep } = formDataState; // Destructure step from state

  // const formRef = useRef(null); // Ref for tracking the dom of the form (used in Google tracking)

  const methods = useForm({
    mode: 'onBlur',
  }); // Trigger validation onBlur events (config for react hook form lib)

  useTrackFormAbandonment(currentStep, formSubmitStatus); // Used to track user abandonment via Google Analytics/Tag Manager

  useLogRocketTracking(formDataState); // Used to track javascript errors etc. in Log Rocket

  return (
    <>
      <div className="wmnds-col-1 wmnds-col-md-3-4 ">
        {/* pass all methods into the context */}
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <FormProvider {...methods}>
          {!formDataState.formStatus.hasReachedConfirmation && (
            <BackButton setIsFormStarted={setIsFormStarted} />
          )}
          <div className={`wmnds-p-lg ${s.formWrapper}`}>
            {/* Start of form */}
            {currentStep === 1 && <Step1 setCannotProcess={setCannotProcess} />}
            {currentStep === 2 && <Step2 setCannotProcess={setCannotProcess} />}
            {currentStep === 3 && <Step3 setCannotProcess={setCannotProcess} />}
            {currentStep === 4 && <Step4 />}
            {currentStep === 5 && (
              <Step5
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
  setIsFormStarted: PropTypes.func.isRequired,
};

Form.defaultProps = {
  formSubmitStatus: null,
};

export default Form;
