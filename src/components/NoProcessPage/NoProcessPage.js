import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/shared/Title/Title';
import ContactDetails from 'components/shared/ContactDetails/ContactDetails';

const ErrorPage = ({ isFormStarted, setIsFormStarted, setCannotProcess }) => {
  const goBack = () => {
    if (!isFormStarted.isStarted) {
      setIsFormStarted({ ...isFormStarted, isOnFrontPage: true });
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
  isFormStarted: PropTypes.shape({
    isStarted: PropTypes.bool.isRequired,
    isOnFrontPage: PropTypes.bool.isRequired,
  }).isRequired,
  setIsFormStarted: PropTypes.func.isRequired,
  setCannotProcess: PropTypes.func.isRequired,
};

export default ErrorPage;
