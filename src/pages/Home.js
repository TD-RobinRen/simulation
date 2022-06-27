import { Button, PageHeader, Table } from 'antd';
import { Link } from 'react-router-dom';
import { HistoryOutlined } from '@ant-design/icons';

import { updateAppPath } from '../config/routeAtlas';

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
    name: 'Inbound Handling Simulation',
    creator: 'Enming Hu',
  },
];

export default function Home() {
  const handleCreate = () => {
    updateAppPath({ path: '/dashboard' })
  }
  return (
    <>
      <PageHeader
        title="Simulation"
        extra={[
          <Button key="1" type="primary" onClick={handleCreate}>
            Create
          </Button>,
        ]}
      />
      <div style={{ height: 40, backgroundColor: 'gray' }}></div>
      <Table columns={columns} dataSource={data} />
    </>
  )
}