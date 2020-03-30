import React from 'react';
import Radio from 'components/shared/FormElements/Radio/Radio';

// eslint-disable-next-line react/prop-types
const Step1 = ({ formData, setFormData }) => {
  console.log(formData);

  return (
    <>
      <h2>About your ticket</h2>
      <div className="wmnds-fe-group">
        <fieldset className="wmnds-fe-fieldset">
          <legend className="wmnds-fe-fieldset__legend">
            <h3 className="wmnds-fe-question">Which best describes your ticket?</h3>
          </legend>
          <div className="wmnds-fe-radios">
            <Radio
              name="CustomerType"
              text="Swift card"
              value="SwiftPortal"
              onChange={(e) => setFormData({ customerType: e.target.value })}
            />
            <Radio
              name="CustomerType"
              text="Paper ticket"
              value="SwiftCard"
              onChange={(e) => setFormData({ customerType: e.target.value })}
            />
            <Radio
              name="CustomerType"
              text="Swift on Mobile app"
              value="SwiftPortal"
              onChange={(e) => setFormData({ customerType: e.target.value })}
            />
            <Radio
              name="CustomerType"
              text="Scratchcard"
              value="Scratchcard"
              onChange={(e) => setFormData({ customerType: e.target.value })}
            />
            <Radio
              name="CustomerType"
              text="Class pass"
              value="ClassPass"
              onChange={(e) => setFormData({ customerType: e.target.value })}
            />
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default Step1;
