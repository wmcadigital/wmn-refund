import React from 'react';

// Import components
import Input from 'components/shared/FormElements/Input/Input';

const Address = () => {
  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h3 className="wmnds-fe-question">What is your home address?</h3>
      </legend>
      {/* Building and street */}
      <Input
        className="wmnds-col-1-2 wmnds-col-sm-2-3"
        name="AddressLine1"
        label="Building and street"
        autocomplete="address-line1"
      />
      <Input
        className="wmnds-col-1-2 wmnds-col-sm-2-3"
        name="AddressLine2"
        label="Address line 2"
        autocomplete="address-line2"
      />

      {/* Town/City and County */}
      <Input
        className="wmnds-col-1 wmnds-col-sm-1-2"
        name="AddressTown"
        label="Town or city"
        autocomplete="address-level2"
      />
      <Input
        className="wmnds-col-1 wmnds-col-sm-1-2"
        name="AddressLine3"
        label="County"
        autocomplete="address-county"
      />

      {/* Postcode */}
      <Input
        name="AddressPostcode"
        label="Postcode"
        className="wmnds-col-1-2 wmnds-col-sm-1-4"
        autocomplete="postal-code"
      />
    </fieldset>
  );
};

export default Address;
