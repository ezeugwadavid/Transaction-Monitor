import React from "react";
import { TransactionCardContainer } from "./transaction-card.styles";
import SmallChart from "../../assets/small-chart.svg";

const TransactionCard = () => (
  <TransactionCardContainer>
    <div className="trans-left">
      <div className="trans-text">Daily Transaction Volume</div>
      <div className="trans-no">2,342</div>
    </div>
    <div className="trans-right">
      <img src={SmallChart} alt="" />
    </div>
  </TransactionCardContainer>
);

export default TransactionCard;
