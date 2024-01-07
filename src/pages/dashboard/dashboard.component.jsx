import React from "react";
import { DashboardContainer } from "./dashboard.styles";
import SideNav from "../../components/sidenav/sidenav.component";
import DashboardMain from "../../components/dashboard-main/dashboard-main.component";
import Header from "../../components/header/header.component";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <div className="header-nav">
      <Header />
      </div>
      
    <div className="body">
      <div className="left">
        <SideNav />
      </div>

      <div className="right">
        <DashboardMain />
      </div>

    </div>
    </DashboardContainer>
  );
};

export default Dashboard;
