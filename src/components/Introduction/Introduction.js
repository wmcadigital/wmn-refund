import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/shared/Icon/Icon';
import Title from 'components/shared/Title/Title';
import WarningText from 'components/shared/WarningText/WarningText';

const Introduction = ({ setIsFormStarted }) => {
  const handleClick = () => {
    setIsFormStarted(true);
  };

  const warningMessage = (
    <p>
      You can only get a refund using this service if you paid for your ticket
      by Direct Debit
    </p>
  );

  return (
    <>
      <Title />
      <div className="wmnds-col-1 wmnds-col-md-3-4 wmnds-col-lg-1-2">
        <h2>Use this service to:</h2>
        <ul>
          <li>
            Get a refund of your Swift card or paper ticket if you pay by Direct
            Debit
          </li>
        </ul>
        <p>This process takes around 5 minutes.</p>
        <WarningText type="warning" message={warningMessage} />
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
        </ul>
        <br />
        <p>
          There is guidance available to show{' '}
          <a
            href="https://wmnetwork.co.uk/coronavirus/"
            title="How we will work out your refund"
            target="_self"
            className="wmnds-link"
          >
            how we will work out your refund
          </a>
          .
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
};

export default Introduction;
