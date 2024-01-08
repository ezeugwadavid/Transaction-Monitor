import styled from "styled-components";
export const TableContainer = styled.div`
  margin-top: 40px;
  margin-left: 10px;

  .table-title {
    display: flex;
    justify-content: start;
    margin-bottom: 15px;
    color: #262626;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .table-nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .nav-left {
    display: flex;
    width: 60%;
  }

  .t1 {
    color: #262626;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 20px;
  }

  .t2 {
    color: #1875f0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 20px;
  }

  .t3 {
    color: #262626;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 15%;
  }

  .nav-center {
    display: flex;
  }

  .table-search {
    border-bottom: 1px solid #787878;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    background: #f7f8fa;
    color: #787878;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 20px;
    padding-right: 15px;
  }

  .table-search:focus {
    outline: none;
  }

  .search-svg {
    position: relative;
    left: 10px;
  }

  .nav-end {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }

  .sort {
    position: relative;
    width: 15%;
    z-index: 1;
  }

  .sort-by {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 4px 10px 0px rgba(79, 79, 79, 0.07);
    position: absolute;
  }

  .sort-item {
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    color: #414042;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }

  .sort-item:hover {
    background: #f4f4f4;
  }

  th {
    text-align: left;
    background: #eaeef0;
    padding: 10px;
    color: #7f8fa4;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  td {
    text-align: left;
  }

  .type {
    display: flex;
  }

  .type-circle {
    background: #7f8fa4;
    padding: 10px;
    border-radius: 50px;
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 10px;
  }

  .spec {
    margin: auto 0px;
    color: #414042;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .price,
  .trans,
  .time {
    color: #7f8fa4;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
  }

  .state {
    display: flex;
    justify-content: space-evenly;
    border-radius: 30px;
    border: 1px solid #cccfd4;
    padding: 10px 10px;
  }

  .circle-dot-yellow {
    width: 9px;
    height: 9px;
    background-color: #ebc315;
    border-radius: 50px;
    margin: auto 0px;
  }
  .circle-dot-green {
    width: 9px;
    height: 9px;
    background-color: #27ae60;
    border-radius: 50px;
    margin: auto 0px;
  }
  .circle-dot-grey {
    width: 9px;
    height: 9px;
    background-color: #7f8fa4;
    border-radius: 50px;
    margin: auto 0px;
  }

  .state-txt-yellow {
    color: #ebc315;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .state-txt-green {
    color: #27ae60;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .state-txt-grey {
    color: #7f8fa4;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .arr-down-lg {
    color: #cccfd4;
  }

  .table-bottom {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
  }

  .left-bottom {
    color: #000;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .right-bottom {
    display: flex;
    list-style: none;
  }

  .prev {
    border: 1px solid #ced0da;
    padding: 5px;
    color: #000;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none !important;
  }

  .highlight {
    background: #1875f0;
    color: #fff !important;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 5px 10px;
  }

  .num {
    border: 1px solid #ced0da;
    color: #979797;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 5px 10px;
  }

  @media screen and (max-width: 576px) {
    .nav-left {
      display: flex;
      justify-content: start;
      flex-direction: column;
      width: 90%;
    }

    .t1 {
      text-align: left;
      margin-right: 0px;
    }

    .t2 {
      text-align: left;
      margin-right: 0px;
      margin-bottom: 15px;
    }

    .t3 {
      text-align: left;
      margin-right: 0%;
      margin-bottom: 15px;
    }

    .nav-center {
      display: flex;
    }

    .table-search {
      padding-left: 15px;
      padding-right: 0px;
    }

    .table-search:focus {
      outline: none;
    }

    .search-svg {
      position: relative;
      left: 5px;
    }

    .nav-end {
      width: 100%;
    }

    .sort {
      width: 50%;
    }

    .sort-by {
      width: 100%;
    }

    .type-circle {
      padding: auto;
      font-size: 10px;
      height: 35px;
    }

    .spec {
      font-size: 12px;
    }

    .state {
      border-radius: 20px;
      padding: 5px 5px;
    }

    .state-txt-yellow {
      font-size: 10px;
    }
    .state-txt-green {
      font-size: 10px;
    }

    .state-txt-grey {
      font-size: 10px;
    }

    .table-container {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .right-bottom {
      margin-right: 10%;
    }

    .table-container {
      margin-right: 10%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 806px) {
    .type-circle {
      padding: auto;
      font-size: 10px;
      height: 35px;
    }
  }
`;
