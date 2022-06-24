import { Card } from "antd";
import { Typography } from "antd";
import { Badge } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function StatusCard({
  title = "Default size card",
  status = "today",
  content = "02:17",
  width = 300,
}) {
  const statusIcon = (status) => {
    let returnVaalue = null;
    switch (status) {
      case "today":
        returnVaalue = (
          <Text type="secondary" style={{ fontSize: 13 }}>
            <ClockCircleOutlined style={{ marginRight: 5 }} />
            Today
          </Text>
        );
        break;
      case "success":
        returnVaalue = (
          <Text type="secondary" style={{ fontSize: 13 }}>
            <Badge status="success" />
            Live
          </Text>
        );
        break;
      default:
        returnVaalue = (
          <Text type="secondary" style={{ fontSize: 13 }}>
            {status}
          </Text>
        );
    }
    return returnVaalue;
  };

  const titleComponent = !status ? (
    title
  ) : (
    <>
      <Title level={5}>h5. Ant Design</Title>
      {statusIcon(status)}
    </>
  );

  return (
    <Card
      title={titleComponent}
      headStyle={{
        marginTop: -8,
        marginLeft: -10,
        fontSize: 16,
        borderBottom: "none",
      }}
      style={{width : { width },boxShadow:'1px 1px 2px 0 rgb(210 210 210)', margin:10}}
      bodyStyle={{ textAlign: "center", marginBottom: 0, padding: 0 }}
    >
      {typeof content === "string" ? (
        <Text strong style={{ fontSize: 60 }}>
          {content}
        </Text>
      ) : (
        content
      )}
    </Card>
  );
}
