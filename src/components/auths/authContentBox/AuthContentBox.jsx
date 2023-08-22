import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

function AuthContentBox({ content, img, link, userDetailInfo }) {
  const navigate = useNavigate();
  return (
    <>
      <S.ProfileInfoContent
        onClick={() => {
          navigate(`/mypage/${link}`, { state: userDetailInfo });
        }}
      >
        <S.ProfileInfoContentIcon src={img} />
        <S.ProfileInfoContentTitle>{content}</S.ProfileInfoContentTitle>
      </S.ProfileInfoContent>
    </>
  );
}

export default AuthContentBox;
