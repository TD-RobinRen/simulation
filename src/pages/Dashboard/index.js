import { useEffect, useReducer } from "react";
import { PageHeader, Button, Space, Layout } from "antd";
import {
  SettingOutlined,
  PlayCircleOutlined,
  LeftOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

import { updateAppPath } from "../../config/routeAtlas";
import { GlobalStore } from "../../hooks/use-store";

import FormBoard from "./FormBoard";
import ChartBoard from "./ChartBoard";

import "./index.less";

const { Header, Sider, Content } = Layout;

export default function Dashboard() {
  const { runState, setRunState } = GlobalStore.useContainer();

  const handleRun = () => {
    setRunState("running");
  };

  const [isEnable, toggleEnable] = useReducer((state) => {
    return !state;
  }, runState === 'waiting');

  useEffect(() => {
    if (runState === 'running') toggleEnable(true)
  }, [runState])

  return (
    <>
      <PageHeader
        backIcon={<LeftOutlined />}
        title="Simulation"
        onBack={() => updateAppPath({ path: "/" })}
      />
      <Layout>
        <Header style={{ padding: 0 }}>
          <div className="dash-header">
            <span>Simulation</span>
            <Space>
              <Button
                icon={isEnable ? <PlayCircleOutlined /> : <LoadingOutlined />}
                onClick={handleRun}
                type="primary"
                size="small"
                disabled={!isEnable}
              >
                {isEnable && 'Run'}
              </Button>
              <SettingOutlined style={{ fontSize: 16, marginLeft: 4 }} />
            </Space>
          </div>
        </Header>
        <Layout>
          <Sider>
            <FormBoard />
          </Sider>
          <Content>
            <ChartBoard />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
