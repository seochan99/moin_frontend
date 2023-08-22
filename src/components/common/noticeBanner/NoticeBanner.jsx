import React from "react";
import * as S from "./style";

function NoticeBanner({ title, content }) {
  return (
    <>
      <S.SuggestionHeaderWrapper>
        <S.SuggestionHeaderText>💡&nbsp;&nbsp;{title} </S.SuggestionHeaderText>
        {content}
      </S.SuggestionHeaderWrapper>
    </>
  );
}

export default NoticeBanner;
