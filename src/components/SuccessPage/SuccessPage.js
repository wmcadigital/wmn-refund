import React from 'react';
import Icon from 'components/shared/Icon/Icon';

const SuccessPage = () => {
  return (
    <div className="wmnds-col-1 wmnds-col-md-3-4">
      {/* Success message */}
      <div className="wmnds-msg-summary wmnds-msg-summary--success-fill">
        <div className="wmnds-msg-summary__header">
          <Icon
            iconName="general-success"
            className="wmnds-msg-summary__icon"
          />
          <h3 className="wmnds-msg-summary__title">Application complete</h3>
        </div>

        <div className="wmnds-msg-summary__info">
          Your reference number is 12345
        </div>
      </div>

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

      <p>What did you think of this service? (takes 30 seconds)</p>
    </div>
  );
};

export default SuccessPage;
