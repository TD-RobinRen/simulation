import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";

const defaultBaseData = {
  current_time: 0,
  start_date: Date.now(),
  service_level: 10,
  wait_time: 8,
  longest_wait_time: 3,
  live_contacts: 0,
  service_level_chart: [],
  live_contacts_queue: 0,
  abandon_rate: 0,
  agent_status: [],
  agent_occupancy: [],
};

const Ranges = {
  service_level: 10,
  wait_time: 7,
  longest_wait_time: 3,
  live_contacts: 10,
  service_level_chart: [],
  live_contacts_queue: 10,
  abandon_rate: 10,
  agent_status: [],
  agent_occupancy: [],
};

function Random(min, max) {
  return Math.max(Math.round(Math.random() * (max - min)) + min, 0);
}

/**
 *
 * @param {*} initialState
 * runState: waiting | running | pause | end
 * @returns
 */
function useGlobalStore(
  initialState = { runState: "waiting", baseData: defaultBaseData }
) {
  const [runState, setRunState] = useState(initialState.runState);
  const [baseData, setBaseData] = useState(initialState.baseData);
  const [keyFrames, setKeyFrames] = useState(baseData);
  const [offset, setOffset] = useState(1);
  console.log("🚀 ~ file: use-store.js ~ line 45 ~ keyFrames", keyFrames);

  useEffect(() => {
    let timer = null;
    if (runState === "running") {
      timer = setInterval(() => {
        const data = {
          current_time: global.currentTime || baseData.start_date,
          start_date: baseData.start_date,
          service_level: Random(
            baseData.service_level - Ranges.service_level,
            baseData.service_level + Ranges.service_level
          ),
          wait_time: Random(
            baseData.wait_time - Ranges.wait_time,
            baseData.wait_time + Ranges.wait_time
          ),
          longest_wait_time: Random(
            baseData.longest_wait_time,
            baseData.longest_wait_time + Ranges.longest_wait_time
          ),
          live_contacts: Random(
            baseData.live_contacts - Ranges.live_contacts,
            baseData.live_contacts + Ranges.live_contacts
          ),
          service_level_chart: [],
          live_contacts_queue: Random(
            baseData.live_contacts_queue - Ranges.live_contacts_queue,
            baseData.live_contacts_queue + Ranges.live_contacts_queue
          ),
          abandon_rate: Random(
            baseData.abandon_rate - Ranges.abandon_rate,
            baseData.abandon_rate + Ranges.abandon_rate
          ),
          agent_status: [],
          agent_occupancy: [],
        };
        defaultBaseData.longest_wait_time =
          data.longest_wait_time > defaultBaseData.longest_wait_time
            ? data.longest_wait_time
            : defaultBaseData.longest_wait_time;
        setKeyFrames(data);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [runState, baseData]);

  return {
    runState,
    setRunState,
    keyFrames,
    setKeyFrames,
    setBaseData,
    offset,
    setOffset,
  };
}

export const GlobalStore = createContainer(useGlobalStore);
