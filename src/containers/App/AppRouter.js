import React from 'react';
import { Switch, Route } from 'react-router-dom';

import VideosList from '../VideosList/VideosList';

const AppRouter = () => (
  <Switch>
    <Route path="*" exact component={VideosList} />
  </Switch>
);

export default AppRouter;