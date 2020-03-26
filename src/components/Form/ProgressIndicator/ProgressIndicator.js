import React from 'react';
import PropTypes from 'prop-types';
import ProgressIndicatorStep from './ProgressIndicatorStep/ProgressIndicatorStep';

const ProgressIndicator = ({ currentStep }) => {
  return (
    <ul className="wmnds-progress-indicator wmnds-grid wmnds-grid--justify-between">
      <ProgressIndicatorStep title="Ticket type" stepNumber={1} currentStep={currentStep} />
      <ProgressIndicatorStep title="Payment" stepNumber={2} currentStep={currentStep} />
      <ProgressIndicatorStep title="Ticket details" stepNumber={3} currentStep={currentStep} />
      <ProgressIndicatorStep title="Personal details" stepNumber={4} currentStep={currentStep} />
    </ul>
  );
};

ProgressIndicator.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default ProgressIndicator;
