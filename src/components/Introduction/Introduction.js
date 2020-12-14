import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/shared/Icon/Icon';
import Title from 'components/shared/Title/Title';
import dateValidationHelpers from 'components/shared/FormElements/Date/dateValidationHelpers';
// import WarningText from 'components/shared/WarningText/WarningText';

const Introduction = ({ setIsFormStarted, setCannotProcess }) => {
  const handleClick = () => {
    setIsFormStarted(true);
    window.scrollTo(0, 0);
  };

  const { getDateFormatted, getDaysFromNow } = dateValidationHelpers;
  // const warningMessage = (
  //   <p>
  //     You can only get a refund using this service if you paid for your ticket
  //     by Direct Debit
  //   </p>
  // );

  return (
    <>
      <Title />
      <div className="wmnds-col-1 wmnds-col-md-3-4 wmnds-col-lg-1-2">
        <h2>Use this service to:</h2>
        <ul>
          <li>Cancel your Direct Debit for your travel pass</li>
        </ul>
        <p>This process takes around 5 minutes.</p>
        {/* <WarningText type="warning" message={warningMessage} /> */}
        <h2>Before you start</h2>
        <ul>
          <li>You will need your Swift card or paper ticket</li>
          <li>
            If the long number on your Swift card begins with 633597{' '}
            <strong>0112</strong>, it is managed by{' '}
            <a
              href="https://nxbus.co.uk/"
              title="Request a refund for a National Express Swift card"
              target="_blank"
              className="wmnds-link"
              rel="noopener noreferrer"
            >
              National Express West Midlands
            </a>
          </li>
          <li>
            You will need your Direct Debit reference number. This begins with{' '}
            <strong>6</strong> and is shown next to every payment to WMCA on
            your bank statement
          </li>
          <li>
            You can only cancel your Direct Debit online if you stop using your
            travel pass between: {getDateFormatted(getDaysFromNow(-28))} and{' '}
            {getDateFormatted(getDaysFromNow(28))}
          </li>
          <li>
            You’ll need to{' '}
            <button
              type="button"
              className="wmnds-btn wmnds-btn--link"
              onClick={() => {
                setIsFormStarted(true);
                setCannotProcess(true);
              }}
            >
              call us
            </button>{' '}
            if you stopped using your travel pass before
            {getDateFormatted(getDaysFromNow(-28))}
          </li>
        </ul>
        <br />
        <h3>Direct Debit refunds</h3>
        <p>
          If you cancel your Direct Debit before your next payment date, you may
          be entitled to a refund for any days left.
        </p>
        <p>
          We’ll work this out and send the refund to your original payment
          method within 28 days.
        </p>
        <br />
        <br />
        <button
          type="button"
          className="wmnds-btn wmnds-btn--start"
          onClick={handleClick}
        >
          Start now
          <Icon
            className="wmnds-btn__icon wmnds-btn__icon--right"
            iconName="general-chevron-right"
          />
        </button>
      </div>
    </>
  );
};

Introduction.propTypes = {
  setIsFormStarted: PropTypes.func.isRequired,
  setCannotProcess: PropTypes.func.isRequired,
};

export default Introduction;
