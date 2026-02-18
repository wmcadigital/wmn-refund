import React from 'react';
import Title from 'components/shared/Title/Title';

const ErrorPage = () => {
  return (
    <>
      <Title />
      <div className="wmnds-col-1 wmnds-col-md-3-4 wmnds-col-lg-1-2">
        {/* Error message */}
        <h3>Sorry, there is a problem with this service</h3>

        <p>Try again later.</p>

        <p>
          We have not saved your answers. When the service is available, you
          will have to start again.
        </p>

        <p>
          Contact the{' '}
          <a
            href="https://www.tfwm.org.uk/get-help/contact-us/"
            title="Contact us - Transport for West Midlands"
            target="_self"
            className="wmnds-link"
          >
            Customer Services team
          </a>{' '}
          if you continue to have problems.
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
