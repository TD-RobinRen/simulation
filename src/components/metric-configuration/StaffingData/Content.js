import React, {useCallback, useMemo} from 'react'
import { Button } from 'antd'
import Staffing from './Staffing'
import AgentProficiency from './agentProficiency'

const Content = (
  { originData: { 
      tableData = [],
      speed_to_answer = 0,
      talk_time=  0,
      acw_time = 0 
  }, openModal, onSetData }) => {
  const handleOpenModal = useCallback(() => {
    openModal()
  }, [openModal])

  const handleReset = useCallback(() => {
    onSetData()
  }, [onSetData])

  const agentProficiencyProps = useMemo(() => {
    return {speed_to_answer, talk_time, acw_time}
  }, [speed_to_answer, talk_time, acw_time])

  return (
    <div style={{ padding: '8px' }}>

      <div>
        <Button type='primary' onClick={handleOpenModal}>Reload from a date</Button>
        <Button type='primary' onClick={handleReset} style={{ marginLeft: '8px' }}>Reset data</Button>
      </div>
      
      <div style={{ maxHeight: '300px', overflowY: 'scroll', padding: '8px 0' }}>
        <Staffing sourceData={ tableData } />
      </div>

      <div style={{ marginTop: '16px' }}>
        <AgentProficiency isEdit={true} {...agentProficiencyProps}/>
      </div>
      
    </div>
  )
}

export default Content