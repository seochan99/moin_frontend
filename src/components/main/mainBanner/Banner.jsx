import React from "react";
import * as S from "./style";

function Banner(props) {
  return (
    <S.BannerWrapper>
      <S.BannerImg src={props.bannerImg} />
    </S.BannerWrapper>
  );
}

export default Banner;
