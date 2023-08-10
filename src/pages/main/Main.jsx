import React, { useState, useEffect } from "react";
import * as S from "./style";

import AiServiceList from "../../components/common/aiServiceList/AiServiceList";
import MainBannerList from "../../components/main/mainBanner/MainBannerList";
import MainCategory from "../../components/main/mainCategory/MainCategory";
import Selector from "../../components/common/selector/Selector";

import { AiOutlineSearch } from "react-icons/ai";
import SearchForm from "../../components/common/searchForm/SearchForm";

function Main() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const aiData = [
      {
        id: 1,
        title: "chat GPT",
        content: "chan AI가 개발했지요?",
        keyword: ["챗봇", "과제"],
        thumbnail:
          "https://www.headmind.com/wp-content/uploads/2023/01/CHAT-GPT.png",
        like_cnt: 599,
        rating_point: 4,
        rating_cnt: 202
      },
      {
        id: 2,
        title: "Bing",
        content: "빙빙",
        keyword: ["챗봇", "과제", "논문"],
        thumbnail:
          "http://image.koreatimes.com/article/2023/02/13/20230213105650631.jpg",
        like_cnt: 403,
        rating_point: 3,
        rating_cnt: 332
      }
    ];
    setData(aiData);
  }, []);

  const categoriesJob = { title: "직군", tags: ["전체", "개발자", "디자인"] };
  const categoriesKeyword = {
    title: "키워드",
    tags: ["전체", "챗봇", "논문", "과제", "심서현"]
  };

  const [currentCategoryTagJob, setCurrentCategoryTagJob] = useState(0);
  const getCurrentCategoryTagJob = tag => {
    setCurrentCategoryTagJob(tag);
  };

  const [currentCategoryTagKeyword, setCurrentCategoryTagKeyword] = useState(0);
  const getCurrentCategoryTagKeyword = tag => {
    setCurrentCategoryTagKeyword(tag);
  };

  const [showData, setShowData] = useState([]);

  useEffect(() => {
    if (currentCategoryTagKeyword != 0) {
      const results = data.filter(Ai =>
        Ai.keyword.includes(
          categoriesKeyword.tags[currentCategoryTagKeyword],
          0
        )
      );
      setShowData(results);
    } else {
      setShowData(data);
    }
  }, [data, currentCategoryTagJob, currentCategoryTagKeyword]);

  return (
    <S.MainWrapper>
      <MainBannerList />

      <SearchForm />

      {/* 직군 카테고리 */}
      <MainCategory
        category={categoriesJob}
        currentCategoryTag={currentCategoryTagJob}
        getCurrentCategoryTag={getCurrentCategoryTagJob}
      />
      {/* 키워드 카테고리 */}
      <MainCategory
        category={categoriesKeyword}
        currentCategoryTag={currentCategoryTagKeyword}
        getCurrentCategoryTag={getCurrentCategoryTagKeyword}
      />

      <S.MainTitleWrapper>
        <S.MainTitle>
          <AiOutlineSearch size={"25px"} style={{ marginRight: "5px" }} />{" "}
          모아보기
        </S.MainTitle>
        <Selector />
      </S.MainTitleWrapper>

      <AiServiceList data={showData} />
    </S.MainWrapper>
  );
}

export default Main;
