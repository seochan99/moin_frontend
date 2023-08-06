import React from "react";
import * as S from "./style";

function Selector() {
  return (
    <>
      <S.SelectorSelect>
        <S.SelectorOption value="recent">최신 순</S.SelectorOption>
        <S.SelectorOption value="rate">평점 순</S.SelectorOption>
      </S.SelectorSelect>
    </>
  );
}
export default Selector;
