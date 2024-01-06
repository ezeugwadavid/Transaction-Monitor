import React from "react";
import { DesktopHeaderContainer } from "./desktop-header.styles";
import Avatar from "../../assets/avatar.png";
import Bell from "../../assets/bell-icon.svg";
import Search from "../../assets/search.svg";
const DesktopHeader = () => {
  return (
    <DesktopHeaderContainer>
      <div className="left-section">
        <div className="logo">TransMonitor</div>
        <div className="search-container">
          <div className="search-icon">
            <img src={Search} alt="" />
          </div>
          <input placeholder="Search..." type="search" />
        </div>
      </div>

      <div className="right-section">
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
      </div>
    </DesktopHeaderContainer>
  );
};

export default DesktopHeader;
