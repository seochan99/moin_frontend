import React from "react";
import * as S from "./style";

const Banner = ({ titleKorean, titleEnglish, image }) => {
  return (
    <S.ProfileBanner>
      <S.ProfileBannerHeaderWrapper>
        <S.ProfileBannerHeaderContainer>
          <S.ProfileBannerHeaderTitleBox>
            {titleKorean}
          </S.ProfileBannerHeaderTitleBox>
          <S.ProfileBannerHeaderTitle>
            {titleEnglish}
          </S.ProfileBannerHeaderTitle>
        </S.ProfileBannerHeaderContainer>
        {image}
      </S.ProfileBannerHeaderWrapper>
    </S.ProfileBanner>
  );
};

export default Banner;
