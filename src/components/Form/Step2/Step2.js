import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// Import custom hooks
import useStepLogic from 'components/Form/useStepLogic';

// Import components
import Radios from 'components/shared/FormElements/Radios/Radios';
import SectionStepInfo from 'components/shared/SectionStepInfo/SectionStepInfo';

const Step2 = ({ isPaperTicket, setCannotProcess }) => {
  const formRef = useRef(); // Used so we can keep track of the form DOM element
  const {
    register,
    formDataState,
    formDataDispatch,
    handleSubmit,
    showGenericError,
    continueButton,
  } = useStepLogic(formRef, setCannotProcess); // Custom hook for handling continue button (validation, errors etc)

  // Update customerType on radio button change
  const handleRadioChange = (e) => {
    formDataDispatch({
      type: 'UPDATE_CUSTOMER_TYPE',
      payload: e.target.value,
    });

    // check if user has reached confirmation before
    if (formDataState.hasReachedConfirmation) {
      // set hasReachedConfirmation false to allow user to continue to next question
      formDataDispatch({
        type: 'REACHED_CONFIRMATION',
        payload: false,
      });
    }

    // update form data removing unnecessary fields
    formDataDispatch({
      type: 'REWRITE_FORM_DATA',
      payload: {
        CustomerType: formDataState.Application.CustomerType,
      },
    });
  };

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
      text:
        'I bought it from a West Midlands Network travel shop, railway station ticket office or Payzone shop',
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
      <SectionStepInfo
        section="Section 2 of 3"
        description="About your ticket"
      />
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
  isPaperTicket: PropTypes.bool.isRequired,
  setCannotProcess: PropTypes.func.isRequired,
};

export default Step2;
