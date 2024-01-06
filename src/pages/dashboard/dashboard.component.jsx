import React from "react";
import { DashboardContainer } from "./dashboard.styles";
import DesktopHeader from "../../components/desktop-header/desktop-header.component";
import SideNav from "../../components/sidenav/sidenav.component";
import DashboardMain from "../../components/dashboard-main/dashboard-main.component";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <div className="header-nav">
      <DesktopHeader />
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
