import styled from "styled-components";
export const DashboardMainContainer = styled.div`
  .main-content {
    background: #f7f8fa;
    padding-left: 2%;
    padding-right: 45px;
    padding-top: 90px;
    width: 80%;
    height: 100%;
    z-index: -1;
    position: fixed;
    overflow-y: scroll;
  }

  .main-content::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .main-content {
    -ms-overflow-style: none; /* Internet Explorer and Edge */
    scrollbar-width: none; /* Firefox */
  }

  @media screen and (max-width: 768px) {
    .main-content {
    width: 100%;
    padding-right: 2%;
  }
  };
`;
