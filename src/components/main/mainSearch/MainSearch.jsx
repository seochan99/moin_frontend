import React from "react";
import * as S from "./style";

import { AiOutlineSearch } from "react-icons/ai";

function MainSearch() {
  return (
    <>
      <S.MainSearchWrapper>
        <AiOutlineSearch size={"25px"} />
        <S.MainSearchInput placeholder="필요한 인공지능 서비스를 검색하세요!" />
      </S.MainSearchWrapper>
    </>
  );
}

export default MainSearch;
