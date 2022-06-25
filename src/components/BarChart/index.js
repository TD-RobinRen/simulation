import React, {useEffect, useMemo, useState} from 'react'
import {Card} from 'antd'
import Charts from "./Charts";

const BarChart = ({
  state,
  time
}) => {
  const [serviceLevelData, setServiceLevelData] = useState([])
  const [agentOccupancyData, setAgentOccupancyData] = useState([])
  
  const serviceLevelOption = useMemo(()=> ({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: 'Level: {c}%',
    },
    grid: {
      top: 10,
      left: 10,
      bottom: 10,
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '8:00',
          '9:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00',
          '14:00',
          '15:00',
          '16:00',
          '17:00',
          '18:00',
          '19:00'
        ],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          formatter: item => {
            return `${item}%`
          }
        }
      }
    ],
    series: [
      {
        name: 'level',
        type: 'bar',
        barWidth: 10,
        data: serviceLevelData
      }
    ]
  }), [serviceLevelData])

  const agentOccupancyOption = useMemo(()=> ({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: 'Level: {c}%',
    },
    grid: {
      top: 10,
      left: 10,
      bottom: 10,
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '8:00',
          '9:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00',
          '14:00',
          '15:00',
          '16:00',
          '17:00',
          '18:00',
          '19:00'
        ],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          formatter: item => {
            return `${item}%`
          }
        }
      }
    ],
    series: [
      {
        name: 'level',
        type: 'bar',
        barWidth: 10,
        data: agentOccupancyData
      }
    ]
  }), [agentOccupancyData])
  
  const serviceLevel = useMemo(()=>({
    title: 'Service Level',
    chartId: 'service-level',
    width: 500,
    height: 200,
    option: serviceLevelOption
  }), [serviceLevelOption])

  const agentOccupancy = useMemo(()=>({
    title: 'Agent Occupancy',
    chartId: 'agent-occupancy',
    width: 500,
    height: 200,
    option: agentOccupancyOption
  }), [agentOccupancyOption])
  
  useEffect(() => {
    setServiceLevelData([86,78,87,85,93,92,87,93])
    setAgentOccupancyData([86,78,87,85,93,92,87,93])
  }, [])
  
  return (
    <div className="bar-charts">
      <Card title={serviceLevel.title} style={{width: 550, height: 300}}>
        {serviceLevelData.length > 0 && <Charts {...serviceLevel}/>}
      </Card>
      <Card title={agentOccupancy.title} style={{width: 550, height: 300}}>
        {agentOccupancyData.length > 0 && <Charts {...agentOccupancy}/>}
      </Card>
    </div>
  )
}

export default BarChart
