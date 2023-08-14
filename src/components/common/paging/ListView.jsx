import React, { useState, useEffect, cloneElement } from "react";
import * as S from "./style";

import Paging from "./Paging";

function ListView({
  items,
  count,
  postPerPage,
  currentPage,
  getCurrentPage,
  children
}) {
  function childrenWithProps(item, idx) {
    const chlid = cloneElement(children, { item: item, key: idx });
    return chlid;
  }

  return (
    <>
      {items && items.length > 0 ? (
        items.map((item, idx) => {
          return childrenWithProps(item, idx);
        })
      ) : (
        <S.PagingNoPage>게시된 글이 아직 없습니다!</S.PagingNoPage>
      )}

      <Paging
        page={currentPage}
        count={count}
        postPerPage={postPerPage}
        setPage={getCurrentPage}
      />
    </>
  );
}

export default ListView;
