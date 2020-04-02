import React from 'react';
import Icon from 'components/shared/Icon/Icon';

const ErrorPage = () => {
  return (
    <div className="wmnds-col-1 wmnds-col-md-1-2 ">
      {/* Error message */}
      <div className="wmnds-msg-summary wmnds-msg-summary--error">
        <div className="wmnds-msg-summary__header">
          <Icon
            iconName="general-warning-triangle"
            className="wmnds-msg-summary__icon"
          />
          <h3 className="wmnds-msg-summary__title">
            Looks like something went wrong
          </h3>
        </div>

        <div className="wmnds-msg-summary__info">
          Details added what happened and what to do next. Lorem ipsum lorem
          ipsum. Lorem ipsum lorem ipsum.
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
