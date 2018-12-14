import React from 'react';
import { Router as ReachRouter } from '@reach/router';

import Home from './views/Home';
import Clusters from './views/Clusters';

const Router = () => (
  <ReachRouter>
    <Home path="/" />
    <Clusters path="/clusters" />
  </ReachRouter>
)

export default Router;
