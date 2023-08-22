import React, { useState, useEffect } from "react";
import * as S from "./style";

import axios from "../../../../api/axios";

// 아이콘
import MyStar from "../../../../assets/images/icon/starMy.png";
import AvgStar from "../../../../assets/images/icon/starAvg.png";
import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";

// 컴포넌트
import Star from "../../../common/star/Star";
import Review from "./Review";
import { userState } from "../../../../context/authState";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import LoginModal from "../../../common/modal/loginModal/LoginModal";

const ARRAY = [0, 1, 2, 3, 4];

export function AiServiceDetailReview({ introContent, setRating }) {
  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const navigate = useNavigate();

  // 비회원 비활성화 기능 클릭 시 띄우는 모달창
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 별점 기본값 설정
  const [clicked, setClicked] = useState(
    userInfo
      ? Array(5)
          .fill(false)
          .map((_, index) => index < introContent.my_rating_point)
      : Array(5).fill(false)
  );

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index;
    }
    setClicked(clickStates);
  };

  // useEffect(() => {
  //   sendReview();
  // }, [clicked]);

  const sendReview = async () => {
    let score = clicked.filter(Boolean).length;
    setRating(score);

    // moin/detail/{title}/rate로 patch 요청
    // bearer token 필요

    try {
      const accessToken = userInfo.accessToken; // 추출한 accessToken
      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };
      const response = await axios.patch(
        `moin/detail/${introContent.title}/rate`,
        {
          rating: score
        },
        { headers: headers }
      );
      if (response.status === 200) {
        setRating(score);
      }
    } catch (e) {}
  };

  const handleSubmit = () => {
    // 비회원이 별점 등록 버튼 클릭 시 모달창 띄우기
    if (!userInfo) {
      setIsModalOpen(true);
      return;
    }
    sendReview();
  };

  return (
    <>
      <S.AiServiceDetailReviewWrap>
        {/* 비회원 별점 클릭 시 띄우는 모달창 */}
        <LoginModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <S.AiServiceDetailReviewStarWrap>
          <S.AiServiceDetailReviewStarMy>
            <S.AiServiceDetailReviewStarMyHeader>
              <S.AiServiceDetailReviewStarMyHeaderIcon
                src={MyStar}
                alt="이용 만족도 아이콘"
              />
              <S.AiServiceDetailReviewStarHeaderTitle>
                이용 만족도
              </S.AiServiceDetailReviewStarHeaderTitle>
            </S.AiServiceDetailReviewStarMyHeader>
            <S.AiServiceDetailReviewStarMyContent>
              <S.AiServiceDetailReviewStarMyContentIcon>
                <S.Wrap>
                  <S.Stars>
                    {ARRAY.map((el, idx) => {
                      return (
                        <AiFillStar
                          key={idx}
                          size={3 + "rem"}
                          onClick={() => handleStarClick(el)}
                          className={clicked[el] && "yellowStar"}
                        />
                      );
                    })}
                  </S.Stars>
                </S.Wrap>
              </S.AiServiceDetailReviewStarMyContentIcon>

              <S.AiServiceDetailReviewStarMyContentSubmit
                onClick={handleSubmit}
              >
                {introContent.my_rating_point === 0 ? "등록" : `수정`}
              </S.AiServiceDetailReviewStarMyContentSubmit>
            </S.AiServiceDetailReviewStarMyContent>
          </S.AiServiceDetailReviewStarMy>

          {/* 평균만족도 */}
          <S.AiServiceDetailReviewStarAvg>
            <S.AiServiceDetailReviewStarAvgHeader>
              <S.AiServiceDetailReviewStarAvgHeaderIcon
                src={AvgStar}
                alt="평균 만족도 아이콘"
              />
              <S.AiServiceDetailReviewStarHeaderTitle>
                평균 만족도
              </S.AiServiceDetailReviewStarHeaderTitle>
            </S.AiServiceDetailReviewStarAvgHeader>

            <S.AiServiceDetailReviewStarAvgContent>
              <S.AiServiceDetailReviewStarAvgContentResult>
                <S.AiServiceDetailReviewStarAvgContentResultAi>
                  {introContent.avg_point === Math.floor(introContent.avg_point)
                    ? introContent.avg_point.toFixed(1)
                    : introContent.avg_point}
                </S.AiServiceDetailReviewStarAvgContentResultAi>
                <S.AiServiceDetailReviewStarAvgContentResultTotal>
                  / 5.0
                </S.AiServiceDetailReviewStarAvgContentResultTotal>
                <S.AiServiceDetailReviewStarAvgContentResultCnt>
                  ({introContent.rating_cnt})
                </S.AiServiceDetailReviewStarAvgContentResultCnt>
              </S.AiServiceDetailReviewStarAvgContentResult>

              <S.AiServiceDetailReviewStarAvgContentIcon>
                <Star starNum={introContent.avg_point} starSize={3} />
              </S.AiServiceDetailReviewStarAvgContentIcon>
            </S.AiServiceDetailReviewStarAvgContent>
          </S.AiServiceDetailReviewStarAvg>
        </S.AiServiceDetailReviewStarWrap>
      </S.AiServiceDetailReviewWrap>
      <Review />
    </>
  );
}
