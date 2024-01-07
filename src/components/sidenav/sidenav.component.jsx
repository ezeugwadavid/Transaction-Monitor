import React from "react";
import { SideNavContainer } from "./sidenav.styles";
import ManualSettlementIcon from "../../assets/manual-settlement-icon.svg";
import OrdersIcon from "../../assets/orders-icon.svg";
import OverviewIcon from "../../assets/overview-icon.svg";
import PaymentsIcon from "../../assets/payments-icon.svg";
import PendingOrdersIcon from "../../assets/pending-orders-icon.svg";
import ProfileIcon from "../../assets/profile-icon.svg";
import ReconcilledOrdersIcon from "../../assets/reconcilled-orders-icon.svg";
import ReconcilledPaymentsIcon from "../../assets/reconcilled-payments-icon.svg";
import UnReconcilledPaymentsIcon from "../../assets/un-reconcilled-payments-icon.svg";
import PropTypes from "prop-types";

const SideNav = ({ close, closeSideNav }) => {
  return (
    <SideNavContainer>
      <div className="sidenav-cover">
        {close ? (
          <div className="close" onClick={closeSideNav}>
            <div className="close-text">X</div>
          </div>
        ) : (
          ""
        )}
        <div className="invoice">GENERATE INVOICE</div>

        <div className="main">
          <div className="main-text">Main</div>
          <div className="side-nav-item active">
            <img className="overview-icon" src={OverviewIcon} alt="" />
            <div className="side-nav-text">Overview</div>
          </div>
        </div>

        <div className="payments">
          <div className="main-text">Payments</div>

          <div className="side-nav-item payments-item">
            <img className="payments-icon" src={PaymentsIcon} alt="" />
            <div className="side-nav-text">All Payments</div>
          </div>

          <div className="side-nav-item payments-item">
            <img
              className="payments-icon"
              src={ReconcilledPaymentsIcon}
              alt=""
            />
            <div className="side-nav-text">Reconcilled Payments</div>
          </div>

          <div className="side-nav-item payments-item">
            <img
              className="payments-icon"
              src={UnReconcilledPaymentsIcon}
              alt=""
            />
            <div className="side-nav-text">Un - Reconcilled Payments</div>
          </div>

          <div className="side-nav-item payments-item">
            <img className="payments-icon" src={ManualSettlementIcon} alt="" />
            <div className="side-nav-text">Manual Settlement</div>
          </div>
        </div>

        <div className="orders">
          <div className="main-text">Orders</div>

          <div className="side-nav-item order-item">
            <img className="orders-icon" src={OrdersIcon} alt="" />
            <div className="side-nav-text">All Orders</div>
          </div>

          <div className="side-nav-item order-item">
            <img className="orders-icon" src={PendingOrdersIcon} alt="" />
            <div className="side-nav-text">Pending Orders</div>
          </div>

          <div className="side-nav-item order-item">
            <img className="orders-icon" src={ReconcilledOrdersIcon} alt="" />
            <div className="side-nav-text">Reconcilled Orders</div>
          </div>

          <div className="side-nav-item order-item">
            <img className="orders-icon" src={ProfileIcon} alt="" />
            <div className="side-nav-text">Merchant Profile</div>
          </div>
        </div>
      </div>
    </SideNavContainer>
  );
};

SideNav.propTypes = {
  close: PropTypes.bool,
  closeSideNav: PropTypes.func
};

export default SideNav;
