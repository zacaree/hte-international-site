
import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({ location }) => (
  <div className="pageWrap">
    <section>
      <div className="wrap">
        <h3>404: No page found for <code>{location.pathname}</code></h3>
      </div>
    </section>
  </div>
);

export default NotFound;

NotFound.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
