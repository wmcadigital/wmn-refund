import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
// Import custom hooks
import useStepLogic from 'components/Form/useStepLogic';
// Import contexts
import { FormDataContext } from 'globalState/FormDataContext';
// Import components
import Radios from 'components/shared/FormElements/Radios/Radios';
import SectionStepInfo from 'components/shared/SectionStepInfo/SectionStepInfo'

const Step2 = ({ currentStep, isPaperTicket }) => {
  const [, formDispatch] = useContext(FormDataContext); // Get the state of form data from FormDataContext
  
  const formRef = useRef(); // Used so we can keep track of the form DOM element
  const { register, handleSubmit, showGenericError, continueButton } = useStepLogic(formRef); // Custom hook for handling continue button (validation, errors etc)
  
  // Update customerType on radio button change
  const handleRadioChange = (e) =>
    formDispatch({
      type: 'UPDATE_CUSTOMER_TYPE',
      payload: e.target.value,
    });

  //  Set up default radio options (shown for both paper ticket and swift card)
  const radios = [
    {
      text: 'I pay monthly by Direct Debit',
      value: 'DirectDebit',
    },
    {
      text: 'I bought it from the West Midlands Network or Swift website',
      value: 'SwiftPortal',
    },
    {
      text: 'I pay for it through my company',
      value: 'Corporate',
    },

    {
      text: 'I bought it from a West Midlands Network travel shop, railway station ticket office or Payzone shop',
      value: 'Shop',
    },
  ];

  // If the user has selected something other than paper ticket in step 1
  if (!isPaperTicket) {
    const workwise = { text: 'I am on the Workwise scheme', value: 'Workwise' };
    const ticketMachine = {
      text: 'I bought it from a Swift kiosk',
      value: 'SwiftPortal',
    };

    radios.splice(-1, 0, workwise); // push workwise radio option to last before 1 in radio list
    radios.splice(-1, 0, ticketMachine); // push ticketMachine radio option to last before 1 in radio list
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef} autoComplete="on">
    <SectionStepInfo section={`Section ${currentStep} of 4`} description="Tell us about your ticket" />
    {/* Show generic error message */}
    {showGenericError}

      <Radios
        name="CustomerTypeStep2"
        label="How did you buy your ticket?"
        radios={radios}
        fieldValidation={register({
          required: `Select how you bought your ticket`,
        })}
        onChange={handleRadioChange}
      />

      {continueButton}
    </form>
  );
};

Step2.propTypes = {
  currentStep: PropTypes.number.isRequired,
  isPaperTicket: PropTypes.bool.isRequired,
  formRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default Step2;
