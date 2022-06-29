import React, { useMemo } from "react";
import { Row, Col, Divider } from "antd";
import SimulationTag from "../../simulationTag";

const CallNumberTable = ({ sourceData = [], tableData = [] }) => {
  const totalCallNumbers = useMemo(() => {
    if (tableData.length) {
      const total = tableData.reduce((a, b) => {
        return a + (b.sales + b.billing + b.orders);
      }, 0);
      return total;
    } else {
      return 0;
    }
  }, [tableData]);

  return (
    <>
      <div style={{ marginBottom: "8px" }}>
        <Row>
          <Col span={12}>
            <div style={{ fontWeight: "bold" }}>Total Number of Calls</div>
          </Col>
          <Col span={12}>
            <div style={{ textAlign: "right", fontWeight: "bold" }}>
              <span>{totalCallNumbers}</span>
            </div>
          </Col>
        </Row>
      </div>

      <Row style={{ height: 4 }}>
        <Col span={9}></Col>
        <Col span={5}>
          <SimulationTag text="Sales" />
        </Col>
        <Col span={5}>
          <SimulationTag text="Billing" />
        </Col>
        <Col span={5}>
          <SimulationTag text="Orders" />
        </Col>
      </Row>

      <Divider style={{ margin: "8px, 0" }} />

      <div style={{ maxHeight: "222px", overflowY: "scroll" }}>
        {sourceData.map((e, i) => {
          if (i < sourceData.length - 1) {
            return (
              <div key={i} style={{ marginBottom: "4px" }}>
                <Row>
                  <Col span={9}>
                    <span>{e + " - " + sourceData[i + 1]}</span>
                  </Col>
                  <Col span={5}>{tableData[i]?.sales || 0}</Col>
                  <Col span={5}>{tableData[i]?.billing || 0}</Col>
                  <Col span={5}>{tableData[i]?.orders || 0}</Col>
                </Row>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
};

export default CallNumberTable;
