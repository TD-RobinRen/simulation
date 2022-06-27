import React from 'react'
import List from './List'
import StaffingData from './StaffingData'
import CallVolume from './CallVolume'


const MetricConfiguration = () => {
  return (
    <div>
      <h2>Metric Configuration</h2>
      <div >
        <div style={{ height: '438px' }}>
          <List  title='Staffing & Proficiency'><StaffingData/></List>
        </div>
        <div style={{ height: '438px' }}>
          <List  title='Call Volume'><CallVolume/></List>
        </div>
      </div>
    </div>
  )
}

export default MetricConfiguration