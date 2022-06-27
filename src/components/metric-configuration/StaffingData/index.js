import React, { useState } from 'react'
import { Button, Modal, Row, Col, Calendar, Divider } from 'antd'
import Content from './Content'
import Staffing from './Staffing'
import AgentProficiency from './agentProficiency'
import MockData from './MockData'

import { GlobalStore } from '../../../hooks/use-store'


const firstStepData = {
  service_level: Random(78, 94),
  wait_time: Random(120, 240),
  longest_wait_time: 263,
  live_contacts: Random(5, 9),
  live_contacts_queue: Random(1, 28),
  abandon_rate: Random(5, 19)
}


let weekDay = new Date().getDay()

const toDayDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} 08:00:00`
const endDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} 19:00:00`
const originData = {
  start_date: Date.parse(toDayDate),
  end_date: Date.parse(endDate),
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
    start_date: Date.now(),
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
      start_date: resultData.start_date,
      end_date: resultData.end_date,
      originAgentStatus: resultData.tableData,
      speed_to_answer: resultData.speed_to_answer,
      talk_time: resultData.talk_time,
      acw_time: resultData.acw_time,
      ...firstStepData
    })
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const handleCalendar = ({ _d }) => {
    const startDate = `${_d.getFullYear()}-${_d.getMonth() + 1}-${_d.getDate()} 08:00:00`
    const endDate = `${_d.getFullYear()}-${_d.getMonth() + 1}-${_d.getDate()} 19:00:00`

    let dayKey = new Date(_d).getDay()
    setResultData({
      start_date: Date.parse(startDate),
      end_date: Date.parse(endDate),
      tableData: MockData[dayKey],
      speed_to_answer: Random(18, 43),
      talk_time: Random(140, 430),
      acw_time: Random(120, 270)
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
                  <div>
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
