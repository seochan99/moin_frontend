import React, { useState, useEffect } from "react";
import * as S from "./style";
import MypageChat from "../../../assets/images/icon/mypageChat.png";
import ProfileHeader from "../../../components/profile/profileHeader/ProfileHeader";
import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";
import axios from "../../../api/axios";

function ProfileComment() {
  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);

  // 데이터
  const [data, setData] = useState();

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);

  // 셀렉터 옵션 (전체, qnas, commons, tips, ai)
  const SelectorOption = [
    { value: "", title: "전체" },
    { value: "/qnas", title: "Q&A" },
    { value: "/commons", title: "자유게시판" },
    { value: "/tips", title: "꿀팁" },
    { value: "/ai", title: "AI서비스" }
  ];

  // 옵션 선택하기
  const [currentOption, setCurrentOption] = useState("/ai");
  const getCurrentOption = option => {
    setCurrentOption(option);
  };

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

      const response = await axios.get(
        `/mypage/comments${currentOption}?page=${currentPage}`,
        {
          headers
        }
      );

      const detailData = response.data;
      setData(detailData);
      console.log("작성한 댓글");
      console.log(detailData); // 데이터 확인용
    } catch (e) {
      console.log(e);
    }
  };

  //페이지변경
  useEffect(() => {
    fetchData();
  }, [currentPage]);
  return (
    <>
      <ProfileHeader title="댓글" img={MypageChat} />
    </>
  );
}

export default ProfileComment;
