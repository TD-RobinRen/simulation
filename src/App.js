import { Router } from 'react-router-dom';

import { listenToAtlasPathChange, listenToUsersPathChange, history } from './config/routeAtlas';
import './App.less';

import Routes from './config/routes';

listenToAtlasPathChange();
listenToUsersPathChange();

export default function App() {
  return (
    <RootContainer />
  );
}

function RootContainer() {
  return (
    <div className="root-container">
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}