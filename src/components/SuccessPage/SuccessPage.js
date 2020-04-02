import React from 'react';
import Icon from 'components/shared/Icon/Icon';

const SuccessPage = () => {
  return (
    <div className="wmnds-col-1 wmnds-col-md-1-2 ">
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
          Your reference number is <strong>12345</strong>
        </div>
      </div>

      {/* Success copy */}
      <p>We have sent you a confirmation email.</p>

      <h3>What happens next</h3>

      <p>
        Unfortunately, due to logistics, we are unable to process applications
        for scratchcards and class passes remotely.
      </p>
      <p>
        As soon as the Government advises it is okay to return to the office, we
        will process your application as a priority.
      </p>

      <p>
        <a
          href="https://surveys.hotjar.com/s?siteId=264586&surveyId=154279"
          title="link title"
          target="_blank"
          rel="noopener noreferrer"
          className="wmnds-link"
        >
          What did you think of this service?
        </a>{' '}
        (takes 30 seconds)
      </p>
    </div>
  );
};

export default SuccessPage;
