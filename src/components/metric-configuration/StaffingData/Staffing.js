import React from 'react'
import { Row, Col, Tag, Divider } from 'antd'

const Staffing = ({ sourceData = [] }) => {

  return (
    <>
      <div style={{ paddingBottom: '10px' }}>
        <Row>
          <Col span={20}>
            <span style={{ fontWeight: 'bold' }}>No.of.agent</span>
          </Col>
          <Col span={4}>
            <span style={{ fontWeight: 'bold' }}>8</span>
          </Col>
        </Row>
      </div>

      <Row>
        <Col span={10}><span style={{ fontWeight: 'bold' }}>Agent</span></Col>
        <Col span={14}><span style={{ fontWeight: 'bold' }}>Ring Groups</span></Col>
      </Row>
      <Divider style={{ margin: '8px, 0' }}/>
      {
        sourceData.map((e, i) => {
          return (
            <div style={{ marginBottom: '4px' }} key={i}>
              <Row >
                <Col span={10}><span>{e.agent}</span></Col>
                <Col span={14}>
                  {
                    e.ringGroups.map((k, v) => {
                    return <Tag key={v}>{k}</Tag>
                    })
                  }
                </Col>
              </Row>
            </div>
          )
        })
      }
    </>
  )
}

export default Staffing