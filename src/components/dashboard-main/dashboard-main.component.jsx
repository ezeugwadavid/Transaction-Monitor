import React from "react";
import { DashboardMainContainer } from "./dashboard-main.styles";
import TransactionCard from "../transaction-card/transaction-card.component";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DashboardMain = () => (
  <DashboardMainContainer>
    <Row className="g-0">
      <Col xs={6} sm={3}>
        <TransactionCard />
      </Col>
      <Col xs={6} sm={3}>
        <TransactionCard />
      </Col>
      <Col xs={6} sm={3}>
        <TransactionCard />
      </Col>
      <Col xs={6} sm={3}>
        <TransactionCard />
      </Col>
    </Row>
  </DashboardMainContainer>
);

export default DashboardMain;
