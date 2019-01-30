import React from 'react';
import { Switch, Route } from 'react-router-dom';

import VideosList from '../VideosList/VideosList';

const AppRouter = () => (
  <Switch>
    <Route path="*" exact render={() => <VideosList twitchChannel='zerator' />} />
  </Switch>
);

export default AppRouter;