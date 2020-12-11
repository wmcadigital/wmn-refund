import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// Context
import { FormDataContext } from 'globalState/FormDataContext';
// Style

const ChangeLink = ({ changeStepTo }) => {
  const [, formDataDispatch] = useContext(FormDataContext);
  const setStepInContext = (st) => {
    formDataDispatch({
      type: 'UPDATE_STEP',
      payload: st,
    });
    window.scrollTo(0, 0);
  };

  return (
    <button
      type="button"
      className="wmnds-btn wmnds-btn--link"
      onClick={() => setStepInContext(changeStepTo)}
    >
      Change
    </button>
  );
};

ChangeLink.defaultProps = {
  changeStepTo: null,
};

ChangeLink.propTypes = {
  changeStepTo: PropTypes.number,
};

export default ChangeLink;
