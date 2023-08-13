import React, { useEffect, useState } from "react";
import * as S from "./style";
import * as AIS from "../ai/style";
import Banner from "../../components/common/banner/Banner";
import List from "../../components/common/list/List";
import CommunityQna from "../../components/community/communityQna/CommunityQna";
import CommunityCommon from "../../components/community/communityCommon/CommunityCommon";
import CommunityTips from "../../components/community/communityTips/CommunityTips";

function Community() {
  // 탭 기능 구현
  const [currentTab, setCurrentTab] = useState(0);

  const tabContents = [
    <CommunityCommon />,
    <CommunityTips />,
    <CommunityQna />
  ];

  const selectMenuHandler = index => {
    setCurrentTab(index);
  };

  return (
    <S.CommunityWrapper>
      <Banner
        titleKorean="커뮤니티"
        titleEnglish="COMMUNITY"
        image={<S.CommunityIconImg />}
      />
      <S.CommunityContentWrapper>
        <AIS.AiServiceDetailCommentWrap>
          <AIS.AiServiceDetailCommentCategory>
            <AIS.AiServiceDetailCommentCategoryTabMenu>
              <AIS.AiServiceDetailCommentCategoryMenuItem
                isActive={currentTab === 0}
                onClick={() => selectMenuHandler(0)}
              >
                자유 게시판
              </AIS.AiServiceDetailCommentCategoryMenuItem>
              <AIS.AiServiceDetailCommentCategoryMenuItem
                isActive={currentTab === 1}
                onClick={() => selectMenuHandler(1)}
              >
                이용꿀팁
              </AIS.AiServiceDetailCommentCategoryMenuItem>
              <AIS.AiServiceDetailCommentCategoryMenuItem
                isActive={currentTab === 2}
                onClick={() => selectMenuHandler(2)}
              >
                Q&A
              </AIS.AiServiceDetailCommentCategoryMenuItem>
            </AIS.AiServiceDetailCommentCategoryTabMenu>
          </AIS.AiServiceDetailCommentCategory>
          {tabContents[currentTab]}
        </AIS.AiServiceDetailCommentWrap>
      </S.CommunityContentWrapper>
    </S.CommunityWrapper>
  );
}

export default Community;
