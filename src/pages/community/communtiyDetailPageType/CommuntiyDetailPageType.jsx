import React, { useEffect, useState } from "react";
import * as S from "./style";

function CommuntiyDetailPageType({ type, aiName }) {
  return (
    <S.DetailPageType>
      {aiName && (
        <>
          <S.DetailPageAiText>{aiName}</S.DetailPageAiText>
        </>
      )}

      <S.DetailPageTypeText>
        {type === "commons"
          ? "자유게시판"
          : type === "tips"
          ? "이용꿀팁"
          : type === "qnas"
          ? "Q&A"
          : type === "suggestion"
          ? "건의사항"
          : type === "notice"
          ? "공지사항"
          : "수정"}
      </S.DetailPageTypeText>
    </S.DetailPageType>
  );
}

export default CommuntiyDetailPageType;
