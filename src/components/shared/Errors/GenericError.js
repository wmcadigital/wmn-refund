import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import dompurify from 'dompurify';
import Icon from '../Icon/Icon';
import style from './GenericError.module.scss';

const { sanitize } = dompurify;

const GenericError = ({ errors }) => {
  // scroll error field to center of view
  const scrollToError = (ref) => {
    ref.parentNode.scrollIntoView({
      block: 'center',
    });
  };

  return (
    <div className="wmnds-msg-summary wmnds-msg-summary--error wmnds-m-b-lg">
      <div className="wmnds-msg-summary__header">
        <Icon
          iconName="general-warning-triangle"
          className="wmnds-msg-summary__icon"
        />
        <h3 className="wmnds-msg-summary__title">
          {Object.keys(errors).length > 1
            ? 'There are problems'
            : 'There is a problem'}
        </h3>
      </div>

      <div className="wmnds-msg-summary__info">
        {Object.keys(errors).map((errorName) => {
          return (
            <div key={errorName}>
              <button
                className={`${style.errorLink} wmnds-btn wmnds-btn--link`}
                type="button"
                onClick={() => scrollToError(errors[errorName].ref)}
                dangerouslySetInnerHTML={{
                  __html: sanitize(
                    ReactDOMServer.renderToStaticMarkup(
                      errors[errorName].message
                    ),
                    { ALLOWED_TAGS: ['br'], KEEP_CONTENT: true }
                  ),
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

GenericError.propTypes = {
  errors: PropTypes.shape({
    message: PropTypes.string,
    ref: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
    type: PropTypes.string,
  }).isRequired,
};

export default GenericError;
