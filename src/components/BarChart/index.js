import React, {useEffect, useMemo, useState} from 'react'
import Charts from "./Charts";
import {GlobalStore} from "../../hooks/use-store";

const TYPE_MAP = {
  serviceLevel: 'service-level',
  agentOccupancy: 'agent-occupancy'
}

const serviceData = [86, 78, 87, 85, 93, 92, 87, 93, 50, 70, 36, 18]
const agentData = [86, 78, 87, 85, 93, 92, 87, 93, 49, 29, 40, 90]

const TIME_MAP = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

const BarChart = ({
  type = 'serviceLevel'
}) => {
  const { keyFrames } = GlobalStore.useContainer();
  const currentTime = new Date(keyFrames.current_time).getHours()
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
        data: TIME_MAP,
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          formatter: item => {
            return `${item}:00`
          }
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
    if (currentTime && (currentTime > 8 && currentTime < 19)) {
      const index = TIME_MAP.indexOf(currentTime)
      setData(type === 'serviceLevel' ? 
        keyFrames.service_level_chart.splice(0, index) : 
        keyFrames.agent_occupancy.splice(0, index))
    } else {
      // setData([])
    }
  }, [type, currentTime])
  
  return (
    <div className="bar-charts">
      {data.length > 0 && <Charts {...chartConfig}/>}
    </div>
  )
}

export default BarChart
