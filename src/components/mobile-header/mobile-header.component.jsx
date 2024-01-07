import React, { useState } from "react";
import { MobileHeaderContainer } from "./mobile-header.styles";
import HambugerIcon from "../../assets/menu-left-icon.svg";
import ArrowDownLg from "../../assets/arr-down-lg.svg";
import Avatar from "../../assets/avatar.png";
import Bell from "../../assets/bell-icon.svg";
import Search from "../../assets/search.svg";
import SideNav from "../sidenav/sidenav.component";

const MobileHeader = () => {
  const [showTopNav, setShowTopNav] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  const closeSideNav = () => {
    setShowSideNav(!showSideNav);
  };
  return (
    <MobileHeaderContainer>
      <div className="top-nav">
        <div className="hambuger">
          <img
            src={HambugerIcon}
            alt=""
            onClick={() => setShowSideNav(!showSideNav)}
          />
        </div>
        <div className="header-logo">TransMonitor</div>
        <div className="arr-menu" onClick={() => setShowTopNav(!showTopNav)}>
          <img src={ArrowDownLg} alt="" />
        </div>
      </div>

      <div className="menu-section">
        {showTopNav ? (
          <div className="hidden-top-menu-right">
            <div className="header-item">Support</div>
            <div className="header-item">FAQ</div>
            <div className="header-item">
              <div className="bell-container">
                <img className="bell-icon" src={Bell} alt="" />
                <div className="badge">8</div>
              </div>
            </div>

            <div className="user-item">
              <div className="user-details">
                <div className="greet-text">Hello</div>
                <div className="name">Oluwaleke Ojo</div>
              </div>

              <div className="user-avatar">
                <img className="avatar" src={Avatar} alt="" />
              </div>
            </div>

            <div className="search-container">
              <div className="search-icon">
                <img src={Search} alt="" />
              </div>
              <input placeholder="Search..." type="search" />
            </div>
          </div>
        ) : (
          ""
        )}

        {showSideNav ? (
          <div className="side-nav">
            <SideNav closeSideNav={closeSideNav} close={true} />
          </div>
        ) : (
          ""
        )}
      </div>
    </MobileHeaderContainer>
  );
};

export default MobileHeader;
