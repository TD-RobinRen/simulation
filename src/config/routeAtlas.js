import AtlasSdk from '@atlas/sdk';
import { createMemoryHistory } from 'history';

export const history = createMemoryHistory();

export const updateAppPath = ({ path, search, state }) =>
  history.push({ pathname: path.startsWith('/') ? path : `/${path}`, search, state });

export const listenToAtlasPathChange = () => {
  AtlasSdk.navigation.onContainerPathChange(({ path, search }) => {
    const fullPath = path + search
  
    if (history.path !== fullPath) {
      history.push(fullPath)
    }
  })
};

export const listenToUsersPathChange = () => {
  history.listen(location => {
    AtlasSdk.navigation.triggerAppPathChange({
      path: location.pathname,
      search: location.search
    })
  })
};
