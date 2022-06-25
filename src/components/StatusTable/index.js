import React, { useEffect, useMemo } from "react";
import './StatusTable.less'

const StatusTable = ({status, data}) => {
  if(!data) {
    data =  [
      {name: 'Peter Taylor', ringGroups:['sales', 'Billing'],status: '1', Duration: '00:03:19', id: 'abc1'},
      {name: 'Veerle de Bree', ringGroups:['sales', 'Billing','Orders'],status: '2', Duration: '00:13:19',id: 'abc2'},
      {name: 'Nahia Colunga', ringGroups:['Billing','Orders'],status: '2', Duration: '00:11:19',id: 'abc3'},
      {name: 'Enming Hu', ringGroups:['Orders'],status: '3', Duration: '00:33:19',id: 'abc4'},
      {name: 'Donald', ringGroups:['Orders'],status: '2', Duration: '00:01:19',id: 'abc5'}
    ]
  }
  const agentData = useMemo(() => {
    const array = [];

    data.forEach(agent=> {
      agent.status =(Math.random()*(3-1)+1).toFixed(0);
      const randomSecond = Math.random()*(600-120) + 120;
      agent.Duration = `00:${Math.floor(randomSecond/60)}:${(randomSecond%60)}`;
      array.push(agent)
    })
    return array}, [data])
  const statusType = {
    1: 'Available',
    2: 'On a call',
    3: 'Away',
  }

  useEffect(() => {

  }, []);

  return <div className="status-table">
            <div className="row header">
              <div className="column name">Agent</div>
              <div className="column group">Ring Groups</div>
              <div className="column status">Status</div>
              <div className="column duration">Duration</div>
            </div>
            <div className="body">
              {agentData.length && agentData.map(item => (
                <div className="row" key={item.id}>
                <div className="column name">{item.name}</div>
                <div className="column group">{item.ringGroups && item.ringGroups.map(
                  el => (
                    <div className="group-el" key={el}>{el}</div>
                  )
                )}
                </div>
                <div className="column status"><div className={["dot",`status${item.status}`].join(' ')}></div>{statusType[item.status]}</div>
                <div className="column duration">{item.Duration}</div>
              </div>)
              )}
            </div>
    </div>;
};

export default StatusTable;
