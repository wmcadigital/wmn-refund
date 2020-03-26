import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/shared/Icon/Icon';

const ProgressIndicator = ({ currentStep }) => {
  return (
    <ul className="wmnds-progress-indicator wmnds-grid wmnds-grid--justify-between">
      <li className="wmnds-col-1 wmnds-col-md-1-5">
        <div className="wmnds-progress-indicator__item wmnds-progress-indicator__item--success">
          <Icon className="wmnds-progress-indicator__icon" iconName="general-success" />
          <span className="wmnds-progress-indicator__title">Ticket type</span>
        </div>
      </li>
      <li className="wmnds-col-1 wmnds-col-md-1-5">
        <div className="wmnds-progress-indicator__item wmnds-progress-indicator__item--success">
          <Icon className="wmnds-progress-indicator__icon" iconName="general-success" />
          <span className="wmnds-progress-indicator__title">Payment</span>
        </div>
      </li>
      <li className="wmnds-col-1 wmnds-col-md-1-5">
        <div className="wmnds-progress-indicator__item wmnds-progress-indicator__item--success">
          <Icon className="wmnds-progress-indicator__icon" iconName="general-success" />
          <span className="wmnds-progress-indicator__title">Ticket details</span>
        </div>
      </li>
      <li className="wmnds-col-1 wmnds-col-md-1-5">
        <div className="wmnds-progress-indicator__item">
          <Icon className="wmnds-progress-indicator__icon" iconName="general-circle-hollow" />
          <span className="wmnds-progress-indicator__title">Personal details</span>
        </div>
      </li>
    </ul>
  );
};

ProgressIndicator.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default ProgressIndicator;
