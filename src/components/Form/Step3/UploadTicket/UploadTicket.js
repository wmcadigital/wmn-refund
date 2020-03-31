import React from 'react';
import Icon from 'components/shared/Icon/Icon';

const UploadTicket = () => {
  const handleFileSelected = (e) => {
    console.log(e);
  };

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
        {/* <button type="button">
          Upload photo

        </button> */}
        <label htmlFor="file" className="wmnds-btn wmnds-btn--primary">
          Upload photo
          <Icon
            className="wmnds-btn__icon wmnds-btn__icon--right"
            iconName="general-paperclip"
          />
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => handleFileSelected(e.target.files[0])}
            hidden
          />
        </label>
      </fieldset>
    </div>
  );
};

export default UploadTicket;
