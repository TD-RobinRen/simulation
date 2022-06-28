import React from 'react'
import TimeItem from '../TimeItem'
import { GlobalStore } from '../../../hooks/use-store'


// function Random(min, max) {
//   return Math.max((Math.round(Math.random() * (max - min)) + min), 0);
// }

const secondStepData = {
  service_level: 90,
  wait_time: 112,
  longest_wait_time: 252,
  live_contacts: 7,
  live_contacts_queue: 11,
  abandon_rate: 6,
  service_level_chart: [92, 82, 91, 91, 98, 98, 91, 98, 98, 90, 92],
  agent_occupancy: [84, 90, 92, 81, 82, 85, 85, 89, 83,83, 88,]
}

const AgentProficiency = ({ speed_to_answer = 0, talk_time = 0, acw_time = 0, isEdit = false, disabled = false }) => {

  const { baseData, setBaseData } = GlobalStore.useContainer()

  // const updateSpeedToAnswer = (value) => {
  //   setBaseData({
  //     ...baseData,
  //     speed_to_answer: value
  //   })
  // }

  // const updateTalkTime = (value) => {
  //   setBaseData({
  //     ...baseData,
  //     talk_time: value
  //   })
  // }

  // const updateAcwTime = (value) => {
  //   setBaseData({
  //     ...baseData,
  //     acw_time: value
  //   })
  // }

  const updateTimeData = (value) => {
    if (value) {
      setBaseData({
        ...baseData,
        ...secondStepData
      })
    }
  }

  return (
    <>
      <div style={{ marginBottom: '8px' }}>
        <TimeItem disabled={disabled} onChange={updateTimeData} isEdit={isEdit} title='Speed to answer' time={speed_to_answer}/>
      </div>
      <div style={{ marginBottom: '8px' }}>
        <TimeItem disabled={disabled} onChange={updateTimeData} isEdit={isEdit} title='Talk Time' time={talk_time}/>
      </div>
      <div>
        <TimeItem disabled={disabled} onChange={updateTimeData} isEdit={isEdit} title='ACW Time' time={acw_time}/>
      </div>
    </>
  )
}


export default AgentProficiency