import CobaltRoot from '@cobalt/cobalt-react-components';
import { Router } from 'react-router-dom';
import ThemeProvider from '@cobalt/react-theme-provider'
import ViewportProvider from '@cobalt/react-viewport-provider';
import PortalProvider from '@cobalt/react-portal-provider';

import Theme from '@cobalt/theme-experimental';

import { listenToAtlasPathChange, listenToUsersPathChange, history } from './config/routeAtlas';

import Routes from './config/routes';

listenToAtlasPathChange();
listenToUsersPathChange();

export default function App() {
  return (
    <CobaltRoot>
      <ThemeProvider loader={() => Promise.resolve(Theme)}>
        <ViewportProvider>
          <PortalProvider>
            <RootContainer />
          </PortalProvider>
        </ViewportProvider>
      </ThemeProvider>
    </CobaltRoot>
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