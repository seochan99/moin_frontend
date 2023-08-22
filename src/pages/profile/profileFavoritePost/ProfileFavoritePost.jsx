import React, { useState, useEffect } from "react";
import * as S from "./style";
import * as AIS from "../../ai/style";
import MypageStar from "../../../assets/images/icon/mypageStarBlue.png";
import ProfileHeader from "../../../components/profile/profileHeader/ProfileHeader";

import ProfileCommon from "../../../components/profile/profileCommunityList/ProfileCommon";

import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";
import axios from "../../../api/axios";

function ProfileFavoritePost() {
  // 탭 기능 구현
  const [currentTab, setCurrentTab] = useState(0);

  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);

  // 데이터
  const [data, setData] = useState();

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  const [count, setCount] = useState(0);

  const [islike, setIslike] = useState(true); // 좋아요한 게시물인지 판별

  const fetchData = async () => {
    try {
      const accessToken = userInfo.accessToken; // 추출한 accessToken
      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };

      const response = await axios.get(
        `mypage/community/likes?&page=${currentPage}`,
        {
          headers
        }
      );

      setData(response.data.results);
      setCount(response.data.count);
      setIslike(true);
    } catch (e) {}
  };

  useEffect(() => {
    if (userInfo) {
      fetchData();
    }
  }, []);

  //페이지변경
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const tabContents = [
    <ProfileCommon
      category={"total"}
      data={data}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      count={count}
      islike={islike}
    />,
    <ProfileCommon
      category={"common"}
      data={data}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      count={count}
      islike={islike}
    />,
    <ProfileCommon
      category={"tip"}
      data={data}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      count={count}
      islike={islike}
    />,
    <ProfileCommon
      category={"qna"}
      data={data}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      count={count}
      islike={islike}
    />
  ];

  const selectMenuHandler = index => {
    setCurrentTab(index);
  };

  return (
    <>
      <ProfileHeader title="좋아요한 게시글" img={MypageStar} />
      <S.CommunityWrapper>
        <S.CommunityContentWrapper>
          <S.AiServiceDetailCommentWrap>
            <AIS.AiServiceDetailCommentCategory>
              <AIS.AiServiceDetailCommentCategoryTabMenu>
                <AIS.AiServiceDetailCommentCategoryMenuItem
                  $isActive={currentTab === 0}
                  onClick={() => selectMenuHandler(0)}
                >
                  전체
                </AIS.AiServiceDetailCommentCategoryMenuItem>
                <AIS.AiServiceDetailCommentCategoryMenuItem
                  $isActive={currentTab === 1}
                  onClick={() => selectMenuHandler(1)}
                >
                  자유 게시판
                </AIS.AiServiceDetailCommentCategoryMenuItem>
                <AIS.AiServiceDetailCommentCategoryMenuItem
                  $isActive={currentTab === 2}
                  onClick={() => selectMenuHandler(2)}
                >
                  이용꿀팁
                </AIS.AiServiceDetailCommentCategoryMenuItem>
                <AIS.AiServiceDetailCommentCategoryMenuItem
                  $isActive={currentTab === 3}
                  onClick={() => selectMenuHandler(3)}
                >
                  Q&A
                </AIS.AiServiceDetailCommentCategoryMenuItem>
              </AIS.AiServiceDetailCommentCategoryTabMenu>
            </AIS.AiServiceDetailCommentCategory>
            {tabContents[currentTab]}
          </S.AiServiceDetailCommentWrap>
        </S.CommunityContentWrapper>
      </S.CommunityWrapper>
    </>
  );
}

export default ProfileFavoritePost;
