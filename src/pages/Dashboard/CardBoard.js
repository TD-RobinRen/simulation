import { Col, Row } from "antd";
import StatusCard from "../../components/StatusCard";
import InstrumentPanel from "../../components/InstrumentPannel";
import StatusTable from "../../components/StatusTable";
import BarChart from "../../components/BarChart";
import { GlobalStore } from "../../hooks/use-store";

export default function CardBoard() {
  const secondToDate = (result) => {
    var h = Math.floor(result / 3600);
    var m = Math.floor((result / 60) % 60);
    var s = Math.floor(result % 60);
    result = m + ":" + s;
    h > 0 && (result = h + ":" + result);
    return result;
  };
  const { keyFrames } = GlobalStore.useContainer();

  return (
    <Row gutter={[16, 16]}>
      <Col span={6}>
        <StatusCard
          title="Service Level"
          status="today"
          content={keyFrames.service_level + "%"}
        />
      </Col>
      <Col span={6}>
        <StatusCard
          title="Avg. Wait Time"
          status="today"
          content={secondToDate(keyFrames.wait_time)}
        />
      </Col>
      <Col span={6}>
        <StatusCard
          title="Longest Wait Time"
          status="live"
          content={secondToDate(keyFrames.longest_wait_time)}
        />
      </Col>
      <Col span={6}>
        <StatusCard
          title="Live Contacts（Inbound）"
          status="live"
          content={keyFrames.live_contacts}
        />
      </Col>

      <Col span={12}>
        <StatusCard
          width={435}
          title="Service Level"
          content={<BarChart style={{ width: 435 }} type={"serviceLevel"} />}
        />
      </Col>
      <Col span={6}>
        <StatusCard
          title="Live Contacts in Queue"
          status="live"
          content={keyFrames.live_contacts_queue}
        />
      </Col>
      <Col span={6}>
        <StatusCard
          title="Abandon Rate"
          status="today"
          content={<InstrumentPanel status="start" />}
        />
      </Col>

      <Col span={12}>
        <StatusCard
          width={435}
          title="Agent Status"
          content={<StatusTable status="start" />}
        />
      </Col>
      <Col span={12}>
        <StatusCard
          width={435}
          title={"Agent Occupancy"}
          content={<BarChart type={"agentOccupancy"} />}
        />
      </Col>
    </Row>
  );
}
