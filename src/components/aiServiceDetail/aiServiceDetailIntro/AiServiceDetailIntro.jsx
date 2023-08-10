import React, { useState, useEffect } from "react";
import * as S from "./style";

// 아이콘
import ShareIcon from "../../../assets/images/icon/share.png";
import CompanyIcon from "../../../assets/images/icon/company.png";

// 컴포넌트
import Like from "../../common/like/Like";
import Star from "../../common/star/Star";
import { CopyToClipboard } from "react-copy-to-clipboard/src"; // 클립보드
import Keyword from "../../common/keyword/Keyword";

export function AiServiceDetailIntro() {
  const [introContent, setIntroContent] = useState([]);
  const [isLiked, setIsLiked] = useState(introContent.is_liked);

  useEffect(() => {
    const introContentData = [
      {
        id: 1,
        title: "Chat GPT",
        content: "chan AI가 개발했지요?",
        url: "https://chat.openai.com/",
        company: "Open AI",
        applier: "admin",
        keyword: ["챗봇", "과제"],
        popular_job: ["개발자", "디자이너"], // 추가
        thumbnail:
          "https://www.headmind.com/wp-content/uploads/2023/01/CHAT-GPT.png",
        is_liked: false,
        like_cnt: 599,
        view_cnt: 1000,
        rating_point: 4,
        rating_cnt: 202,
        views: 402333
      }
    ];
    setIntroContent(introContentData);
  }, []);

  return (
    <>
      {/* {item.name} */}
      {introContent.map(introItem => (
        <S.AiServiceDetailWrap key={introItem.id}>
          <S.AiServiceDetailBanner></S.AiServiceDetailBanner>
          <S.AiServiceDetailHeader>
            <CopyToClipboard
              text={introItem.url}
              onCopy={() => alert("링크가 복사되었습니다.")}
            >
              <S.CopyToClipboardElement>
                <S.AiServiceDetailShare>
                  <S.AiServiceDetailShareImg
                    src={ShareIcon}
                    alt="공유 아이콘"
                  />
                </S.AiServiceDetailShare>
              </S.CopyToClipboardElement>
            </CopyToClipboard>
            <S.AiServiceDetailRegistrant>
              MOIN 등록자 : {introItem.applier}
            </S.AiServiceDetailRegistrant>
            {/* AI 설명 내용 */}
            <S.AiServiceDetailContent>
              {/* 썸네일 */}
              <S.AiServiceThumbnail>
                <S.AiServiceThumbnailImg src={introItem.thumbnail} />
              </S.AiServiceThumbnail>
              {/* 설명 */}
              <S.AiServiceDetailContentDescription>
                {/* 회사명 */}
                <S.AiServiceDetailContentDescriptionCompany>
                  <S.AiServiceDetailContentDescriptionCompanyImg
                    src={CompanyIcon}
                    alt="회사 아이콘"
                  />
                  {introItem.company}
                </S.AiServiceDetailContentDescriptionCompany>

                {/* 서비스명 */}
                <S.AiServiceDetailContentDescriptionName>
                  {introItem.title}
                </S.AiServiceDetailContentDescriptionName>
                <S.AiServiceDetailContentDescriptionIntro>
                  {introItem.content}
                </S.AiServiceDetailContentDescriptionIntro>

                {/* 인기직군 */}
                <S.AiServiceDetailContentDescriptionJob>
                  <S.AiServiceDetailContentDescriptionJobTitle>
                    인기직군
                  </S.AiServiceDetailContentDescriptionJobTitle>
                  {introItem.popular_job.map((job, index) => (
                    <S.AiServiceDetailContentDescriptionJobContent key={index}>
                      {job}
                    </S.AiServiceDetailContentDescriptionJobContent>
                  ))}
                </S.AiServiceDetailContentDescriptionJob>

                {/* 별점 */}
                <S.AiServiceDetailContentDescriptionStar>
                  <S.AiServiceDetailContentDescriptionStarIcon>
                    <Star
                      starNum={introItem.rating_point}
                      starSize={"2.4rem"}
                    />
                  </S.AiServiceDetailContentDescriptionStarIcon>
                  <S.AiServiceDetailContentDescriptionStarCnt>
                    ({introItem.rating_cnt})
                  </S.AiServiceDetailContentDescriptionStarCnt>
                </S.AiServiceDetailContentDescriptionStar>

                <S.AiServiceDetailContentDescriptionEndWrap>
                  {/* 조회수 */}
                  <S.AiServiceDetailContentDescriptionViews>
                    조회 {introItem.views.toLocaleString()}
                  </S.AiServiceDetailContentDescriptionViews>

                  {/* 키워드 */}
                  <S.AiServiceDetailContentDescriptionKeywordWrap>
                    {/* {introItem.keyword.map((keyword, index) => (
                    <S.AiServiceDetailContentDescriptionKeyword key={index}>
                      {keyword}
                    </S.AiServiceDetailContentDescriptionKeyword>
                  ))} */}
                    <Keyword
                      keyword={introItem.keyword}
                      keywordSize={"1.4rem"}
                    />
                  </S.AiServiceDetailContentDescriptionKeywordWrap>
                </S.AiServiceDetailContentDescriptionEndWrap>
                <S.AiServiceDetailContentDescriptionBottom>
                  {/* 서비스 바로가기 */}
                  <S.AiServiceDetailContentDescriptionBottomLink>
                    <S.StyledLink to={introItem.url} target="_blank">
                      서비스 바로가기
                    </S.StyledLink>
                  </S.AiServiceDetailContentDescriptionBottomLink>

                  {/* 좋아요 */}
                  <S.AiServiceDetailContentDescriptionBottomHeart>
                    <S.AiServiceDetailContentDescriptionBottomHeartIcon>
                      <S.LikeButton
                        onClick={() => {
                          setIsLiked(!isLiked);
                        }}
                      >
                        <Like likeSize={"4rem"} likeCheck={isLiked} />
                      </S.LikeButton>
                    </S.AiServiceDetailContentDescriptionBottomHeartIcon>
                    <S.AiServiceDetailContentDescriptionBottomHeartCnt>
                      {introItem.like_cnt}
                    </S.AiServiceDetailContentDescriptionBottomHeartCnt>
                  </S.AiServiceDetailContentDescriptionBottomHeart>
                </S.AiServiceDetailContentDescriptionBottom>
              </S.AiServiceDetailContentDescription>
            </S.AiServiceDetailContent>
          </S.AiServiceDetailHeader>
        </S.AiServiceDetailWrap>
      ))}
    </>
  );
}
