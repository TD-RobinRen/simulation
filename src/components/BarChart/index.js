import React, { useEffect, useMemo, useState } from "react";
import Charts from "./Charts";
import { GlobalStore } from "../../hooks/use-store";

const TYPE_MAP = {
  serviceLevel: "service-level",
  agentOccupancy: "agent-occupancy",
};

const TIME_MAP = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

const BarChart = ({ type = "serviceLevel" }) => {
  const { keyFrames } = GlobalStore.useContainer();
  const { current_time, service_level_chart, agent_occupancy } = keyFrames;
  const currentTime = new Date(current_time).getHours();
  const [data, setData] = useState([]);

  const option = useMemo(
    () => ({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: type === "serviceLevel" ? "Level: {c}%" : "Occupancy: {c}%",
      },
      grid: {
        top: 20,
        left: 20,
        bottom: 0,
        right: 20,
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: TIME_MAP,
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            formatter: (item) => {
              return `${item}:00`;
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            formatter: (item) => {
              return `${item}%`;
            },
          },
          min: 0,
          max: 100,
        },
      ],
      series: [
        {
          name: "level",
          type: "bar",
          barWidth: 10,
          data: data,
        },
      ],
    }),
    [type, data]
  );

  const chartConfig = useMemo(
    () => ({
      chartId: TYPE_MAP[type],
      width: "100%",
      height: 200,
      option: option,
    }),
    [type, option]
  );

  useEffect(() => {
    if (currentTime && currentTime >= 8 && currentTime <= 19) {
      const index = TIME_MAP.indexOf(currentTime);
      const dataService = service_level_chart.slice(0, index + 1);
      const dataAgent = agent_occupancy.slice(0, index + 1);
      setData(type === "serviceLevel" ? dataService : dataAgent);
    } else {
      setData([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
  }, [type, currentTime, service_level_chart, agent_occupancy]);

  return (
    <div className="bar-charts">
      {data.length > 0 && <Charts {...chartConfig} />}
    </div>
  );
};

export default BarChart;
