import React from 'react'
import { Row, Col, Divider } from 'antd'
import SimulationTag from '../../simulationTag'

const Staffing = ({ sourceData = [] }) => {

  return (
    <>
      <div style={{ paddingBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontWeight: 'bold' }}>No.of.agent</span>
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>{ sourceData.length }</span>
        </div>
      </div>

      <Row>
        <Col span={10}><span style={{ fontWeight: 'bold' }}>Agent</span></Col>
        <Col span={14}><span style={{ fontWeight: 'bold' }}>Ring Groups</span></Col>
      </Row>
      <Divider style={{ margin: '8px, 0' }}/>
      <div style={{ maxHeight: '100px', overflowY: 'scroll' }}>
        {
          sourceData.map((e, i) => {
            return (
              <div style={{ marginBottom: '12px' }} key={i}>
                <Row >
                  <Col span={10}><span>{e.agent}</span></Col>
                  <Col span={14}>
                    {
                      e.ringGroups.map((k, v) => {
                      return <SimulationTag key={v} text={k}></SimulationTag>
                      })
                    }
                  </Col>
                </Row>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Staffing