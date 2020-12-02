import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// Context
import { FormDataContext } from 'globalState/FormDataContext';
// Style
import style from './Step5Confirm.module.scss';

const ChangeLink = ({ changeStepTo }) => {
  const [, formDataDispatch] = useContext(FormDataContext);
  const setStepInContext = (st) => {
    formDataDispatch({
      type: 'UPDATE_STEP',
      payload: st,
    });
  };

  return (
    <button
      type="button"
      className={`${style.asLink} wmnds-link`}
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
