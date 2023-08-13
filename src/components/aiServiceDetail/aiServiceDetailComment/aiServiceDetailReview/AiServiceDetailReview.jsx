import React, { useState, useEffect } from "react";
import * as S from "./style";

import axios from "axios";

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

const ARRAY = [0, 1, 2, 3, 4];

export function AiServiceDetailReview({ introContent }) {
  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);

  // 별점 등록
  const [rating, setRating] = useState(0);

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

  useEffect(() => {
    sendReview();
  }, [clicked]);

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    setRating(score);
    console.log("Selected Rating:", score);
    // 서버 전송
    // fetch('http://52.78.63.175:8000/movie', {
    //   method: 'POST',
    //   Headers: {
    //     Authroization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
    //   },
    //   body: JSON.stringify({
    //     movie_id:1
    //     star: score,
    //   }),
    // });
  };

  const handleSubmit = () => {
    if (!userInfo) {
      // 로그인하지 않은 경우 로그인 페이지로 이동
      window.location.href = "/login";
      return;
    }
    sendReview();
  };

  return (
    <>
      <S.AiServiceDetailReviewWrap>
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
                {/* <Star
                  starNum={userInfo ? introContent[0].my_rating_point : 0}
                  starSize={2.4}
                /> */}
              </S.AiServiceDetailReviewStarMyContentIcon>

              <S.AiServiceDetailReviewStarMyContentSubmit
                onClick={handleSubmit}
              >
                등록
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
                  {introContent.avg_point}
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
