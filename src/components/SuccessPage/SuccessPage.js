import React, { useContext } from 'react';
// Import contexts
import { FormDataContext } from 'globalState/FormDataContext';

// Import components
import Icon from 'components/shared/Icon/Icon';
import Title from 'components/shared/Title/Title';

const SuccessPage = () => {
  const [formState] = useContext(FormDataContext); // Get the state of form data from FormDataContext

  return (
    <>
      <Title />
      <div className="wmnds-col-1 wmnds-col-md-3-4 wmnds-col-lg-1-2">
        {/* Success message */}
        <div className="wmnds-msg-summary wmnds-msg-summary--success-fill wmnds-m-b-xl">
          <div className="wmnds-msg-summary__header">
            <Icon
              iconName="general-success"
              className="wmnds-msg-summary__icon"
            />
            <h3 className="wmnds-msg-summary__title">Application complete</h3>
          </div>

          <div className="wmnds-msg-summary__info">
            Your reference number is <strong>{formState.FormRef}</strong>
          </div>
        </div>

        {/* Success copy */}
        <h3>What happens next</h3>
        <p>
          We will send you an email within the next 24 hours to acknowledge your
          application. If we need any more information to process your
          cancellation, we will be in touch.
        </p>
      </div>
    </>
  );
};

export default SuccessPage;
