import { useCallback, useEffect, useState } from "react";
import { Space, Badge } from "antd";
import classNames from "classnames";
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  PauseOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

import { GlobalStore } from "../../hooks/use-store";

import Counter from "../../components/Counter";

import "./index.less";

dayjs.extend(isSameOrAfter);

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
  finished: {
    badge: <Badge status="success" text="Finished" />,
  },
};

export default function ChartBoard() {
  const { runState, setRunState, keyFrames, offset, dispatchOffset } =
    GlobalStore.useContainer();
  const [isEnable, setEnable] = useState(runState === "running");

  useEffect(() => {
    switch (runState) {
      case "running":
        setEnable(true);
        break;
      case "pause":
        setEnable(false);
        break;
      case "finished":
        setEnable(false);
        break;
      default:
    }
  }, [runState]);

  const handleBackward = () => {
    if (!isEnable || offset === 1) return;
    dispatchOffset('backward');
  };
  const handleStop = () => {
    if (!isEnable) return;
    setRunState("pause");
  };
  const handleForward = () => {
    if (!isEnable || offset === 32) return;
    dispatchOffset('forward');
  };

  const handleChangeTime = useCallback((time) => {
    global.currentTime = time;
    if (time > new Date('1990-01-01') && dayjs(time).isSameOrAfter(dayjs(keyFrames.end_date))) {
      setRunState("finished");
    }
  }, [keyFrames.end_date, setRunState]);

  return (
    <div>
      <div className="chart-header">
        <h4>Simulation Result</h4>
        <Space direction="vertical" align="end">
          <Space>{StateMap[runState]?.badge}</Space>
          <Space align="center" size="middle">
            {keyFrames.start_date === 0 ? '-' : (
               <Counter
                runState={runState}
                startDate={keyFrames.start_date}
                offset={offset}
                onChange={handleChangeTime}
              />
            )}
            <StepBackwardOutlined
              disabled={!isEnable || offset === 1}
              onClick={handleBackward}
              className={classNames("operation", {
                "operation-disbaled": !isEnable || offset === 1,
              })}
            />
            <PauseOutlined
              disabled={!isEnable}
              onClick={handleStop}
              className={classNames("operation", {
                "operation-disbaled": !isEnable,
              })}
            />
            <StepForwardOutlined
              disabled={!isEnable || offset === 32}
              onClick={handleForward}
              className={classNames("operation", {
                "operation-disbaled": !isEnable || offset === 32,
              })}
            />
            <span>{`x${offset}`}</span>
          </Space>
        </Space>
      </div>
    </div>
  );
}
