import React, {useEffect, useMemo, useState} from 'react'
import {Card} from 'antd'
import Charts from "./Charts";

const TYPE_MAP = {
  serviceLevel: 'service-level',
  agentOccupancy: 'agent-occupancy'
}

const serviceData = [86,78,87,85,93,92,87,93]
const agentData = [86,78,87,85,93,92,87,93]

const BarChart = ({
  state,
  time,
  type
}) => {
  const [data, setData] = useState([])
  
  const option = useMemo(()=> ({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: type === 'serviceLevel' ? 'Level: {c}%' : 'Occupancy: {c}%',
    },
    grid: {
      top: 10,
      left: 10,
      bottom: 0,
      right: 0,
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
        data: data
      }
    ]
  }), [type, data])
  
  const chartConfig = useMemo(()=>({
    chartId: TYPE_MAP[type],
    width: 430,
    height: 150,
    option: option
  }), [type, option])
  
  useEffect(() => {
    setData(type === 'serviceLevel' ? serviceData : agentData)
  }, [type, state])
  
  return (
    <div className="bar-charts">
      {data.length > 0 && <Charts {...chartConfig}/>}
    </div>
  )
}

export default BarChart
