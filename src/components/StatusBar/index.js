import { Typography } from "antd";
import { Badge } from "antd";

const { Title } = Typography;

export default function StatusBar() {
  return (
    <>
      <Title level={4}>Simulation Result</Title>
      <Badge status="error" text="Simulating" style={{ color: "red" }} />
    </>
  );
}
