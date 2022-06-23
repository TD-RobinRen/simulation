import AtlasSdk from '@atlas/sdk';
import { createMemoryHistory } from 'history';

export const history = createMemoryHistory();

export const updateAppPath = ({ path, search, state }) =>
  history.push({ pathname: path.startsWith('/') ? path : `/${path}`, search, state });

export const listenToAtlasPathChange = () => {
  AtlasSdk.navigation.onContainerPathChange((containerContext) => {
    const { pathname, search } = history.location || {};
    if (containerContext.path) {
      updateAppPath(containerContext);
    } else {
      AtlasSdk.navigation.triggerAppPathChange({
        path: pathname,
        search: search,
      });
    }
  });
};

export const listenToUsersPathChange = () => {
  history.listen(({ pathname, search }) => {
    AtlasSdk.navigation.triggerAppPathChange({
      path: pathname,
      search,
    });
  });
};
