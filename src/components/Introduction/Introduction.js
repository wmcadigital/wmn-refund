import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/shared/Icon/Icon';
import Title from 'components/shared/Title/Title';

const Introduction = ({ setIsFormStarted }) => {
  return (
    <>
      <Title />
      <div className="wmnds-col-1 wmnds-col-md-3-4 wmnds-col-lg-1-2">
        <p>Use this service to:</p>
        <ul>
          <li>
            Apply for a refund of your Swift card, paper or Swift on Mobile
            ticket if you have been unable to travel due to the Coronavirus outbreak
          </li>
          <li>
            Let us know that you would like to exchange your class pass or scratchcards
          </li>
        </ul>
        <p>This process takes around 5 minutes.</p>
        <p>
          <strong>Before you start</strong>
        </p>
        <p>
          If you have a Swift card, you will need the long number on the front
          of the card.
        </p>
        <p>
          If the long number begins with <strong>633 597 0112</strong>, it is
          managed by National Express West Midlands and there is a{' '}
          <a
            href="https://nxbus.co.uk/west-midlands/news/ticket-refunds-due-to-covid19"
            title="National Express West Midlands ticket refund application"
            target="_self"
            className="wmnds-link"
          >
            separate refund application
          </a>
          .
        </p>
        <p>
          If you pay by Direct Debit, you will need your direct debit reference
          number. This begins with <strong>6</strong> and is shown next to every
          payment to WMCA on your bank statement.
        </p>
        <p>
          If you have a Swift on Mobile ticket, you will need the long number from your ticket in Google Pay. This is also referred to as the ISRN.
        </p>
        <p>If you have a paper ticket, you will need this ticket as proof.</p>

        <button
          type="button"
          className="wmnds-btn wmnds-btn--start"
          onClick={() => setIsFormStarted(true)}
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
