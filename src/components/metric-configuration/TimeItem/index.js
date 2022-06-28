import React, { useState } from 'react'
import { Row, Col, InputNumber } from 'antd'

const TimeItem = ({ title, time, isEdit = false, onChange, disabled = false }) => {
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
      <Col span={11}>
        <span style={{ fontWeight: 'bold' }}>{ title }</span>
      </Col>
      <Col span={13}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginRight: '16px' }}>
            <div>
              {
                isEdit ? <InputNumber disabled={disabled} value={minute} min={0} max={59} onChange={handleMinute}/> : <span>{m}</span>
              }
            </div>
            <div style={{ marginLeft: '8px' }}>
              <span>m</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div>
              {
                isEdit ? <InputNumber disabled={disabled} value={second} min={0} max={59} onChange={ handleSecond }/> : <span>{s}</span>
              }
            </div>
            <div style={{ marginLeft: '8px' }}>
              <span>s</span>
            </div>
          </div>

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