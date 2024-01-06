import styled from "styled-components";

export const DesktopHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding-left: 45px;
  padding-right: 45px;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(79, 79, 79, 0.07);
  .logo {
    font-family: "Roboto", sans-serif;
    color: #1875f0;
    margin: auto 0px;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-right: 25%;
  }

  .left-section {
    display: flex;
  }

  .search-container {
    display: flex;
  }

  .search-icon {
    margin: auto 10px;
  }

  input {
    padding: 10px;
    color: #979797;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: 1px solid #fff;
    margin: auto 0px;
  }

  input:focus {
    outline: none;
    border: 1px solid #fff;
    margin: auto 0px;
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

  .right-section {
    display: flex;
  }

  .header-item {
    color: #647787;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: auto 0px;
    margin-right: 30px;
  }

  .user-item {
    display: flex;
  }

  .greet-text {
    color: #647787;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: lowercase;
    text-align: right;
  }

  .name {
    color: #647787;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .user-details {
    margin-right: 10px;
  }

  .user-avatar {
  }

  .user-item {
    margin: auto 0px;
  }

  .avatar {
    border-radius: 50px;
    width: 36px;
    height: 36px;
  }

  @media screen and (max-width: 800px) {
  }
`;
