import React, { useState, useEffect } from "react";
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

export function AiServiceDetailIntro({ introContent }) {
  if (!introContent) {
    return null; // introContent가 없을 때 아무 것도 렌더링하지 않음
  }

  // 좋아요
  const [isLiked, setIsLiked] = useState(introContent.is_liked);

  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);

  // Toast
  const notify = () => {
    toast.info("링크가 복사되었습니다.", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000 // 3초로 설정
    });
  };

  console.log("durl");
  console.log(introContent);

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
                {introContent.content}
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
                  <Star starNum={introContent.rating_point} starSize={2.4} />
                </S.AiServiceDetailContentDescriptionStarIcon>
                <S.AiServiceDetailContentDescriptionStarCnt>
                  ({introContent.rating_cnt})
                </S.AiServiceDetailContentDescriptionStarCnt>
              </S.AiServiceDetailContentDescriptionStar>

              <S.AiServiceDetailContentDescriptionEndWrap>
                {/* 조회수 */}
                <S.AiServiceDetailContentDescriptionViews>
                  조회 {introContent.view_cnt.toLocaleString()}
                </S.AiServiceDetailContentDescriptionViews>
                {/* 키워드 */}
                <S.AiServiceDetailContentDescriptionKeywordWrap>
                  <Keyword
                    keyword={introContent.keyword}
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
                        if (!userInfo) {
                          // 로그인하지 않은 경우 로그인 페이지로 이동
                          window.location.href = "/login";
                          return;
                        }

                        setIsLiked(!isLiked);
                      }}
                    >
                      <Like likeSize={"4rem"} likeCheck={isLiked} />
                    </S.LikeButton>
                  </S.AiServiceDetailContentDescriptionBottomHeartIcon>
                  <S.AiServiceDetailContentDescriptionBottomHeartCnt>
                    {introContent.like_cnt}
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
