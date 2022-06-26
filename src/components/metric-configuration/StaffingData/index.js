import React, { useState } from 'react'
import { Button, Modal, Row, Col, Calendar, Divider } from 'antd'
import Content from './Content'
import Staffing from './Staffing'
import AgentProficiency from './agentProficiency'
import MockData from './MockData'

import { GlobalStore } from '../../../hooks/use-store'


let weekDay = new Date().getDay()

const originData = {
  tableData: MockData[weekDay],
  speed_to_answer: 212,
  talk_time: 98,
  acw_time: 55
}

function Random(min, max) {
  return Math.max((Math.round(Math.random() * (max - min)) + min), 0);
}

const StaffingData = () => {
  const [hasData, setHasData] = useState(false)
  const [visible, setVisible] = useState(false)
  const [resultData, setResultData] = useState(originData)
  const [initData, setInitData] = useState({
    current_time: Date.now(),
    tableData: [],
    speed_to_answer: 0,
    talk_time: 0,
    acw_time: 0
  })

    const { baseData, setBaseData } = GlobalStore.useContainer()

  const handleOk = () => {
    setVisible(false)
    setHasData(true)
    setInitData({...resultData})
    // 更新store 数据
    setBaseData({
      ...baseData,
      current_time: resultData.current_time,
      originAgentStatus: resultData.tableData
    })
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const handleCalendar = ({ _d }) => {
    let dayKey = new Date(_d).getDay()
    setResultData({
      current_time: Date.parse(_d),
      tableData: MockData[dayKey],
      speed_to_answer: Random(20, 300),
      talk_time: Random(10, 239),
      acw_time: Random(50, 654)
    })
  }

  const handleResetData = () => {
    setHasData(false)
    setResultData({
      tableData: [],
      speed_to_answer: 0,
      talk_time: 0,
      acw_time: 0
    })
  }

  return (
    <div>
      {
        hasData ? (<Content originData={initData} openModal={ () => setVisible(true) } onSetData={ handleResetData } />) : 
        (<div style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button onClick={() => setVisible(!visible)} type='primary'>Import from a Data</Button>
        </div>)
      }
      <Modal title="Import staffing data" visible={visible} onOk={handleOk} onCancel={handleCancel} width="900px">
        <Row align='middle'>
            <Col span={10}>
              <Calendar fullscreen={false} onChange={ handleCalendar }/>
            </Col>

            <Col span={14}>
              <div style={{ padding: '0 16px' }}>
                <h3>Staffing</h3>
                <div style={{ padding: '16px' }}>
                  <div style={{ height: '300px', overflowY: 'scroll' }}>
                    <Staffing sourceData={ resultData.tableData }/>
                  </div>
                  <Divider />
                </div>
                <h3>Agent Proficiency</h3>
                <div style={{ padding: '16px' }}>
                  <AgentProficiency {...resultData}/>
                </div>
              </div>
            </Col>
          </Row>
      </Modal>
    </div>
  )
}

export default StaffingData
