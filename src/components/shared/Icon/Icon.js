import React from 'react';
import PropTypes from 'prop-types';
import svgSprite from 'assets/icons/wmnds-svg-sprite.min.svg';

const Icon = ({ className, iconName }) => {
  return (
    <svg className={className}>
      <use xlinkHref={`${svgSprite}#wmnds-${iconName}`} href={`${svgSprite}#wmnds-${iconName}`} />
    </svg>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: null,
};

export default Icon;
