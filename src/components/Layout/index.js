import { Col, Row } from "antd";
import StatusCard from "../StatusCard";
import ControlBar from "../ControlBar";
import StatusBar from "../StatusBar";
import TopBar from "../TopBar";

export default function RightLayout() {
  return (
    <>
    <Row justify="space-between" style={{ padding: "0 28px" }}><TopBar /></Row>
    <Row
      style={{
        borderTop: "1px solid #f0f0f0",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Col span={8} style={{ borderRight: "1px solid #f0f0f0" }}></Col>
      <Col span={16} style={{ padding: 20 }}>
        <Row justify="space-between" style={{ padding: "0 8px" }}>
          <StatusBar />
        </Row>
        <Row justify="end" style={{ padding: "0 8px" }}>
          <ControlBar />
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <StatusCard title="Service Level" status="today" content="85%" />
          </Col>
          <Col span={6}>
            <StatusCard />
          </Col>
          <Col span={6}>
            <StatusCard
              title="Longest Wait Time"
              status="live"
              content="02:33"
            />
          </Col>
          <Col span={6}>
            <StatusCard />
          </Col>

          <Col span={12}>
            <StatusCard width={435} />
          </Col>
          <Col span={6}>
            <StatusCard />
          </Col>
          <Col span={6}>
            <StatusCard />
          </Col>

          <Col span={12}>
            <StatusCard width={435} />
          </Col>
          <Col span={12}>
            <StatusCard width={435} />
          </Col>
        </Row>
      </Col>
    </Row>
    </>
  );
}
