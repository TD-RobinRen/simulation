import React from 'react'
import List from './List'
import StaffingData from './StaffingData'
import CallVolume from './CallVolume'

const CARDS = [{
  title: 'Staffing & Proficiency',
  component: () => (<StaffingData/>)
}, {
  title: 'Call Volume',
  component: () => (<CallVolume/>)
}]

const MetricConfiguration = () => {
  return (
    <div>
      <h2>Metric Configuration</h2>
      {
        CARDS.map((e, i) => {
          return (
            <div key={i} style={{ marginBottom: '10px' }} >
              <List  title={e.title}>{e.component()}</List>
            </div>
          )
        })
      }
    </div>
  )
}

export default MetricConfiguration