import { useEffect, useReducer, useState } from "react";
import { createContainer } from "unstated-next";

export const defaultBaseData = {
  current_time: 0,
  start_date: 0,
  service_level: 10,
  wait_time: 0,
  longest_wait_time: 0,
  live_contacts: 0,
  service_level_chart: [86, 78, 87, 85, 93, 92, 87, 93, 50, 70, 36, 18],
  live_contacts_queue: 0,
  abandon_rate: 0,
  agent_status: [],
  agent_occupancy: [70, 60, 43, 85, 93, 92, 56, 93, 49, 29, 40, 90],
  originAgentStatus: [],
  speed_to_answer: 0,
  talk_time: 0,
  acw_time: 0
};

const Ranges = {
  service_level: 10,
  wait_time: 60,
  longest_wait_time: 60,
  live_contacts: 10,
  service_level_chart: [],
  live_contacts_queue: 10,
  abandon_rate: 15,
  agent_status: [],
  agent_occupancy: [],
};

// const originAgentStatus = [
//   {name: 'Peter Taylor', ringGroups:['sales', 'Billing'], id: 'abc1'},
//   {name: 'Veerle de Bree', ringGroups:['sales', 'Billing','Orders'],id: 'abc2'},
//   {name: 'Nahia Colunga', ringGroups:['Billing','Orders'],id: 'abc3'},
//   {name: 'Enming Hu', ringGroups:['Orders'],id: 'abc4'},
//   {name: 'Donald', ringGroups:['Orders'],id: 'abc5'}
// ]

function Random(min, max) {
  return Math.max(Math.round(Math.random() * (max - min)) + min, 0);
}

const offsetReducer = (state, direction) => {
  if (direction === 'reset') return 1;
  // eslint-disable-next-line default-case
  switch(state) {
    case 1:
      return direction === 'forward' ? 2 : 1;
    case 2:
      return direction === 'forward' ? 4 : 1;
    case 4:
      return direction === 'forward' ? 8 : 2;
    case 8:
      return direction === 'forward' ? 16 : 4;
    case 16:
      return direction === 'forward' ? 32 : 8;
    case 32:
      return direction === 'forward' ? 32 : 16;
  }
};

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
  const [offset, dispatchOffset] = useReducer(offsetReducer, 1);
  console.log("🚀 ~ file: use-store.js ~ line 45 ~ keyFrames", keyFrames);

  let currentAgentStatus = [];
  const getAgentStatus = (offset, originData, currentData) => {
    const array = [];
    if (offset === 1 && currentData.length) {
      currentData.forEach((agent) => {
        agent.duration = agent.duration + 1;
        array.push(agent);
      });
    } else if (offset === 60 && currentData.length) {
      const index = Random(0, currentData.length - 1);
      currentData.forEach((agent) => {
        agent.duration = agent.duration + 60;
        array.push(agent);
      });
      array[index].status = Random(1, 3);
      array[index].duration = Random(1, 20);
    } else if (offset === 3600 || currentData.length === 0) {
      originData.forEach((agent) => {
        agent.status = Random(1, 3);
        agent.duration = Random(10, 600);
        array.push(agent);
      });
    }
    currentAgentStatus = array;
    return array;
  };

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
          wait_time: Random(1, baseData.wait_time + Ranges.wait_time),
          longest_wait_time: Random(
            baseData.longest_wait_time - Ranges.longest_wait_time,
            baseData.longest_wait_time + Ranges.longest_wait_time
          ),
          live_contacts: Random(
            baseData.live_contacts - Ranges.live_contacts,
            baseData.live_contacts + Ranges.live_contacts
          ),
          service_level_chart: baseData.service_level_chart,
          live_contacts_queue: Random(
            baseData.live_contacts_queue - Ranges.live_contacts_queue,
            baseData.live_contacts_queue + Ranges.live_contacts_queue
          ),
          abandon_rate:
            Random(
              baseData.abandon_rate - Ranges.abandon_rate,
              baseData.abandon_rate + Ranges.abandon_rate
            ) + 1,
          agent_status: getAgentStatus(
            offset,
            baseData.originAgentStatus,
            currentAgentStatus
          ),
          agent_occupancy: baseData.agent_occupancy,
        };
        data.longest_wait_time = Math.max(
          data.longest_wait_time,
          defaultBaseData.longest_wait_time
        );
        defaultBaseData.longest_wait_time = data.longest_wait_time;
        setKeyFrames(data);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [runState, baseData, offset]);

  return {
    runState,
    setRunState,
    keyFrames,
    setKeyFrames,
    baseData,
    setBaseData,
    offset,
    dispatchOffset,
  };
}

export const GlobalStore = createContainer(useGlobalStore);
