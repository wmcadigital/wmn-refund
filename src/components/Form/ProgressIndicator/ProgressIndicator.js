import React from 'react';
import Icon from 'components/shared/Icon/Icon';

const ProgressIndicator = () => {
  return (
    <ul className="wmnds-progress-indicator wmnds-grid wmnds-grid--justify-between">
      <li className="wmnds-col-1 wmnds-col-md-1-5">
        <div className="wmnds-progress-indicator__item wmnds-progress-indicator__item--success">
          <Icon className="wmnds-progress-indicator__icon" iconName="general-success" />
          <span className="wmnds-progress-indicator__title">#1 Completed step</span>
        </div>
      </li>
    </ul>
  );
};

export default ProgressIndicator;
