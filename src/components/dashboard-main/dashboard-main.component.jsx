import React from "react";
import { DashboardMainContainer } from "./dashboard-main.styles";
import TransactionCard from "../transaction-card/transaction-card.component";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Graph from "../graph/graph.component";
import GraphDesc from "../graph-desc/graph-desc.component";
import TableComp from "../table-comp/table-comp.component";

const DashboardMain = () => (
  <DashboardMainContainer>
    <div className="main-content">
      <Row className="g-0">
        <Col  xs={12} sm={6} md={6} lg={3} >
          <TransactionCard />
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}>
          <TransactionCard />
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}>
          <TransactionCard />
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}>
          <TransactionCard />
        </Col>
      </Row>

      <Row className="g-0">
        <Col xs={12} sm={8}>
          <Graph />
        </Col>

        <Col xs={12} sm={4}>
          <GraphDesc />
        </Col>
      </Row>

      <Row className="g-0">
        <Col xs={12}>
          <TableComp />
        </Col>
      </Row>
    </div>
  </DashboardMainContainer>
);

export default DashboardMain;
