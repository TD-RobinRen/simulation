import { listenToAtlasPathChange, listenToUsersPathChange } from './config/routeAtlas';
import Routes from './config/routes';
import { GlobalStore } from './hooks/use-store';

import './App.less';

// listenToUsersPathChange();
// listenToAtlasPathChange();

export default function App() {
  return (
    <RootContainer />
  );
}

function RootContainer() {
  return (
    <div className="root-container">
      <GlobalStore.Provider>
        <Routes />
      </GlobalStore.Provider>
    </div>
  );
}
