import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as S from "./style";

// 컴포넌트
import { AiServiceDetailIntro } from "../../components/aiServiceDetail/aiServiceDetailIntro/AiServiceDetailIntro";
import { AiServiceDetailReview } from "../../components/aiServiceDetail/aiServiceDetailComment/aiServiceDetailReview/AiServiceDetailReview";
import { AiServiceDetailTip } from "../../components/aiServiceDetail/aiServiceDetailComment/aiServiceDetailTip/AiServiceDetailTip";
import { AiServiceDescription } from "../../components/aiServiceDetail/aiServiceDescription/AiServiceDescription";

import axios from "../../api/axios";

function AiServiceDetail() {
  const [data, setData] = useState();
  const [introContent, setIntroContent] = useState();
  const [title, setTitle] = useState("new");
  const location = useLocation();
  const aiName = decodeURI(location.pathname.split("/")[2]);

  console.log(aiName);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/moin/detail/${aiName}`);
      console.log("gd", response.data);

      const detailData = response.data;

      setIntroContent(detailData);
      setData(detailData);
    } catch (e) {
      console.log(e);
    }
  };

  console.log("gdd", data);
  console.log("gd2", introContent);
  console.log(introContent);

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
