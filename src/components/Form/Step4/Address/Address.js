import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const Address = () => {
  const [, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext

  return (
    <div className="wmnds-fe-group">
      <fieldset className="wmnds-fe-fieldset">
        <legend className="wmnds-fe-fieldset__legend">
          <h3 className="wmnds-fe-question">What is your home address?</h3>
        </legend>
        <div className="wmnds-col-1-2 wmnds-col-sm-2-3">
          <Input
            name="AddressLine1"
            label="Building and street"
            className="wmnds-m-b-sm"
            onChange={(e) =>
              formDispatch({
                type: 'UPDATE_FORM_DATA',
                payload: { AddressLine1: e.target.value },
              })
            }
          />
          <Input
            name="AddressLine2"
            onChange={(e) =>
              formDispatch({
                type: 'UPDATE_FORM_DATA',
                payload: { AddressLine2: e.target.value },
              })
            }
          />
        </div>
        <div className="wmnds-col-1 wmnds-col-sm-1-2">
          <Input
            name="AddressTown"
            label="Town or city"
            onChange={(e) =>
              formDispatch({
                type: 'UPDATE_FORM_DATA',
                payload: { AddressTown: e.target.value },
              })
            }
          />
          <Input
            name="AddressLine3"
            label="County"
            onChange={(e) =>
              formDispatch({
                type: 'UPDATE_FORM_DATA',
                payload: { AddressLine3: e.target.value },
              })
            }
          />
        </div>
        <div className="wmnds-col-1 wmnds-col-sm-1-2">
          <Input
            name="AddressPostcode"
            label="Postcode"
            onChange={(e) =>
              formDispatch({
                type: 'UPDATE_FORM_DATA',
                payload: { AddressPostcode: e.target.value },
              })
            }
          />
        </div>
      </fieldset>
    </div>
  );
};

export default Address;
