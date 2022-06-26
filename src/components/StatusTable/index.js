import React, { useEffect, useMemo } from "react";
import './StatusTable.less'
import moment from "moment";
import { GlobalStore } from "../../hooks/use-store";

const StatusTable = ({status, data}) => {
  const { keyFrames } = GlobalStore.useContainer();
  const { agent_status } = keyFrames
  const agentData = useMemo(() => {
    return agent_status}, [agent_status])
  const statusType = {
    1: 'Available',
    2: 'On a call',
    3: 'Away',
  }


  return <div className="status-table">
            <div className="row header">
              <div className="column name">Agent</div>
              <div className="column group">Ring Groups</div>
              <div className="column status">Status</div>
              <div className="column duration">Duration</div>
            </div>
            <div className="body">
              {agentData.map(item => (
                <div className="row" key={item.id}>
                <div className="column name">{item.name}</div>
                <div className="column group">{item.ringGroups && item.ringGroups.map(
                  el => (
                    <div className="group-el" key={el}>{el}</div>
                  )
                )}
                </div>
                <div className="column status"><div className={["dot",`status${item.status}`].join(' ')}></div>{statusType[item.status]}</div>
                <div className="column duration">{moment(new Date(item.duration * 1000)).subtract(8, 'hours').utcOffset(+0, true).format('HH:mm:ss')}</div>
              </div>)
              )}
            </div>
    </div>;
};

export default StatusTable;
