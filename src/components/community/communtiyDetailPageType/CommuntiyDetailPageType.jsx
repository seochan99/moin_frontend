import React, { useEffect, useState } from "react";
import * as S from "./style";
import RightArrowBlue from "../../../assets/images/icon/rightArrowBlue.png";

function CommuntiyDetailPageType({ type, aiName }) {
  return (
    <S.DetailPageType>
      {aiName && (
        <>
          <S.DetailPageAiText>{aiName}</S.DetailPageAiText>
        </>
      )}
      <S.RightArrowBlueIcon src={RightArrowBlue}></S.RightArrowBlueIcon>
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
          : "기타"}
      </S.DetailPageTypeText>
    </S.DetailPageType>
  );
}

export default CommuntiyDetailPageType;
