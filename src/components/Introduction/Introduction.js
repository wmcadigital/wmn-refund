import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/shared/Icon/Icon';
import Title from 'components/shared/Title/Title';
// import WarningText from 'components/shared/WarningText/WarningText';

const Introduction = ({ setIsFormStarted }) => {
  const handleClick = () => {
    setIsFormStarted({
      isOnFrontPage: false,
      isStarted: true,
    });
    window.scrollTo(0, 0);
  };
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
        <p>
          Use this service to cancel the Direct Debit for your travel pass. It
          takes around 5 minutes.
        </p>
        <h2>Check who manages your Swift card</h2>
        <p>
          If the long number on your Swift card begins with 633597{' '}
          <strong>0112</strong>, your card is managed by{' '}
          <a
            className="wmnds-link"
            href="https://nxbus.co.uk/west-midlands"
            target="_blank"
            title="National Express West Midlands"
            rel="noopener noreferrer"
          >
            National Express West Midlands
          </a>
          . Please contact them directly to cancel.
        </p>
        <h2>Notice period</h2>
        <p>
          You must give us at least 4 weeks&apos; notice before you leave the
          Direct Debit scheme. This is part of the terms you agreed to when you
          joined:
        </p>
        <ul>
          <li>
            <a
              className="wmnds-link"
              href="https://www.tfwm.org.uk/terms-and-conditions/adult-direct-debit/"
              target="_blank"
              title="Terms and conditions for adult Direct Debits"
              rel="noopener noreferrer"
            >
              Terms and conditions for adult Direct Debits
            </a>
          </li>
          <li>
            <a
              className="wmnds-link"
              href="https://www.tfwm.org.uk/terms-and-conditions/child-direct-debit/"
              target="_blank"
              title="Terms and conditions for child Direct Debits"
              rel="noopener noreferrer"
            >
              Terms and conditions for child Direct Debits
            </a>
          </li>
        </ul>
        <p>
          <h3>This means:</h3>
        </p>
        <ul>
          <li>
            the earliest cancellation date you can choose is 4 weeks from the
            day you submit your request
          </li>
          <li>
            you can&apos;t choose a date in the past or one that gives us less
            than 4 weeks&apos; notice
          </li>
          <li>
            cancelling your Direct Debit does not automatically entitle you to a
            refund
          </li>
          <li>you can rejoin one month after your last payment</li>
        </ul>
        <p>
          If you joined less than 3 months ago, you may not be able to cancel
          until your minimum term has ended.
        </p>
        <p>
          If you have a child Direct Debit and cancel before making 10 payments,
          you will not receieve your last two tickets free.
        </p>
        <h2>Before you start</h2>
        <h3>You&apos;ll need:</h3>
        <ul>
          <li>your Swift card or paper ticket</li>
          <li>
            your Direct Debit reference number, which begins with 6 and appears
            next to every payment to WMCA on your bank statement
          </li>
        </ul>
        <h2>If you need extra help</h2>
        <p>
          If you have a long-term sickness or another exceptional
          circumstance,&nbsp;
          <a
            className="wmnds-link"
            href="https://www.tfwm.org.uk/get-help/contact-us/"
            target="_blank"
            title="Contact customer services"
            rel="noopener noreferrer"
          >
            contact Customer Services
          </a>
          . We&apos;ll review your request separately under the terms of your
          Direct Debit and you may need to provide a doctor&apos;s or hospital
          note.
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
