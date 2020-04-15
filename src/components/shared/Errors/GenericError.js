import React from 'react';

const GenericError = () => {
  return (
    <div className="wmnds-msg-summary wmnds-msg-summary--error wmnds-m-b-lg">
      <div className="wmnds-msg-summary__header">
        <svg className="wmnds-msg-summary__icon">
          <use
            xlinkHref="#wmnds-general-warning-triangle"
            href="#wmnds-general-warning-triangle"
          />
        </svg>
        <h3 className="wmnds-msg-summary__title">There is a problem</h3>
      </div>

      <div className="wmnds-msg-summary__info">
        Please check your answers again.
      </div>
    </div>
  );
};

export default GenericError;
