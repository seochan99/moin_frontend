import React, { useState, useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useNavigation,
  useParams
} from "react-router-dom";
import * as S from "./style";

// 아이콘
import ShareIcon from "../../../assets/images/icon/share.png";
import CompanyIcon from "../../../assets/images/icon/company.png";

// 컴포넌트
import Like from "../../common/like/Like";
import Star from "../../common/star/Star";

import { CopyToClipboard } from "react-copy-to-clipboard/src"; // 클립보드
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Keyword from "../../common/keyword/Keyword";
import { useRecoilState } from "recoil";
import { userState } from "../../../context/authState";
import axios from "../../../api/axios";

export function AiServiceDetailIntro({ introContent, isLiked, setIsLiked }) {
  if (!introContent) {
    return null; // introContent가 없을 때 아무 것도 렌더링하지 않음
  }
  const navigate = useNavigate();

  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);

  // 조회수
  const [viewCnt, setViewCnt] = useState(introContent.view_cnt);
  const location = useLocation();
  const aiName = decodeURI(location.pathname.split("/")[2]);

  const handleLikeToggle = async () => {
    if (!userInfo) {
      // 로그인하지 않은 경우 로그인 페이지로 이동
      navigate("/login");
      return;
    }

    try {
      // 좋아요 상태 확인

      const accessToken = userInfo.accessToken;
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };

      // isLiked가 true이면 좋아요 취소, delete 요청보내기
      if (isLiked) {
        const response = await axios.delete(`moin/detail/${aiName}/like`, {
          headers
        });

        if (response.status === 200) {
          setIsLiked(false);
          setLikeCnt(likeCnt - 1);
        }
      } else {
        const response = await axios.post(`moin/detail/${aiName}/like`, null, {
          headers
        });
        if (response.status === 200) {
          setIsLiked(true);
          setLikeCnt(likeCnt + 1);
        }
      }
    } catch (error) {}
  };

  // Toast
  const notify = () => {
    toast.info("링크가 복사되었습니다.", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000 // 3초로 설정
    });
  };

  return (
    <>
      {/* {item.name} */} <ToastContainer />
      <S.AiServiceDetailWrap key={introContent.id}>
        <S.AiServiceDetailBanner></S.AiServiceDetailBanner>
        <S.AiServiceDetailHeader>
          <S.CopyToClipboardElement>
            <S.AiServiceDetailShare>
              <CopyToClipboard text={introContent.url} onCopy={notify}>
                <S.AiServiceDetailShareImg src={ShareIcon} alt="공유 아이콘" />
              </CopyToClipboard>
            </S.AiServiceDetailShare>
          </S.CopyToClipboardElement>

          <S.AiServiceDetailRegistrant>
            MOIN 등록자 : {introContent.applier}
          </S.AiServiceDetailRegistrant>
          {/* AI 설명 내용 */}
          <S.AiServiceDetailContent>
            {/* 썸네일 */}
            <S.AiServiceThumbnail>
              <S.AiServiceThumbnailImg src={introContent.thumbnail} />
            </S.AiServiceThumbnail>
            {/* 설명 */}
            <S.AiServiceDetailContentDescription>
              {/* 회사명 */}
              <S.AiServiceDetailContentDescriptionCompany>
                <S.AiServiceDetailContentDescriptionCompanyImg
                  src={CompanyIcon}
                  alt="회사 아이콘"
                />
                {introContent.company}
              </S.AiServiceDetailContentDescriptionCompany>

              {/* 서비스명 */}
              <S.AiServiceDetailContentDescriptionName>
                {introContent.title}
              </S.AiServiceDetailContentDescriptionName>
              <S.AiServiceDetailContentDescriptionIntro>
                {introContent.description}
              </S.AiServiceDetailContentDescriptionIntro>

              {/* 인기직군 */}
              <S.AiServiceDetailContentDescriptionJob>
                <S.AiServiceDetailContentDescriptionJobTitle>
                  인기직군
                </S.AiServiceDetailContentDescriptionJobTitle>
                {introContent.popular_job.map((job, index) => (
                  <S.AiServiceDetailContentDescriptionJobContent key={index}>
                    {job}
                  </S.AiServiceDetailContentDescriptionJobContent>
                ))}
              </S.AiServiceDetailContentDescriptionJob>

              {/* 별점 */}
              <S.AiServiceDetailContentDescriptionStar>
                <S.AiServiceDetailContentDescriptionStarIcon>
                  <Star starNum={introContent.avg_point} starSize={2.4} />
                </S.AiServiceDetailContentDescriptionStarIcon>
                <S.AiServiceDetailContentDescriptionStarCnt>
                  ({introContent.rating_cnt})
                </S.AiServiceDetailContentDescriptionStarCnt>
              </S.AiServiceDetailContentDescriptionStar>

              <S.AiServiceDetailContentDescriptionEndWrap>
                {/* 조회수 */}
                <S.AiServiceDetailContentDescriptionViews>
                  조회 {viewCnt.toLocaleString()}
                </S.AiServiceDetailContentDescriptionViews>
                {/* 키워드 */}
                <S.AiServiceDetailContentDescriptionKeywordWrap>
                  <Keyword
                    keyword={introContent.keywords}
                    keywordFontSize={"1.5rem"}
                  />
                  {/* {introContent.keyword.map((keyword, index) => (
                    <S.AiServiceDetailContentDescriptionKeyword key={index}>
                      {keyword}
                    </S.AiServiceDetailContentDescriptionKeyword>
                  ))} */}
                </S.AiServiceDetailContentDescriptionKeywordWrap>
              </S.AiServiceDetailContentDescriptionEndWrap>
              <S.AiServiceDetailContentDescriptionBottom>
                {/* 서비스 바로가기 */}
                <S.AiServiceDetailContentDescriptionBottomLink>
                  <S.StyledLink to={introContent.url} target="_blank">
                    서비스 바로가기
                  </S.StyledLink>
                </S.AiServiceDetailContentDescriptionBottomLink>

                {/* 좋아요 */}
                <S.AiServiceDetailContentDescriptionBottomHeart>
                  <S.AiServiceDetailContentDescriptionBottomHeartIcon>
                    <S.LikeButton
                      onClick={() => {
                        handleLikeToggle();
                      }}
                    >
                      <Like likeSize={"4rem"} likeCheck={isLiked} />
                    </S.LikeButton>
                  </S.AiServiceDetailContentDescriptionBottomHeartIcon>
                  <S.AiServiceDetailContentDescriptionBottomHeartCnt>
                    {introContent.likes_cnt}
                  </S.AiServiceDetailContentDescriptionBottomHeartCnt>
                </S.AiServiceDetailContentDescriptionBottomHeart>
              </S.AiServiceDetailContentDescriptionBottom>
            </S.AiServiceDetailContentDescription>
          </S.AiServiceDetailContent>
        </S.AiServiceDetailHeader>
      </S.AiServiceDetailWrap>
    </>
  );
}
