import * as S from "./style";
import React from "react";

function ProfileHeader({ title, img }) {
  return (
    <>
      <S.ProfileInfoHeaderWrapper>
        <S.ProfileInfoHeaderTitle>
          <S.myPageUserIcon src={img} />
          <S.ProfileInfoHeaderTitleName>{title}</S.ProfileInfoHeaderTitleName>
        </S.ProfileInfoHeaderTitle>
      </S.ProfileInfoHeaderWrapper>
    </>
  );
}

export default ProfileHeader;
