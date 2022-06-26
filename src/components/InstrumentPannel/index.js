import * as echarts from "echarts";
import React, { useEffect } from "react";
import { GlobalStore } from "../../hooks/use-store";

const getOptions = (percent) => {
  const option = {
    backgroundColor: "#fff",
    title: {
      text: `${percent}%`,
      textStyle: {
        color: "#000",
        fontSize: 26,
        fontWeight: "bold",
      },
      left: "center",
      top: 70,
      bottom: "69%",
      itemGap: 60,
    },
    tooltip: {
      show: false,
    },
    color: ["#5096e0"],
    series: [
      {
        name: "一般",
        type: "pie",
        //起始刻度的角度，默认为 90 度，即圆心的正上方。0 度为圆心的正右方。
        startAngle: 180,
        hoverAnimation: false,
        tooltip: {},
        radius: ["90%", "110%"],
        center: ["50%", "75%"],
        label: {
          normal: {
            show: false,
            position: "center",
            color: "#fff",
            formatter: function (params) {
              return params.value;
            },
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          {
            value: percent,
            itemStyle: {
              normal: {
                color: "rgba(80,150,224,1)",
              },
            },
          },
          {
            value: 100 - percent,
            itemStyle: {
              normal: {
                color: "rgba(80,150,224,0.1)",
              },
            },
          },
          {
            value: 100,
            itemStyle: {
              normal: {
                color: "rgba(80,150,224,0)",
              },
            },
          },
        ],
      },
    ],
  };
  return option
}


const InstrumentPanel = () => {
  const { keyFrames } = GlobalStore.useContainer();
  const { abandon_rate } = keyFrames
  useEffect(() => {
    renderPie(abandon_rate || 0)
  }, [abandon_rate]);
    const renderPie = (percent) => {
      var chartDom = document.getElementById("myCharts");
      var myChart = echarts.init(chartDom);
      myChart.setOption(getOptions(percent));
    }

  return <div id="myCharts" style={{ height: '98%', width: '98%', margin:'0 4px 4px 0'}}/>;
};

export default InstrumentPanel;
