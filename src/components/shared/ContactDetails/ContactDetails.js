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
      Monday to Tuesday and Thursday to Friday, 9am - 5pm, <br />
      Wednesday, 9.30am - 5pm
      <br />
      Saturday and Sunday, closed
    </div>
  );
}

ContactDetails.propTypes = {
  socialMedia: PropTypes.bool,
  telephone: PropTypes.string,
};

export default ContactDetails;
