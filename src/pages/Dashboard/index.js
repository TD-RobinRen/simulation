import { useEffect, useState } from "react";
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
import CardBoard from "./CardBoard";

import "./index.less";

const { Header, Sider, Content } = Layout;

export default function Dashboard() {
  const { runState, setRunState } = GlobalStore.useContainer();

  const handleRun = () => {
    setRunState("running");
  };

  const [isEnable, setEnable] = useState(runState === 'waiting');

  useEffect(() => {
    switch(runState) {
      case 'running':
        setEnable(false)
        break;
      case 'pause':
        setEnable(true)
        break;
      default:
    }
  }, [runState]);

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
                {isEnable && "Run"}
              </Button>
              <SettingOutlined style={{ fontSize: 16, marginLeft: 4 }} />
            </Space>
          </div>
        </Header>
        <Layout>
          <Sider width="33.33%" style={{borderRight:'1px solid #f0f0f0'}}>
            <FormBoard />
          </Sider>
          <Content>
            <ChartBoard />
            <CardBoard />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
