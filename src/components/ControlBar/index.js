import { Space, Typography } from "antd";
import { Row } from "antd";
import { Badge } from "antd";
import {
  SyncOutlined,
  StepBackwardOutlined,
  PauseOutlined,
  StepForwardOutlined,
} from "@ant-design/icons";

const { Text, Title } = Typography;

const statusColorMap = {
  waiting: {
    text: "Wait to start",
    statusColor: "#8c8c8c",
    textColor: "#d9d9d9",
  },
  running: {
    text: "Simulating",
    statusColor: "red",
    textColor: "black",
  },
};

export default function ControlBar({
  time = "03:23:08 PM",
  status = "waiting",
}) {
  return (
    <>
      <div style={{ color: statusColorMap[status].textColor }}>
        <Row justify="space-between" style={{ padding: "0 8px" }}>
          <Title level={4}>Simulation Result</Title>
          <Badge
            color={statusColorMap[status].statusColor}
            text={statusColorMap[status].text}
            style={{
              color:
                status === "running"
                  ? statusColorMap[status].statusColor
                  : statusColorMap[status].textColor,
            }}
          />
        </Row>
        <Row justify="end" style={{ padding: "0 8px" }}>
          <Space size="large" style={{ fontSize: 18 }}>
            <Text strong style={{ color: statusColorMap[status].textColor }}>
              {time}
            </Text>
            <StepBackwardOutlined onClick={() => {}} />
            <PauseOutlined onClick={() => {}} />
            <StepForwardOutlined onClick={() => {}} />
            <SyncOutlined onClick={() => {}} />
          </Space>
        </Row>
      </div>
    </>
  );
}
