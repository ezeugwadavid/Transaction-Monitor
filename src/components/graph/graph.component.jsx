import React from "react";
import { GraphContainer } from "./graph.styles";
import ArrowDownSm from "../../assets/arrow-down-sm.svg";
import RightButton from "../../assets/right-button.svg";
import LeftButton from "../../assets/left-button.svg";
import { Area } from "@ant-design/plots";

const Graph = () => {
  const data = [
    { month: "Jan", value: 5 },
    { month: "Feb", value: 8 },
    { month: "Mar", value: 3 },
    { month: "Apr", value: 6 },
    { month: "May", value: 2 },
    { month: "Jun", value: 10 },
  ];

  const config = {
    data,
    xField: "month",
    yField: "value",
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    areaStyle: () => {
      return {
        fill: "#B6E0FF",
        height: "50",
      };
    },
  };
  return (
    <GraphContainer>
      <div className="graph-header-section">
        <div className="left-section">Today: 5, Aug 2018</div>

        <div className="right-section">
          <div className="date-range">
            <div className="range">1 Jan - 1 Jun</div>
            <img src={ArrowDownSm} alt="" />
          </div>

          <div className="controls">
            <div className="left-direction">
              <img className="left-btn" src={LeftButton} alt="" />
            </div>

            <div className="right-direction">
              <img className="right-btn" src={RightButton} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Area className="area" {...config} />
    </GraphContainer>
  );
};

export default Graph;
