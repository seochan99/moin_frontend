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
import Modal from "../../common/modal/Modal";
import LoginModal from "../../common/modal/loginModal/LoginModal";

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

  // 비회원 비활성화 기능 클릭 시 띄우는 모달창
  const [isModalOpen, setIsModalOpen] = useState(false);

  // // 비회원이 비활성화 기능 클릭 시 로그인 창으로 이동
  // const NonUserSubmit = () => {
  //   navigate("/login");
  //   return;
  // };

  const handleLikeToggle = async () => {
    // 비회원이 좋아요 버튼 클릭 시 모달창 띄우기
    if (!userInfo) {
      setIsModalOpen(true);
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
        }
      } else {
        const response = await axios.post(`moin/detail/${aiName}/like`, null, {
          headers
        });
        if (response.status === 200) {
          setIsLiked(true);
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

  const [isMobile, setisMobile] = useState(false);

  //윈도우가 550px 이하면  모바일버전을 연다
  const resizingHandler = () => {
    if (window.innerWidth < 550) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 550) {
      setisMobile(true);
    }
    window.addEventListener("resize", resizingHandler);

    return () => {
      window.removeEventListener("resize", resizingHandler);
    };
  });

  return (
    <S.AiServiceDetailIntroWrapper>
      {/* {item.name} */}
      <ToastContainer />
      {/* 비회원 좋아요 클릭 시 띄우는 모달창 */}
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <S.AiServiceDetailBanner />
      <S.AiServiceDetailWrap key={introContent.id}>
        <S.AiServiceDetailHeader>
          {/* 클립보드 */}
          <S.CopyToClipboardElement>
            <S.AiServiceDetailShare>
              <CopyToClipboard text={introContent.url} onCopy={notify}>
                <S.AiServiceDetailShareImg src={ShareIcon} alt="공유 아이콘" />
              </CopyToClipboard>
            </S.AiServiceDetailShare>
          </S.CopyToClipboardElement>
          {/* 모인등록자 */}
          <S.AiServiceDetailRegistrant>
            {introContent.title} 등록자 : {introContent.applier}
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
              {/* 서비스소개 */}

              {isMobile ? (
                <></>
              ) : (
                <S.AiServiceDetailContentDescriptionIntro>
                  {introContent.description}
                </S.AiServiceDetailContentDescriptionIntro>
              )}

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

              {/* 조회수+키워드 */}
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
                      {isMobile ? (
                        <Like likeSize={"2rem"} likeCheck={isLiked} />
                      ) : (
                        <Like likeSize={"4rem"} likeCheck={isLiked} />
                      )}
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
        {isMobile ? (
          <S.AiServiceDetailContentDescriptionIntroMobile>
            {introContent.description}
          </S.AiServiceDetailContentDescriptionIntroMobile>
        ) : (
          <></>
        )}
      </S.AiServiceDetailWrap>
    </S.AiServiceDetailIntroWrapper>
  );
}
