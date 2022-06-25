import React, {useEffect} from 'react'
import * as echarts from 'echarts'

const Charts = ({
  chartId,
  width,
  height,
  option
}) => {
  useEffect(() => {
    const chartDom = document.getElementById(chartId)
    const myChart = echarts.init(chartDom)
    option && myChart.setOption(option)
  }, [chartId, option])

  return (
    <div id={chartId} style={{width, height}}/>
  )
}

export default Charts

