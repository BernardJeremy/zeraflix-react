import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => (
  <footer>
    <div className="clearFloat"></div>
    <div className="copy">
      <p>&copy; {props.appLabel} - All Rights Reserved</p>
    </div>
  </footer>
);

Footer.propTypes = {
  appLabel: PropTypes.string.isRequired,
};

export default Footer; 
