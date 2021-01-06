import React from 'react';
import PropTypes from 'prop-types';

function ContactDetails({ socialMedia }) {
  return (
    <div className="wmnds-inset-text">
      <p>Transport for West Midlands</p>
      {socialMedia && (
        <p>
          <a href="https://twitter.com/wmnetwork">Twitter</a>
          <br />
          <a href="https://www.facebook.com/westmidlandsnetwork">Facebook</a>
          <br />
        </p>
      )}
      <p>
        Telephone:{' '}
        <a href="tel:03453036760">
          0345 303 6760
          <br />
        </a>
      </p>
      Monday to Tuesday and Thursday to Friday, 9am - 6pm, <br />
      Wednesday, 10am - 6pm,
      <br />
      Saturday, 9am - 1pm,
      <br />
      Sunday, closed
    </div>
  );
}

ContactDetails.propTypes = {
  socialMedia: PropTypes.bool,
};
ContactDetails.defaultProps = {
  socialMedia: false,
};

export default ContactDetails;
