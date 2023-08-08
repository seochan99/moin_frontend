import React, { useEffect } from "react";
import * as S from "./style";

import { useNavigate } from "react-router-dom";
import Star from "../../star/Star";
import Like from "../../like/Like";
import Keyword from "../../keyword/Keyword";

function AiService({ item }) {
  // 함수 수정할게용....

  const navigate = useNavigate();

  return (
    <S.AiServiceWrapper
      onClick={() =>
        navigate(`AiService/${item.id}`, {
          state: {
            item: item
          }
        })
      }
    >
      {/* 썸네일 */}
      <S.AiServiceThumbnail>
        <S.AiServiceThumbnailImg src={item.thumbnail} />
      </S.AiServiceThumbnail>
      <S.AiServiceBody>
        {/* Ai이름, 설명 */}
        <S.AiServiceTitle>{item.title}</S.AiServiceTitle>
        <S.AiServiceDescription>{item.content}</S.AiServiceDescription>
        {/* 별점 */}
        <S.AiServiceStar>
          <Star starNum={item.rating_point} starSize={"20px"} />
          <S.AiServiceStarDescription>
            ({item.rating_cnt})
          </S.AiServiceStarDescription>
        </S.AiServiceStar>
        {/* 키워드 */}
        <Keyword keyword={item.keyword} keywordSize={"1rem"} />
      </S.AiServiceBody>
      {/* 좋아요 */}
      <S.AiServiceFooter>
        <S.AiServiceLikeDescription>{item.like_cnt}</S.AiServiceLikeDescription>
        <Like likeSize={"20px"} likeCheck={true}></Like>
      </S.AiServiceFooter>
    </S.AiServiceWrapper>
  );
}

export default AiService;
