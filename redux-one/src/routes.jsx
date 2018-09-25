// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home/Home';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </App>
);

export default AppRoutes;
