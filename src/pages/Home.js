import { Button, PageHeader, Table } from 'antd'
import BarChart from './BarChart'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Creator',
    dataIndex: 'creator',
    key: 'creator',
  },
  {
    title: 'History',
    dataIndex: 'history',
    key: 'history',
  }
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    creator: 'Enming Hu',
  },
];

export default function Home() {
  return (
    <>
      <PageHeader
        title="Simulation"
        extra={[
          <Button key="1" type="primary">
            Create
          </Button>,
        ]}
      />
      <div style={{ height: 40, backgroundColor: 'gray' }}></div>
      <Table columns={columns} dataSource={data} />
      <BarChart/>
    </>
  )
}
