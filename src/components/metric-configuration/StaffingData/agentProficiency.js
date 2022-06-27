import React from 'react'
import TimeItem from '../TimeItem'
import { GlobalStore } from '../../../hooks/use-store'

const AgentProficiency = ({ speed_to_answer = 0, talk_time = 0, acw_time = 0, isEdit = false }) => {

  const { baseData, setBaseData } = GlobalStore.useContainer()

  const updateSpeedToAnswer = (value) => {
    setBaseData({
      ...baseData,
      speed_to_answer: value
    })
  }

  const updateTalkTime = (value) => {
    setBaseData({
      ...baseData,
      talk_time: value
    })
  }

  const updateAcwTime = (value) => {
    setBaseData({
      ...baseData,
      acw_time: value
    })
  }

  return (
    <>
      <div style={{ marginBottom: '8px' }}>
        <TimeItem onChange={updateSpeedToAnswer} isEdit={isEdit} title='Speed to answer' time={speed_to_answer}/>
      </div>
      <div style={{ marginBottom: '8px' }}>
        <TimeItem onChange={updateTalkTime} isEdit={isEdit} title='Talk Time' time={talk_time}/>
      </div>
      <div>
        <TimeItem onChange={updateAcwTime} isEdit={isEdit} title='ACW Time' time={acw_time}/>
      </div>
    </>
  )
}


export default AgentProficiency