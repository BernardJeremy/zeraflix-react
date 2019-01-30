import React from 'react';
import PropTypes from 'prop-types';

const VerticalLogoHeader = (props) => (
  <img src={props.logoSrc} alt={props.logoAltText} />
);

VerticalLogoHeader.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  logoAltText: PropTypes.string.isRequired,
};

export default VerticalLogoHeader; 