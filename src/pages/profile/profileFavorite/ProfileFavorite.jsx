import React, { useState, useEffect } from "react";
import * as S from "./style";
import MypageStar from "../../../assets/images/icon/mypageStarBlue.png";
import ProfileHeader from "../../../components/profile/profileHeader/ProfileHeader";

import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";
import axios from "../../../api/axios";

import AiServiceList from "../../../components/common/aiServiceList/AiServiceList";

function ProfileFavorite() {
  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);

  // 데이터
  const [data, setData] = useState();

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const getCurrentPage = currentPage => setCurrentPage(currentPage);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (userInfo) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const accessToken = userInfo.accessToken; // 추출한 accessToken
      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };
      const response = await axios.get(`mypage/ai/likes?page=${currentPage}`, {
        headers
      });

      setData(response.data.results.slice(0, response.data.results.length));
      setCount(response.data.count);
    } catch (e) {
      console.log(e);
    }
  };

  //페이지변경
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  console.log("data", data); // 데이터 확인용
  console.log(count);

  return (
    <>
      <ProfileHeader title="좋아요한 서비스" img={MypageStar} />
      <AiServiceList
        data={data}
        count={count}
        currentPage={currentPage}
        getCurrentPage={getCurrentPage}
      />
    </>
  );
}

export default ProfileFavorite;
