import React, { useState, useEffect } from "react";
import * as S from "./style";
import MypageStar from "../../../assets/images/icon/mypageStarBlue.png";
import ProfileHeader from "../../../components/profile/profileHeader/ProfileHeader";

import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";
import axios from "../../../api/axios";

function ProfileFavoritePost() {
  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);

  // 데이터
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const accessToken = userInfo.accessToken; // 추출한 accessToken
      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };

      const response = await axios.get(`mypage/community/likes`, {
        headers
      });

      const detailData = response.data;
      setData(detailData);
      console.log(detailData); // 데이터 확인용
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (userInfo) {
      fetchData();
    }
  }, []);

  return (
    <>
      <ProfileHeader title="좋아요한 게시글" img={MypageStar} />
    </>
  );
}

export default ProfileFavoritePost;
