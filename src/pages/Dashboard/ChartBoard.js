import { useEffect, useState } from "react";
import { Space, Badge } from "antd";
import classNames from 'classnames';
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  PauseOutlined,
} from "@ant-design/icons";

import { GlobalStore } from "../../hooks/use-store";

import Counter from "../../components/Counter";

import "./index.less";


const StateMap = {
  waiting: {
    badge: <Badge status="default" text="Waiting to start" />,
  },
  running: {
    badge: <Badge status="processing" text="Running" />,
  },
  pause: {
    badge: <Badge status="error" text="Pauseing" />,
  },
};

export default function ChartBoard() {
  const { runState, setRunState } = GlobalStore.useContainer();
  const [isEnable, setEnable] = useState(runState === 'running');

  useEffect(() => {
    switch(runState) {
      case 'running':
        setEnable(true)
        break;
      case 'pause':
        setEnable(false)
        break;
      default:
    }
  }, [runState]);

  const handleBackward = () => {}
  const handleStop = () => {
    if (!isEnable) return;
    setRunState('pause');
  }
  const handleForward = () => {}
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  return (
    <div>
      <div className="chart-header">
        <h4>Result</h4>
        <Space direction="vertical" align="end">
          <Space>
            {StateMap[runState]?.badge}
          </Space>
          <Space align="center" size="middle">
            <Counter runState={runState} />
            <StepBackwardOutlined disabled={!isEnable} onClick={handleBackward} className={classNames('operation', { 'operation-disbaled': !isEnable })} />
            <PauseOutlined disabled={!isEnable} onClick={handleStop} className={classNames('operation', { 'operation-disbaled': !isEnable })} />
            <StepForwardOutlined disabled={!isEnable} onClick={handleForward} className={classNames('operation', { 'operation-disbaled': !isEnable })} />
          </Space>
        </Space>
      </div>
    </div>
  );
}
