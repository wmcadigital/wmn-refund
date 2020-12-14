import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Title from 'components/shared/Title/Title';
import ContactDetails from 'components/shared/ContactDetails/ContactDetails';
// Import contexts
import { FormDataContext } from 'globalState/FormDataContext';

const ErrorPage = ({ setIsFormStarted, setCannotProcess }) => {
  const [formDataState] = useContext(FormDataContext); // Get the state/dispatch of form data from FormDataContext
  const { CustomerType } = formDataState; // Destructure step from state

  const goBack = () => {
    if (!CustomerType) {
      setIsFormStarted(false);
    }
    setCannotProcess(false);
  };
  return (
    <>
      <Title />
      <div className="wmnds-col-1 wmnds-col-md-3-4 wmnds-col-lg-1-2">
        <div className="wmnds-col-1 wmnds-m-b-md">
          <button
            type="button"
            className="wmnds-btn wmnds-btn--link"
            onClick={goBack}
          >
            &lt; Back
          </button>
        </div>
        {/* Error message */}
        <h3>We can&rsquo;t process your refund online yet</h3>

        <p>
          You&rsquo;ll need to phone Customer Services to request your refund.
        </p>

        <ContactDetails />
      </div>
    </>
  );
};

ErrorPage.propTypes = {
  setIsFormStarted: PropTypes.func.isRequired,
  setCannotProcess: PropTypes.func.isRequired,
};

export default ErrorPage;
