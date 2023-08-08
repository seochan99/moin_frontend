// AuthSocialButton.js

import React from "react";
import * as S from "./style";

const AuthSocialButton = ({ onClick, imgSrc, altText, buttonText }) => {
  return (
    <S.AuthSocialButton onClick={onClick}>
      <S.AuthSocialButtonImg src={imgSrc} alt={altText} />
      <S.AuthSocialButtonText>{buttonText}</S.AuthSocialButtonText>
    </S.AuthSocialButton>
  );
};

export default AuthSocialButton;
