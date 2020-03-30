import React from 'react';
import Radio from 'components/shared/FormElements/Radio/Radio';

const Step2 = () => {
  return (
    <>
      <h2>Tell us about your ticket</h2>
      <div className="wmnds-fe-group">
        <fieldset className="wmnds-fe-fieldset">
          <legend className="wmnds-fe-fieldset__legend">
            <h3 className="wmnds-fe-question">How did you buy your ticket?</h3>
          </legend>
          <div className="wmnds-fe-radios">
            <Radio name="CustomerType" text="I pay monthly by Direct Debit" value="DirectDebit" />
            <Radio
              name="CustomerType"
              text="I bought it from the West Midlands Network or Swift website"
              value="SwiftPortal"
            />
            <Radio name="CustomerType" text="I pay for it through my company" value="Corporate" />
            <Radio name="CustomerType" text="I am on the Workwise scheme" value="Workwise" />
            <Radio
              name="CustomerType"
              text="I bought it from a Swift ticket machine"
              value="SwiftPortal"
            />
            <Radio
              name="CustomerType"
              text="I bought it from a ticket office, West Midlands Network travel shop or Payzone shop"
              value="Shop"
            />
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default Step2;
