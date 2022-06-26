import React, { useState } from 'react'
import { Row, Col, InputNumber } from 'antd'

const TimeItem = ({ title, time, isEdit = false, onChange }) => {
  const { m, s } = secondToMinutes(time)
  const [minute, setMinute] = useState(m || 0)
  const [second, setSecond] = useState(s || 0)

  const handleMinute = (value) => {
    setMinute(value)
    onChange( value * 60 + second)
  }

  const handleSecond = (value) => {
    setSecond(value)
    onChange( minute * 60 + value)
  }
  
  return (
    <Row>
      <Col span={9}>
        <span>{ title }</span>
      </Col>
      <Col span={15}>
        <div>
          <Row justify='space-between'>
            <Col span={12}>
              <Row justify='end'>
                <Col span={23}>
                  {
                  isEdit ? <InputNumber value={minute} min={0} max={59} onChange={handleMinute}/> : <span>{m}</span>
                  }
                </Col>
                <Col span={1}><span>m</span></Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row justify='end'>
                <Col span={23}>
                  {
                    isEdit ? <InputNumber value={second} min={0} max={59} onChange={ handleSecond }/> : <span>{s}</span>
                  }
                </Col>
                <Col span={1}><span>s</span></Col>
              </Row>
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