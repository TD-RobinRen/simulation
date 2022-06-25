import { Col, Row } from "antd";
import StatusCard from "../../components/StatusCard";

export default function CardBoard() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={6}>
        <StatusCard title="Service Level" status="today" content="85%" />
      </Col>
      <Col span={6}>
        <StatusCard />
      </Col>
      <Col span={6}>
        <StatusCard title="Longest Wait Time" status="live" content="02:33" />
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
  );
}
