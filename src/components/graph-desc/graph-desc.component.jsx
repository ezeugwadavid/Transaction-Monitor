import React from "react";
import { GraphDescContainer } from "./graph-desc.styles";
import LinearProgress from "../../assets/linear-area.svg";

const GraphDesc = () => (
  <GraphDescContainer>
    <div className="order-section">
      <div className="ordertitle">Orders</div>
      <img className="linear-progress" src={LinearProgress} alt="" />
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
      <img className="linear-progress" src={LinearProgress} alt="" />
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

export default GraphDesc;
