import { useEffect, useReducer } from "react";
import { Space, Statistic } from "antd";
import classNames from 'classnames';
import {
  StepBackwardOutlined,
  ClockCircleOutlined,
  LoadingOutlined,
  StepForwardOutlined,
  PauseOutlined,
} from "@ant-design/icons";

import { GlobalStore } from "../../hooks/use-store";

import "./index.less";

const { Countdown } = Statistic;

const StateMap = {
  waiting: {
    icon: <ClockCircleOutlined style={{ color: "#999" }} />,
    text: <span style={{ color: "#999" }}>Waiting to start</span>,
  },
  running: {
    icon: <LoadingOutlined style={{ color: "green" }} />,
    text: <span style={{ color: "green" }}>Running</span>,
  },
};

export default function ChartBoard() {
  const { runState } = GlobalStore.useContainer();
  const [isEnable, toggleEnable] = useReducer((state) => {
    return !state;
  }, runState === 'running');

  useEffect(() => {
    if (runState === 'running') toggleEnable(true)
  }, [runState]);

  const handleBackward = () => {}
  const handleStop = () => {}
  const handleForward = () => {}
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  return (
    <div>
      <div className="chart-header">
        <h4>Result</h4>
        <Space direction="vertical" align="center">
          <Space align="center">
            {StateMap[runState].icon}
            {StateMap[runState].text}
          </Space>
          <Space align="center" size="middle">
            <Countdown format="HH:mm:ss:SSS" value={deadline} valueStyle={{ fontSize: 14 }} />
            <StepBackwardOutlined onClick={handleBackward} className={classNames('operation', { 'operation-disbaled': !isEnable })} />
            <PauseOutlined onClick={handleStop} className={classNames('operation', { 'operation-disbaled': !isEnable })} />
            <StepForwardOutlined onClick={handleForward} className={classNames('operation', { 'operation-disbaled': !isEnable })} />
          </Space>
        </Space>
      </div>
    </div>
  );
}
