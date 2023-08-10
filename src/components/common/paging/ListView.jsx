import React, { useState, useEffect, cloneElement } from "react";
import * as S from "./style";

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
  }, [
    items,
    count,
    currentpage,
    indexOfFirstPost,
    indexOfLastPost,
    postPerPage
  ]);

  const setPage = e => {
    setCurrentpage(e);
  };

  return (
    <>
      {currentPosts && items.length > 0 ? (
        currentPosts.map((item, idx) => {
          return childrenWithProps(item, idx);
        })
      ) : (
        <S.PagingNoPage>게시된 글이 아직 없습니다!</S.PagingNoPage>
      )}

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
