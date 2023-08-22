import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../context/authState"; // Update the path to your authState.j
import * as S from "./style";
// png
import Banner from "../../components/common/banner/Banner";

function Profile() {
  return (
    <S.ProfileWrapper>
      <Banner
        titleKorean="마이페이지"
        titleEnglish="My Page"
        image={<S.MypageBookImg />}
      />
      <S.ProfileInfoWrapper>
        <Outlet />
      </S.ProfileInfoWrapper>
    </S.ProfileWrapper>
  );
}

export default Profile;
