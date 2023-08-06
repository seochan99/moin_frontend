import React from "react";
import Pagination from "react-js-pagination";
import "./style.css";
const Paging = ({ page, count, postPerPage, setPage }) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={postPerPage}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={setPage}
    />
  );
};

export default Paging;
