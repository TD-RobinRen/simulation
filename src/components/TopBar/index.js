import { Typography } from "antd";
import { SettingOutlined } from "@ant-design/icons";

const { Title } = Typography;

export default function TopBar() {
  return (
    <>
      <Title level={2} style={{fontWeight:'250',lineHeight:'70px',margin:0}}>Simulation</Title>
      <SettingOutlined style={{fontSize:'18px',lineHeight:'70px'}}/>
    </>
  );
}