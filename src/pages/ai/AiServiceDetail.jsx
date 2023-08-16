import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as S from "./style";

// 컴포넌트
import { AiServiceDetailIntro } from "../../components/aiServiceDetail/aiServiceDetailIntro/AiServiceDetailIntro";
import { AiServiceDetailReview } from "../../components/aiServiceDetail/aiServiceDetailComment/aiServiceDetailReview/AiServiceDetailReview";
import { AiServiceDetailTip } from "../../components/aiServiceDetail/aiServiceDetailComment/aiServiceDetailTip/AiServiceDetailTip";
import { AiServiceDescription } from "../../components/aiServiceDetail/aiServiceDescription/AiServiceDescription";

import axios from "../../api/axios";
import { userState } from "../../context/authState";
import { useRecoilState } from "recoil";

function AiServiceDetail() {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [data, setData] = useState();
  const [introContent, setIntroContent] = useState();
  const [title, setTitle] = useState("new");
  const location = useLocation();
  const aiName = decodeURI(location.pathname.split("/")[2]);
  const [isLiked, setIsLiked] = useState(false);

  // 별점 등록
  const [rating, setRating] = useState(0);

  // 초반 데이터 불러오기
  useEffect(() => {
    fetchData();
    // 사용자 조회수 셋팅
  }, []);

  // 별점 변한 후 데이터 불러오기
  useEffect(() => {
    fetchData();
  }, [rating, isLiked]);

  const fetchData = async () => {
    try {
      if (userInfo) {
        const accessToken = userInfo.accessToken; // 추출한 accessToken
        console.log(userInfo);
        const headers = {
          Authorization: `Bearer ${accessToken}` // Bearer Token 설정
        };

        const response = await axios.get(`/moin/detail/${aiName}`, { headers });

        const detailData = response.data;

        setIntroContent(detailData);
        setData(detailData);
        setIsLiked(detailData.is_liked);
      } else {
        const response = await axios.get(`/moin/detail/${aiName}`);

        const detailData = response.data;

        setIntroContent(detailData);
        setData(detailData);
        setIsLiked(detailData.is_liked);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // 탭 기능 구현
  const [currentTab, setCurrentTab] = useState(0);

  const tabContents = [
    <AiServiceDescription />,
    <AiServiceDetailReview introContent={introContent} setRating={setRating} />,
    <AiServiceDetailTip aiName={aiName} />
  ];

  const selectMenuHandler = index => {
    setCurrentTab(index);
  };

  return (
    <>
      <AiServiceDetailIntro
        introContent={introContent}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
      />

      <S.AiServiceDetailCommentWrap>
        <S.AiServiceDetailCommentCategory>
          <S.AiServiceDetailCommentCategoryTabMenu>
            <S.AiServiceDetailCommentCategoryMenuItem
              isActive={currentTab === 0}
              onClick={() => selectMenuHandler(0)}
            >
              기능소개
            </S.AiServiceDetailCommentCategoryMenuItem>
            <S.AiServiceDetailCommentCategoryMenuItem
              isActive={currentTab === 1}
              onClick={() => selectMenuHandler(1)}
            >
              이용후기
            </S.AiServiceDetailCommentCategoryMenuItem>
            <S.AiServiceDetailCommentCategoryMenuItem
              isActive={currentTab === 2}
              onClick={() => selectMenuHandler(2)}
            >
              이용꿀팁
            </S.AiServiceDetailCommentCategoryMenuItem>
          </S.AiServiceDetailCommentCategoryTabMenu>
        </S.AiServiceDetailCommentCategory>
        {tabContents[currentTab]}
      </S.AiServiceDetailCommentWrap>
    </>
  );
}

export default AiServiceDetail;
