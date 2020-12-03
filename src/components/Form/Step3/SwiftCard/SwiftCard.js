import React from 'react';
// Import contexts
import { useFormContext } from 'react-hook-form';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const SwiftCard = () => {
  const label = 'Swift card number';

  const { register } = useFormContext(); // Custom hook for handling continue button (validation, errors etc)

  const removeSpaces = (str) => str.replace(/\s+/g, '');

  const swiftCardValidation = register({
    required: `Enter a valid ${label}`,
    pattern: {
      value: /^(0|[1-9][0-9 ]*)$/,
      message: `${label} must only include numbers`,
    },
    validate: {
      // ensure first 10 digits don't match 6335970112 NXCard
      nxCard: (value) =>
        removeSpaces(value).substr(0, 10) !== '6335970112' ||
        `${label} is managed by National Express West Midlands and there is a
      <a
        href="https://nxbus.co.uk/west-midlands/news/ticket-refunds-due-to-covid19"
        title="National Express West Midlands ticket refund process"
        target="_blank"
        className="wmnds-link"
      >
        separate refund process
      </a>`,
      // ensure first 10 digits match 6335970107 or 6335970319
      firstTenValid: (value) =>
        removeSpaces(value).substr(0, 10) === '6335970107' ||
        removeSpaces(value).substr(0, 10) === '6335970319' ||
        `Your ${label} is the long number on the front of the card`,
      // ensure number is 18 digits long
      checkLength: (value) =>
        removeSpaces(value).length === 18 ||
        `Your ${label} is 18 digits long and begins with 633597`,
    },
  });

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h2 className="wmnds-fe-question">What is your Swift card number?</h2>
        <p>
          This is the long number on the front of the card and begins with{' '}
          <strong>633597</strong>
        </p>
      </legend>
      <Input
        className="wmnds-col-1 wmnds-col-sm-3-4 wmnds-col-md-1-2"
        name="CardNumber"
        mask="999999 9999 9999 9999"
        label={label}
        inputmode="numeric"
        fieldValidation={swiftCardValidation}
      />
    </fieldset>
  );
};

export default SwiftCard;
