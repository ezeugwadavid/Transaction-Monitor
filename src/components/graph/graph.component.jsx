import React, { useState } from "react";
import { GraphContainer } from "./graph.styles";
import ArrowDownSm from "../../assets/arrow-down-sm.svg";
import RightButton from "../../assets/right-button.svg";
import LeftButton from "../../assets/left-button.svg";
import { Area } from "@ant-design/plots";

const Graph = () => {
  const firstRange = [
    { month: "Jan", value: 5 },
    { month: "Feb", value: 8 },
    { month: "Mar", value: 3 },
    { month: "Apr", value: 6 },
    { month: "May", value: 2 },
    { month: "Jun", value: 10 },
  ];

  const secondRange = [
    { month: "Jul", value: 2 },
    { month: "Aug", value: 6 },
    { month: "Sep", value: 4 },
    { month: "Oct", value: 7 },
    { month: "Nov", value: 9 },
    { month: "Dec", value: 5 },
  ];
  const [data, setData] = useState(firstRange);
  const [dateRange, setDateRange] = useState("1 Jan - 1 Jun");

  const getSecondRange = () => {
    setData(secondRange);
    setDateRange("1 Jul - 1 Dec");
  };
  const getFirstRange = () => {
    setData(firstRange);
    setDateRange("1 Jan - 1 Jun");
  };

  const date = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

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
        <div className="left-section">Today: {date}</div>

        <div className="right-section">
          <div className="date-range">
            <div className="range">{dateRange}</div>
            <img src={ArrowDownSm} alt="" />
          </div>

          <div className="controls">
            <div className="left-direction" onClick={() => getFirstRange()}>
              <img className="left-btn" src={LeftButton} alt="" />
            </div>

            <div className="right-direction" onClick={() => getSecondRange()}>
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
