import { Route, Switch, Router } from 'react-router-dom';

import { history } from '../config/routeAtlas';

import Home from '../pages/Home'

const DefaultRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={Home} />
      </Switch>
    </Router>
  );
};

export default DefaultRoutes;
