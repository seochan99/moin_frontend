import React from "react";
import * as S from "./style";
import MainSearch from "../../components/main/mainSearch/MainSearch";
import AiServiceList from "../../components/main/mainAiList/MainAiServiceList";
import MainBannerList from "../../components/main/mainBanner/MainBannerList";
import MainCategory from "../../components/main/mainCategory/MainCategory";
import Selector from "../../components/common/selector/Selector";

import { AiOutlineSearch } from "react-icons/ai";

function Main() {
  const categories = [
    { title: "직군", tags: ["전체", "개발자", "디자인"] },
    {
      title: "키워드",
      tags: [
        "전체",
        "개발자",
        "디자인",
        "그래픽",
        "심서현...",
        "개발중....",
        "스크롤넘어가는거테스트할게요..."
      ]
    }
  ];
  return (
    <S.MainWrapper>
      <MainBannerList />

      <MainSearch />

      {/* 직군 카테고리 */}
      <MainCategory category={categories[0]} />
      {/* 키워드 카테고리 */}
      <MainCategory category={categories[1]} />

      <S.MainTitleWrapper>
        <S.MainTitle>
          <AiOutlineSearch size={"25px"} /> 모아보기
        </S.MainTitle>
        <Selector />
      </S.MainTitleWrapper>

      <AiServiceList />
    </S.MainWrapper>
  );
}

export default Main;
