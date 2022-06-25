import { useState } from 'react';
import { createContainer } from 'unstated-next';
/**
 * 
 * @param {*} initialState
 * runState: waiting | running | pause | end
 * @returns 
 */
function useGlobalStore(initialState = { runState: 'waiting' }) {
  const [runState, setRunState] = useState(initialState.runState);

  return {
    runState,
    setRunState,
  };
}

export const GlobalStore = createContainer(useGlobalStore);
