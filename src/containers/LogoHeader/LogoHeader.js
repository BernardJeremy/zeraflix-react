import React from 'react';

import VerticalLogoHeader from '../../components/VerticalLogoHeader/VerticalLogoHeader';
import LogoImg from '../../images/zera-logo.png';

const LogoHeader = () => (
  <div className="sidebar">
    <header>
      <div className="logo">
        <VerticalLogoHeader logoSrc={LogoImg} logoAltText="Zeraflix" />
      </div>
      <div className="clearFloat"></div>
    </header>
  </div>
);

export default LogoHeader; 