import styled from "styled-components";
export const GraphContainer = styled.div`
  border-radius: 2px;
  border: 1px solid #eef8fd;
  background: #fff;
  margin-left: 10px;
  margin-top: 20px;

  .graph-header-section {
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
  }

  .left-section {
    color: #4f4f4f;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .right-section {
    display: flex;
  }

  .date-range {
    display: flex;
    border: 1px solid #dde0e3;
    border-radius: 5px;
    width: 100%;
    padding: 10px;
    color: #7f8fa4;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 30px;
    cursor: pointer;
  }

  .range {
    margin-right: 20px;
  }

  .controls {
    display: flex;
    margin: auto 0px;
    cursor: pointer;
  }

  .left-direction {
    margin-right: 20px;
  }

  .area {
    height: 245px !important;
    padding-left: 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 90%;
  }

  @media screen and (max-width: 576px) {
    .left-section {
      margin: auto 5px;
      font-size: 14px;
    }
  }
`;
