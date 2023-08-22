import React, { useState, useEffect } from "react";
import * as S from "./style";
import * as AIS from "../../ai/style";
import MypageVector from "../../../assets/images/icon/mypageVector.png";
import ProfileHeader from "../../../components/profile/profileHeader/ProfileHeader";
import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";
import axios from "../../../api/axios";

import ProfileCommon from "../../../components/profile/profileCommunityList/ProfileCommon";

function ProfilePost() {
  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);

  // 데이터
  const [data, setData] = useState();

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);

  // 탭 기능 구현
  const [currentTab, setCurrentTab] = useState(0);

  // 카테고리
  const [category, setCategory] = useState("");

  // 좋아요한 게시물인지 판별
  const [islike, setIslike] = useState(false);

  // 초기세팅
  useEffect(() => {
    if (userInfo) {
      fetchData();
    }
  }, [currentTab]);

  const fetchData = async () => {
    try {
      const accessToken = userInfo.accessToken; // 추출한 accessToken
      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };

      const response = await axios.get(
        `/mypage/posts${category}?page=${currentPage}`,
        {
          headers
        }
      );

      setData(response.data.results);
      setCount(response.data.count);
      setIslike(false);
    } catch (e) {}
  };

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
    />,
    <ProfileCommon
      category={"건의사항"}
      data={data}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      count={count}
      islike={islike}
    />
  ];

  const selectMenuHandler = index => {
    setCurrentTab(index);
    if (index === 0) {
      setCategory("");
    } else if (index === 1) {
      setCategory("/commons");
    } else if (index === 2) {
      setCategory("/tips");
    } else if (index === 3) {
      setCategory("/qnas");
    } else if (index === 4) {
      setCategory("/suggestions");
    }
  };

  return (
    <>
      <ProfileHeader title="작성한 게시물" img={MypageVector} />
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
                <AIS.AiServiceDetailCommentCategoryMenuItem
                  $isActive={currentTab === 4}
                  onClick={() => selectMenuHandler(4)}
                >
                  건의사항
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

export default ProfilePost;
