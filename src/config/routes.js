import { Route, Switch, Router } from "react-router-dom";

import { history } from "../config/routeAtlas";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const DefaultRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};

export default DefaultRoutes;
