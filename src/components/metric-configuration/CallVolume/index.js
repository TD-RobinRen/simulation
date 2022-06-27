import React, { useState } from 'react'
import { Button, Modal, Calendar, Col, Row } from 'antd'
import Content from './Content'
import CallNumberTable from './callNumberTable'
import TIME_PERIOD from './mockData'
import TimeItem from '../TimeItem'

function Random(min, max) {
  return Math.max((Math.round(Math.random() * (max - min)) + min), 0);
}

function generateRandomListNum() {
  const arr = TIME_PERIOD.map(e => {
    return {
      sales: Random(0, 35),
      billing: Random(0, 35),
      orders: Random(0, 35)
    }
  })
  return arr
}

const CallVolume = () => {
  const [hasData, setHasData] = useState(false)
  const [visible, setVisible] = useState(false)
  const [originData, setOriginData] = useState({ tableData: generateRandomListNum(), maximum_time: Random(240, 600) })
  const [initData, setInitData] = useState({ tableData: [], maximum_time: 0 })

  const handleOk = () => {
    setVisible(false)
    setHasData(true)
    setInitData({...originData})
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const handleCalendar = () => {
    setOriginData({
      tableData: generateRandomListNum(),
      maximum_time: Random(240, 600)
    })
  }

  const handleReset = () => {
    setHasData(false)
    setInitData({ tableData: [], maximum_time: 0 })
  }

  return (
    <div>
      {
        hasData ? (<Content sourceData={TIME_PERIOD} {...initData} openModal={ () => { setVisible(true) } } onReset={handleReset}/>) : 
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
            <div style={{ borderLeft: '1px solid rgba(0, 0, 0, 0.06)', height: '100%', padding: '8px' }}>
              <h3>Call Volume</h3>
              <CallNumberTable sourceData={TIME_PERIOD} tableData={ originData.tableData } />
              <div style={{ marginTop: '16px' }}>
                <TimeItem title='Maximum Waiting Time' time={originData.maximum_time}/>
              </div>
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
  )
}

export default CallVolume