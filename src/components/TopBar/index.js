import { Typography } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { Button } from 'antd';

const { Title } = Typography;

export default function TopBar() {
  return (
    <>
      <Title level={2} style={{fontWeight:'250',lineHeight:'70px',margin:0}}>Simulation</Title>
      <div><Button type="primary" style={{width:90, backgroundColor:"#f0f0f0",border:'none',color:'#434343',margin:8}} onClick={()=>{}}>Run</Button>
      <SettingOutlined style={{fontSize:'18px',lineHeight:'70px'}}/></div>
    </>
  );
}