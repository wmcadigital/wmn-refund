import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// Import custom hooks
import useStepLogic from 'components/Form/useStepLogic';
import useRadioSubmit from 'components/Form/useRadioSubmit';
// Import components
import Radios from 'components/shared/FormElements/Radios/Radios';
import SectionStepInfo from 'components/shared/SectionStepInfo/SectionStepInfo';

const Step1 = ({ setCannotProcess }) => {
  const formRef = useRef(); // Used so we can keep track of the form DOM element
  const {
    register,
    formDataDispatch,
    formDataState,
    handleSubmit,
    showGenericError,
    continueButton,
  } = useStepLogic(formRef, setCannotProcess); // Custom hook for handling continue button (validation, errors etc)

  const { radioSubmit, handleRadioChange } = useRadioSubmit('CustomerType');

  const step1Submit = (e) => {
    formDataDispatch({
      type: 'UPDATE_FORM_NAV',
      payload: {
        isPaperTicket: formDataState.CustomerType === 'PaperTicket', // If paper ticket chosen set isPaperTicket to true (value used in step 3)
        isSwiftOnMobile: formDataState.CustomerType === 'SwiftPortal', // If Swift on Mobile chosen (only one with SwiftPortal val on this step)
      },
    });
    radioSubmit(e, handleSubmit); // do radio submit checks then handlesubmit with useStepLogic
  };
  return (
    <form onSubmit={step1Submit} ref={formRef} autoComplete="on">
      <SectionStepInfo
        section="Section 1 of 3"
        description="Before you start"
      />

      {/* Show generic error message */}
      {showGenericError}

      <Radios
        name="CustomerType"
        label="Which best describes your ticket?"
        radios={[
          { text: 'Swift card', value: 'SwiftCard' },
          {
            text: 'Paper ticket',
            value: 'PaperTicket',
          },
          {
            text: 'Swift on Mobile app',
            value: 'SwiftPortal',
          },
          {
            text: 'Scratchcard',
            value: 'Scratchcard',
          },
          {
            text: 'Class pass',
            value: 'ClassPass',
          },
        ]}
        fieldValidation={register({
          required: `Select which best describes your ticket`,
        })}
        onChange={handleRadioChange}
      />
      {continueButton}
    </form>
  );
};

Step1.propTypes = {
  setCannotProcess: PropTypes.func.isRequired,
};

export default Step1;
