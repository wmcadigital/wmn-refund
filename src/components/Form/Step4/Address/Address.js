import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const Address = () => {
  const [, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext

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
        onChange={(e) =>
          formDispatch({
            type: 'UPDATE_FORM_DATA',
            payload: { AddressLine1: e.target.value },
          })
        }
      />
      <Input
        className="wmnds-col-1-2 wmnds-col-sm-2-3"
        name="AddressLine2"
        autocomplete="address-line2"
        onChange={(e) =>
          formDispatch({
            type: 'UPDATE_FORM_DATA',
            payload: { AddressLine2: e.target.value },
          })
        }
      />

      {/* Town/City and County */}
      <Input
        className="wmnds-col-1 wmnds-col-sm-1-2"
        name="AddressTown"
        label="Town or city"
        autocomplete="address-level2"
        onChange={(e) =>
          formDispatch({
            type: 'UPDATE_FORM_DATA',
            payload: { AddressTown: e.target.value },
          })
        }
      />
      <Input
        className="wmnds-col-1 wmnds-col-sm-1-2"
        name="AddressLine3"
        label="County"
        autocomplete="address-county"
        onChange={(e) =>
          formDispatch({
            type: 'UPDATE_FORM_DATA',
            payload: { AddressLine3: e.target.value },
          })
        }
      />

      {/* Postcode */}
      <Input
        name="AddressPostcode"
        label="Postcode"
        className="wmnds-col-1-2 wmnds-col-sm-1-4"
        autocomplete="postal-code"
        onChange={(e) =>
          formDispatch({
            type: 'UPDATE_FORM_DATA',
            payload: { AddressPostcode: e.target.value },
          })
        }
      />
    </fieldset>
  );
};

export default Address;
