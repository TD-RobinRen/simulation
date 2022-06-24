import { Router } from 'react-router-dom';
import ViewportProvider from '@cobalt/react-viewport-provider';

import { listenToAtlasPathChange, listenToUsersPathChange, history } from './config/routeAtlas';
import './App.less';

import Routes from './config/routes';

listenToAtlasPathChange();
listenToUsersPathChange();

export default function App() {
  return (
    <ViewportProvider>
      <RootContainer />
    </ViewportProvider>
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