import React from "react";
import { GraphDescContainer } from "./graph-desc.styles";
import { Progress } from "@ant-design/plots";

const GraphDesc = () => {
  const config = {
    height: 8,
    autoFit: true,
    percent: 0.7,
    barWidthRatio: 0.3,
    color: ["#27AE60", "#FDC203"],
  };

  return (
    <GraphDescContainer>
      <div className="order-section">
        <div className="ordertitle">Orders</div>
        <Progress className="linear-progress" {...config} />
        <div className="pending-orders">
          Pending Orders: <span className="yellow">20</span>
        </div>
        <div className="recon-orders">
          Reconcilled Orders: <span className="green">80</span>
        </div>
        <div className="total-orders">
          Total Orders: <span className="blue">100</span>
        </div>
      </div>

      <div className="payments-section">
        <div className="ordertitle">Payments</div>
        <Progress className="linear-progress" {...config} />
        <div className="pending-orders">
          Un-reconcilled Payments: <span className="yellow">20</span>
        </div>
        <div className="recon-orders">
          Reconcilled Payments: <span className="green">80</span>
        </div>
        <div className="total-orders">
          Total Payments: <span className="blue">100</span>
        </div>
      </div>
    </GraphDescContainer>
  );
};

export default GraphDesc;
