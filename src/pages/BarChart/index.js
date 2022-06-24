import React from 'react'
import {Card} from 'antd'
import ServiceLevel from "./ServiceLevel"
import AgentOccupancy from "./AgentOccupancy"

const BarChart = () => (
  <div className="bar-charts">
    <Card title="Service Level">
      <ServiceLevel />
    </Card>
    <Card title="Agent Occupancy">
      <AgentOccupancy />
    </Card>
  </div>
)

export default BarChart

