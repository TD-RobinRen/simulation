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
    result =
      m.toString().padStart(2, "0") + ":" + s.toString().padStart(2, "0");
    h > 0 && (result = h.toString().padStart(2, "0") + ":" + result);
    return result;
  };
  const { runState, keyFrames } = GlobalStore.useContainer();

  return (
    <Row gutter={[16, 16]} style={{ margin: "0 15px" }}>
      {runState === "waiting" ? (
        <>
          <Col span={6}>
            <StatusCard title="Service Level" />
          </Col>
          <Col span={6}>
            <StatusCard title="Avg. Wait Time" />
          </Col>
          <Col span={6}>
            <StatusCard title="Longest Wait Time" />
          </Col>
          <Col span={6}>
            <StatusCard title="Live Contacts（Inbound）" />
          </Col>

          <Col span={12}>
            <StatusCard width={595} title="Service Level" />
          </Col>
          <Col span={6}>
            <StatusCard title="Live Contacts in Queue" />
          </Col>
          <Col span={6}>
            <StatusCard title="Abandon Rate" />
          </Col>

          <Col span={12}>
            <StatusCard width={595} title="Agent Status" />
          </Col>
          <Col span={12}>
            <StatusCard width={595} title={"Agent Occupancy"} />
          </Col>
        </>
      ) : (
        <>
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
              width={595}
              title="Service Level"
              content={
                <BarChart type={"serviceLevel"} />
              }
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
              content={<InstrumentPanel />}
            />
          </Col>

          <Col span={12}>
            <StatusCard
              width={595}
              title="Agent Status"
              content={<StatusTable />}
            />
          </Col>
          <Col span={12}>
            <StatusCard
              width={595}
              title={"Agent Occupancy"}
              content={<BarChart type={"agentOccupancy"} />}
            />
          </Col>
        </>
      )}
    </Row>
  );
}
