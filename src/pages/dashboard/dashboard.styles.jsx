import styled from "styled-components";

export const DashboardContainer = styled.div`
  font-family: "Segoe UI", sans-serif;

  .header-nav {
    position: fixed;
    width: 100%;
  }

  .body {
    display: flex;
  }

  .left {
    width: 20%;
    display: block;
  }

  .right {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    .left {
      display: none;
    }

    .right {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .left {
      width: 35%;
      display: block;
    }

    .right {
      width: 75%;
    }
  }
`;
