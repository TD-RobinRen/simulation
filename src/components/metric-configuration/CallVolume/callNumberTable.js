import React from 'react'
import { Row, Col, Tag, Divider } from 'antd'


const CallNumberTable = ({ sourceData = [], tableData = [] }) => {
  return (
    <>
      <Row>
        <Col span={9}></Col>
        <Col span={5}>
          <Tag>Sales</Tag>
        </Col>
        <Col span={5}>
          <Tag>Billing</Tag>
        </Col>
        <Col span={5}>
          <Tag>Orders</Tag>
        </Col>
      </Row>

      <Divider style={{ margin: '8px, 0' }}/>

      <div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
        {
          sourceData.map((e, i) => {
            if (i < sourceData.length - 1) {
              return (
                <div key={i} style={{ marginBottom: '4px' }}>
                  <Row>
                    <Col span={9}>
                      <span>{ e + ' - ' +sourceData[i + 1] }</span>
                    </Col>
                    <Col span={5}>{ tableData[i]?.sales || 0 }</Col>
                    <Col span={5}>{ tableData[i]?.billing || 0 }</Col>
                    <Col span={5}>{ tableData[i]?.orders || 0 }</Col>
                  </Row>
                </div>
              )
            } else {
              return null
            }
          })
        }
      </div>
    </>
  )
}

export default CallNumberTable