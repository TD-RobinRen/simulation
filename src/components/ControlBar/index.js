import { Space, Typography } from "antd";
import {
  SyncOutlined,
  StepBackwardOutlined,
  PauseOutlined,
  StepForwardOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

export default function ControlBar({ time = "03:23:08 PM" }) {
  return (
    <Space size="large" style={{ fontSize: 18 }}>
      <Text strong>{time}</Text>
      <StepBackwardOutlined onClick={() => {}} />
      <PauseOutlined onClick={() => {}} />
      <StepForwardOutlined onClick={() => {}} />
      <SyncOutlined onClick={() => {}} />
    </Space>
  );
}
