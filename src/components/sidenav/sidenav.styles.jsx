import styled from "styled-components";

export const SideNavContainer = styled.div`
  .sidenav-cover {
    background: #fff;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: -1;
    padding-top: 90px;
    border: 1px solid black;
    overflow-y: scroll;
  }

  .sidenav-cover::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .sidenav-cover {
    -ms-overflow-style: none; /* Internet Explorer and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .invoice {
    padding: 15px 20px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-top-left-radius: 30px;
    color: #fff;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.2px;
    background-color: #27ae60;
    width: 70%;
    margin-left: 30px;
    width: 160px;
  }

  .main {
    margin-top: 30px;
    margin-bottom: 15px;
  }

  .main-text {
    padding-left: 45px;
    color: #647787;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: start;
    margin-bottom: 15px;
  }

  .side-nav-item {
    display: flex;
    cursor: pointer;
  }

  .active {
    background: #e8f1fd;
    border-left: 4px solid #1875f0;
    padding: 15px 0px;
  }

  .overview-icon {
    padding-left: 45px;
  }

  .side-nav-text {
    color: #647787;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 15px;
  }

  .payments {
    margin-top: 40px;
  }

  .payments-item {
    padding: 15px 0px;
  }

  .payments-icon {
    padding-left: 45px;
  }

  .orders {
    margin-top: 40px;
  }

  .order-item {
    padding: 15px 0px;
  }

  .orders-icon {
    padding-left: 45px;
  }
`;
