import React, { useState } from "react";
import { TableContainer } from "./table-comp.styles";
import ArrowDownBlue from "../../assets/arrow-down-blue.svg";
import Search from "../../assets/search.svg";
import ArrowDownLg from "../../assets/arr-down-lg.svg";
import Table from "react-bootstrap/Table";
import { tableData } from "../../utils/dummy";

const TableComp = () => {
  const [showSort, setShowSort] = useState(false);
  const [dummyData, setDummyData] = useState(tableData);

  const getReconcilled = () => {
    setShowSort(!showSort);
    setDummyData(tableData.filter((data) => data.type === "Reconcilled"));
  };

  const getPending = () => {
    setShowSort(!showSort);
    setDummyData(tableData.filter((data) => data.type === "Pending"));
  };

  const getUnreconcilled = () => {
    setShowSort(!showSort);
    setDummyData(tableData.filter((data) => data.type === "Un-reconcilled"));
  };

  const getAll = () => {
    setShowSort(!showSort);
    setDummyData(tableData);
  };

  return (
    <TableContainer>
      <div className="table-title">Payments</div>
      <div className="table-nav">
        <div className="nav-left">
          <div className="t1">Showing</div>
          <div className="t2">
            20{" "}
            <span className="arr-down">
              <img src={ArrowDownBlue} alt="" />{" "}
            </span>
          </div>
          <div className="t3">out of 500 payments</div>

          <div className="nav-center">
            <img className="search-svg" src={Search} alt="" />
            <input
              className="table-search"
              placeholder="Search payments"
              type="search"
            />
          </div>
        </div>

        {!showSort ? (
          <div className="nav-end">
            Show{" "}
            <span
              className="show-arr-down"
              onClick={() => setShowSort(!showSort)}
            >
              <img src={ArrowDownBlue} alt="" />
            </span>
          </div>
        ) : (
          <div className="sort">
            <div className="sort-by">
              <div className="sort-item" onClick={() => setShowSort(!showSort)}>
                <div className="sort-text">All</div>
                <img src={ArrowDownBlue} alt="" />
              </div>

              <div className="sort-item" onClick={() => getAll()}>
                <div className="sort-text">All</div>
              </div>
              <div className="sort-item" onClick={() => getReconcilled()}>
                <div className="sort-text">Reconcilled</div>
              </div>
              <div className="sort-item" onClick={() => getUnreconcilled()}>
                <div className="sort-text">Un-reconcilled</div>
              </div>

              <div className="sort-item">
                <div className="sort-text">Settled</div>
              </div>

              <div className="sort-item" onClick={() => getPending()}>
                <div className="sort-text">Unsettled</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="table-container">
        <Table responsive>
          <thead>
            <tr className="t-head">
              <th>Item Type</th>
              <th>Price</th>
              <th>Transaction No</th>
              <th>Time</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((data) => {
              return (
                <tr key={data.id}>
                  <td className="type">
                    <div className="type-circle">VW</div>
                    <div className="spec">{data.itemtype}</div>
                  </td>
                  <td>
                    <div className="price">{data.price}</div>
                  </td>
                  <td>
                    <div className="trans">{data.transactionnumber}</div>
                  </td>
                  <td>
                    <div className="time">{data.time}</div>
                  </td>
                  <td>
                    <div className="state">
                      <div
                        className={
                          data.type === "Pending"
                            ? "circle-dot-yellow"
                            : data.type === "Reconcilled"
                            ? "circle-dot-green"
                            : data.type === "Un-reconcilled"
                            ? "circle-dot-grey"
                            : "circle-dot-yellow"
                        }
                      ></div>
                      <div
                        className={
                          data.type === "Pending"
                            ? "state-txt-yellow"
                            : data.type === "Reconcilled"
                            ? "state-txt-green"
                            : data.type === "Un-reconcilled"
                            ? "state-txt-grey"
                            : "state-txt-yellow"
                        }
                      >
                        {data.type}
                      </div>
                    </div>
                  </td>

                  <td>
                    <img className="arr-down-lg" src={ArrowDownLg} alt="" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      <div className="table-bottom">
        <div className="left-bottom">Showing 1 to 10 of 500 entries</div>
        <div className="right-bottom">
          <div className="prev">Previous</div>
          <div className="highlight">1</div>
          <div className="num">2</div>
          <div className="prev">Next</div>
        </div>
      </div>
    </TableContainer>
  );
};

export default TableComp;
