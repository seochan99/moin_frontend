import React, { useState, useEffect } from "react";
import * as S from "./style";

// 컴포넌트
import { AiServiceDetailIntro } from "../../components/aiServiceDetail/aiServiceDetailIntro/AiServiceDetailIntro";
import { AiServiceDetailReview } from "../../components/aiServiceDetail/aiServiceDetailComment/aiServiceDetailReview/AiServiceDetailReview";
import { AiServiceDetailTip } from "../../components/aiServiceDetail/aiServiceDetailComment/aiServiceDetailTip/AiServiceDetailTip";
import { AiServiceDescription } from "../../components/aiServiceDetail/aiServiceDescription/AiServiceDescription";

function AiServiceDetail() {
  const [introContent, setIntroContent] = useState();

  useEffect(() => {
    const introContentData = {
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
      view_cnt: 92,
      avg_point: 3.7,
      my_rating_point: 4,
      rating_cnt: 202,
      views: 402333
    };
    setIntroContent(introContentData);
  }, []);

  // 탭 기능 구현
  const [currentTab, setCurrentTab] = useState(0);

  const tabContents = [
    <AiServiceDescription />,
    <AiServiceDetailReview introContent={introContent} />,
    <AiServiceDetailTip />
  ];

  const selectMenuHandler = index => {
    setCurrentTab(index);
  };

  return (
    <>
      <AiServiceDetailIntro introContent={introContent} />

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
