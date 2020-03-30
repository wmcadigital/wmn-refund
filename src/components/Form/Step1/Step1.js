import React from 'react';
import Radio from 'components/shared/FormElements/Radio/Radio';

const Step1 = () => {
  return (
    <>
      <h2>About your ticket</h2>
      <div className="wmnds-fe-group">
        <fieldset className="wmnds-fe-fieldset">
          <legend className="wmnds-fe-fieldset__legend">
            <h3 className="wmnds-fe-question">Which best describes your ticket?</h3>
          </legend>
          <div className="wmnds-fe-radios">
            <Radio name="CustomerType" text="Swift card" value="SwiftCard" />
            <Radio name="CustomerType" text="Paper ticket" value="SwiftCard" />
            <Radio name="CustomerType" text="Swift on Mobile app" value="SwiftPortal" />
            <Radio name="CustomerType" text="Scratchcard" value="Scratchcard" />
            <Radio name="CustomerType" text="Class pass" value="ClassPass" />
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default Step1;
