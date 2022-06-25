import { Button, PageHeader, Table } from 'antd';
import { Link } from 'react-router-dom';
import { HistoryOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Link to="/dashboard">{text}</Link>,
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
    render: () => <HistoryOutlined style={{ fontSize: 18 }} />
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
    </>
  )
}