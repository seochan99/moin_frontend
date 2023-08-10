import React, { useState } from "react";
import * as S from "./style";

// 컴포넌트
import { AiServiceDetailIntro } from "../../components/aiServiceDetail/aiServiceDetailIntro/AiServiceDetailIntro";
import { AiServiceDetailReview } from "../../components/aiServiceDetail/aiServiceDetailComment/aiServiceDetailReview/AiServiceDetailReview";
import { AiServiceDetailTip } from "../../components/aiServiceDetail/aiServiceDetailComment/aiServiceDetailTip/AiServiceDetailTip";
import { AiServiceDescription } from "../../components/aiServiceDetail/aiServiceDescription/AiServiceDescription";

function AiServiceDetail() {
  // 탭 기능 구현
  const [currentTab, setCurrentTab] = useState(0);

  const tabContents = [
    <AiServiceDescription />,
    <AiServiceDetailReview />,
    <AiServiceDetailTip />
  ];

  const selectMenuHandler = index => {
    setCurrentTab(index);
  };

  return (
    <>
      <AiServiceDetailIntro />

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
