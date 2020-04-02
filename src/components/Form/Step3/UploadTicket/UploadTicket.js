import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Icon from 'components/shared/Icon/Icon';
import FileUpload from './FileUpload/FileUpload';

const UploadTicket = () => {
  const [formState, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext

  // const uploadValidation = () => {
  //   let error;

  //   // DirectDebit reference should start with 6
  //   if (formState.Application.DirectDebitNumber.charAt(0) !== '6') {
  //     error = `${label} should start with '6'`;
  //   }

  //   return error;
  // };

  return (
    <>
      <div className="wmnds-msg-summary wmnds-msg-summary--warning wmnds-m-t-xl wmnds-m-b-xl">
        <div className="wmnds-msg-summary__header">
          <Icon
            className="wmnds-msg-summary__icon"
            iconName="general-warning-circle"
          />
          <h3 className="wmnds-msg-summary__title">
            Rip your paper ticket in half
          </h3>
        </div>
      </div>
      <div className="wmnds-fe-group">
        <fieldset className="wmnds-fe-fieldset">
          <legend className="wmnds-fe-fieldset__legend">
            <h3 className="wmnds-fe-question">
              Upload a photo of the front of the ripped ticket
            </h3>
            <p>
              We need to be able to read the ticket type and expiry date to
              process the refund
            </p>
          </legend>
          <FileUpload />
        </fieldset>
      </div>
    </>
  );
};

export default UploadTicket;
