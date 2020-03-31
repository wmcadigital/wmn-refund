import React from 'react';
import Icon from 'components/shared/Icon/Icon';

const UploadTicket = () => {
  return (
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
        <button type="button" className="wmnds-btn wmnds-btn--primary">
          Upload photo
          <Icon
            iconName="general-paperclip"
            className="wmnds-btn__icon wmnds-btn__icon--right"
          />
        </button>
      </fieldset>
    </div>
  );
};

export default UploadTicket;
