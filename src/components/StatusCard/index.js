import { Card } from "antd";
import { Typography } from "antd";
import { Badge } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function StatusCard({
  title = "Default size card",
  status,
  content,
  width = 200,
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
      case "live":
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

  const titleComponent = (
    <>
      <Title level={5}>{title}</Title>
      <div style={{ height: 15 }}>{status && statusIcon(status)}</div>
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
      style={{
        width: width,
        height: 200,
        boxShadow: "1px 1px 2px 0 rgb(210 210 210)",
        margin: 10,
        // paddingBottom: 16,
      }}
      bodyStyle={{ textAlign: "center", marginBottom: 0, padding: 0,height: 130}}
    >
      {typeof content === "string" ? (
        <Text strong style={{ fontSize: 60 }}>
          {content}
        </Text>
      ) : (
        content ?? (
          <Text disabled style={{ fontSize: 60 }}>
            Ø
          </Text>
        )
      )}
    </Card>
  );
}
