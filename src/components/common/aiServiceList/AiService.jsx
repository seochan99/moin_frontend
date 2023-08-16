import React, { useRef } from "react";
import * as S from "./style";

import { useNavigate } from "react-router-dom";
import Star from "../star/Star";
import Like from "../like/Like";
import Keyword from "../keyword/Keyword";

import HightLightItem from "../highLightItem/HighLightItem";

function AiService({ item, searchTerm }) {
  // 함수 수정할게용....

  const navigate = useNavigate();
  const wrapper = useRef();
  return (
    <S.AiServiceWrapper
      ref={wrapper}
      onClick={() =>
        navigate(`/AiService/${item.title}`, {
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
        <S.AiServiceTitle>
          {searchTerm != null ? (
            <HightLightItem item={item.title} query={searchTerm} />
          ) : (
            item.title
          )}
        </S.AiServiceTitle>

        <S.AiServiceDescription>
          {searchTerm != null ? (
            <HightLightItem item={item.description} query={searchTerm} />
          ) : (
            item.description
          )}
        </S.AiServiceDescription>

        {/* 별점 */}
        <S.AiServiceStar>
          <Star starNum={item.avg_point} starSize={2} />
          <S.AiServiceStarDescription>
            ({item.rating_cnt})
          </S.AiServiceStarDescription>
        </S.AiServiceStar>

        {/* 키워드 */}
        <Keyword keyword={item.keywords} keywordSize={"1rem"} />
      </S.AiServiceBody>

      {/* 좋아요 */}
      <S.AiServiceFooter>
        <S.AiServiceLikeDescription>
          {item.likes_cnt}
        </S.AiServiceLikeDescription>
        <Like likeSize={"20px"} likeCheck={item.is_liked}></Like>
      </S.AiServiceFooter>
    </S.AiServiceWrapper>
  );
}

export default AiService;
