import React from 'react';
import { useFormContext } from 'react-hook-form';
// Import components
import DateInput from 'components/shared/FormElements/Date/Date';
// Import helper functions
import dateValidationHelpers from 'components/shared/FormElements/Date/dateValidationHelpers';

const getNextWorkingDay = (dateValue) => {
  const date = new Date(`${dateValue}T00:00:00Z`);

  while (date.getUTCDay() === 0 || date.getUTCDay() === 6) {
    date.setUTCDate(date.getUTCDate() + 1);
  }

  return date.toISOString().slice(0, 10);
};

const DirectDebitEnd = () => {
  const { register } = useFormContext();
  const { dateRegex, getDaysFromNow, getDateFormatted } = dateValidationHelpers;
  const minimumWorkingDay = getNextWorkingDay(getDaysFromNow(28));

  const dateValidation = register({
    required: 'Enter last used date',
    pattern: {
      value: dateRegex,
      message: 'Enter date in the correct format, for example 18 3 2020',
    },
    validate: {
      directDebitEnd: (value) =>
        value >= '2020-03-16' ||
        'We can only issue refunds from the 16 March 2020. If you stopped travelling before this date, please still use 16 March 2020.',
      minimumDate: (value) =>
        value >= minimumWorkingDay || (
          <>
            The date must be on or after {getDateFormatted(minimumWorkingDay)}.
          </>
        ),
      workingDay: (value) => {
        const dayOfWeek = new Date(`${value}T00:00:00Z`).getUTCDay();

        return (
          (dayOfWeek > 0 && dayOfWeek < 6) ||
          'Choose a working day, Monday to Friday.'
        );
      },
    },
  });

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h2 className="wmnds-fe-question">
          When would you like your Direct Debit to end?
        </h2>
        <p>
          The earliest available cancellation date is{' '}
          <strong>4 weeks from the date you submit this request</strong>.
        </p>
        <p>
          For example,{' '}
          {minimumWorkingDay
            .split('-')
            .reverse()
            .map((datePart) => Number(datePart))
            .join(' ')}
        </p>
      </legend>
      <DateInput
        name="DirectDebitEndDate"
        label="Last used date"
        fieldValidation={dateValidation}
      />
    </fieldset>
  );
};

export default DirectDebitEnd;
