import React from 'react'
import TimeItem from '../TimeItem'

const AgentProficiency = ({ speed_to_answer = 0, talk_time = 0, acw_time = 0 }) => {
  return (
    <>
      <TimeItem title='Speed to answer' time={speed_to_answer}/>
      <TimeItem title='Talk Time' time={talk_time}/>
      <TimeItem title='ACW Time' time={acw_time}/>
    </>
  )
}


export default AgentProficiency