import React, { useState, useEffect, cloneElement } from "react";

import Paging from "./Paging";

function ListView({ items, postPerPage, children }) {
  function childrenWithProps(item, idx) {
    const chlid = cloneElement(children, { item: item, key: idx });
    return chlid;
  }
  const [count, setCount] = useState(0);
  const [currentpage, setCurrentpage] = useState(1); //현재페이지

  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(0);

  //items호출
  useEffect(() => {
    setCount(items.length);
    setIndexOfLastPost(currentpage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(items.slice(indexOfFirstPost, indexOfLastPost));
  }, [count, currentpage, indexOfFirstPost, indexOfLastPost, postPerPage]);

  const setPage = e => {
    setCurrentpage(e);
  };

  return (
    <>
      {currentPosts && items.length > 0
        ? currentPosts.map((item, idx) => {
            return childrenWithProps(item, idx);
          })
        : console.log("게시글이 없습니다.")}

      <Paging
        page={currentpage}
        count={count}
        postPerPage={postPerPage}
        setPage={setPage}
      />
    </>
  );
}

export default ListView;
