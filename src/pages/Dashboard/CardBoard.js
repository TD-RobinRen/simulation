import { Col, Row } from "antd";
import StatusCard from "../../components/StatusCard";
import InstrumentPanel from "../../components/InstrumentPannel";
import StatusTable from "../../components/StatusTable";
import BarChart from '../../components/BarChart'

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
        <StatusCard width={435} title="Service Level" content={<BarChart style={{width:435}} type={'serviceLevel'}/>}/>
      </Col>
      <Col span={6}>
        <StatusCard />
      </Col>
      <Col span={6}>
        <StatusCard
          title="Abandon Rate"
          status="today"
          content={<InstrumentPanel status="start"/>}
        />
      </Col>

      <Col span={12}>
        <StatusCard 
          width={435}
          title="Agent Status"
          content={<StatusTable status="start"/>}
        />
      </Col>
      <Col span={12}>
        <StatusCard width={435} title={'Agent Occupancy'} content={<BarChart type={'agentOccupancy'}/>}/>
      </Col>
    </Row>
  );
}
