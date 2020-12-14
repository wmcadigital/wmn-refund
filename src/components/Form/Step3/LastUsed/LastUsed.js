import React from 'react';
// Import contexts
import { useFormContext } from 'react-hook-form';
// Import components
import DateInput from 'components/shared/FormElements/Date/Date';
// Import helper functions
import dateValidationHelpers from 'components/shared/FormElements/Date/dateValidationHelpers';

const LastUsed = () => {
  const { register } = useFormContext(); // Custom hook for handling continue button (validation, errors etc)

  const {
    dateRegex,
    daysFromNow,
    getDaysFromNow,
    getDateFormatted,
  } = dateValidationHelpers;

  const dateValidation = register({
    required: 'Enter last used date',
    pattern: {
      value: dateRegex,
      message:
        'Enter last used date in the correct format, for example 18 03 2020',
    },
    validate: {
      lastUsed: (value) =>
        value >= '2020-03-16' ||
        'We can only issue refunds from the 16 March 2020. If you stopped travelling before this date, please still use 16 March 2020.',
      daysFromNow: (value) =>
        (daysFromNow(value, 28) && daysFromNow(value, -28)) ||
        `Date must be after ${getDateFormatted(
          getDaysFromNow(-28)
        )} and before ${getDateFormatted(getDaysFromNow(28))}`,
    },
  });

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h2 className="wmnds-fe-question">
          When did you last use your ticket to travel?
        </h2>
        <p>
          We’ll use this date to work out when we need to cancel your ticket and
          if you’re entitled for a refund.
        </p>
        <p>
          The date can be between{' '}
          <strong>{getDateFormatted(getDaysFromNow(-28), false)}</strong> and{' '}
          <strong>{getDateFormatted(getDaysFromNow(28), false)}</strong>. We’ll
          check this against your journey history.
        </p>
        <p>
          For example,{' '}
          {`${getDaysFromNow(0).split('-')[2]} ${
            getDaysFromNow(0).split('-')[1]
          } ${getDaysFromNow(0).split('-')[0]}`}
        </p>
      </legend>
      <DateInput
        name="LastUsedDate"
        label="Last used date"
        fieldValidation={dateValidation}
      />
    </fieldset>
  );
};

export default LastUsed;
