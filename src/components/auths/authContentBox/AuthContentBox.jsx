import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

function AuthContentBox({ content, img, link }) {
  const navigate = useNavigate();
  return (
    <>
      <S.ProfileInfoContent
        onClick={() => {
          navigate(`/mypage/${link}`);
        }}
      >
        <S.ProfileInfoContentIcon src={img} />
        <S.ProfileInfoContentTitle>{content}</S.ProfileInfoContentTitle>
      </S.ProfileInfoContent>
    </>
  );
}

export default AuthContentBox;
