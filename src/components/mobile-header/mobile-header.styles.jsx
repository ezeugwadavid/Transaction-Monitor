import styled from "styled-components";
export const MobileHeaderContainer = styled.div`
  .hidden-top-menu-right {
    background: #fff;
    padding: 20px;
  }

  .search-container {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    width: 50%;
  }

  .search-icon {
    margin: auto 0px;
    position: relative;
    left: 30px;
  }

  input {
    padding: 10px;
    color: #979797;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: 1px solid #fff;
    margin: auto 0px;
    text-align: center;
  }

  input:focus {
    outline: none;
    border: 1px solid #fff;
    margin: auto 0px;
    text-align: center;
  }

  .bell-container {
  }

  .badge {
    position: relative;
    bottom: 10px;
    right: 10px;
  }

  .badge {
    padding: auto;
    border-radius: 50px;
    background: #1860ec;
    color: #fcfdff;
    text-align: center;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .top-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2%;
    padding-right: 2%;
    height: 60px;
    background: #fff;
    box-shadow: 0px 4px 10px 0px rgba(79, 79, 79, 0.07);
  }

  .header-logo {
    color: #1875f0;
    text-align: right;
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  .header-item {
    color: #647787;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 20px 0px;
    margin-right: 30px;
  }

  .user-item {
    display: flex;
    justify-content: center;
  }

  .greet-text {
    color: #647787;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: lowercase;
    text-align: right;
  }

  .name {
    color: #647787;
    text-align: center;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .user-details {
    margin-right: 10px;
  }

  .user-item {
    margin: auto 0px;
  }

  .avatar {
    border-radius: 50px;
    width: 36px;
    height: 36px;
  }

  .side-nav {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
  }
`;
