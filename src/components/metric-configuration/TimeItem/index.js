import React from 'react'
import { Row, Col } from 'antd'

const TimeItem = ({ title, time }) => {
  const { m, s } = secondToMinutes(time)
  return (
    <Row>
      <Col span={18}>
        <span>{ title }</span>
      </Col>
      <Col span={6}>
        <div>
          <Row justify='space-between'>
            <Col span={12}>
              <span>{m}</span>
              <span>m</span>
            </Col>
            <Col span={12}>
              <span>{s}</span>
              <span>s</span>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  )
}

function secondToMinutes(time) {
  let m = Math.floor(time / 60)
  let s = time % 60
  return {m ,s}
}

export default TimeItem