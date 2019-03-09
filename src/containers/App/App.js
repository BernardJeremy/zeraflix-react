import React from 'react';

import AppRouter from './AppRouter';
import LogoHeader from '../LogoHeader/LogoHeader';
import ChannelInput from '../ChannelInput/ChannelInput';

const App = () => (
  <div>
    <div className="sidebar">
      <LogoHeader />
      <ChannelInput />
    </div>
    <AppRouter />
  </div>
);

export default App;
