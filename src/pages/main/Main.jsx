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
  const [showData, setShowData] = useState([]);

  const categoriesJob = {
    title: "직업군",
    tags: [
      "1 sss",
      "2 ss s",
      "3 sss",
      "4 sss sss",
      "5 sssss",
      "6  sss",
      "7  s sa",
      "8",
      "9",
      "10",
      "11",
      "12"
    ]
  };
  const [currentCategoryTagJob, setCurrentCategoryTagJob] = useState(0);
  const getCurrentCategoryTagJob = tag => {
    setCurrentCategoryTagJob(tag);
  };

  const categoriesKeyword = {
    title: "키워드",
    tags: ["전체", "챗봇", "논문", "과제", "심서현"]
  };
  const [currentCategoryTagKeyword, setCurrentCategoryTagKeyword] = useState(0);
  const getCurrentCategoryTagKeyword = tag => {
    setCurrentCategoryTagKeyword(tag);
  };

  const SelectorOption = [
    { value: "recent", title: "최신순" },
    { value: "rating", title: "평점순" }
  ];
  const [currentOption, setCurrentOption] = useState("recent");
  const getCurrentOption = option => {
    setCurrentOption(option);
  };

  const sortByRecent = (a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
  const sortByRating = (a, b) =>
    a.rating_point > b.rating_point
      ? -1
      : a.rating_point < b.rating_point
      ? 1
      : 0;

  //옵셥변경
  useEffect(() => {
    let sortedData = [];

    switch (currentOption) {
      case "recent":
        sortedData = data.sort(sortByRecent);
        break;
      case "rating":
        sortedData = data.sort(sortByRating);
        break;
    }

    setData(sortedData.slice(0, sortedData.length));
  }, [currentOption]);

  //카테고리변경
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

  //데이터입력
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
        rating_point: 4.75,
        rating_cnt: 202
      },
      {
        id: 2,
        title: "Bing",
        content: "빙빙",
        keyword: ["챗봇", "심서현", "논문"],
        thumbnail:
          "http://image.koreatimes.com/article/2023/02/13/20230213105650631.jpg",
        like_cnt: 403,
        rating_point: 0.15,
        rating_cnt: 332
      },
      {
        id: 3,
        title: "chat GPT",
        content: "chan AI가 개발했지요?",
        keyword: ["챗봇", "과제"],
        thumbnail:
          "https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg",
        like_cnt: 10,
        rating_point: 1.75,
        rating_cnt: 202
      },
      {
        id: 4,
        title: "Bing",
        content: "빙빙",
        keyword: ["챗봇", "심서현", "논문"],
        thumbnail:
          "https://i.pinimg.com/236x/20/54/47/20544776a249886254358f5da2d74229.jpg",
        like_cnt: 100,
        rating_point: 2.45,
        rating_cnt: 332
      },
      {
        id: 5,
        title: "서현",
        content: "서현현",
        keyword: ["챗봇", "농담곰"],
        thumbnail:
          "https://i.namu.wiki/i/YUl8OYhqGEIkaSdhdBVKfG1HIc-zsq3-1-2JLHKjroWUbWEVV5NSoAUjgJHWuKvbb72P9K1VrwQcK0AN8P86ew.webp",
        like_cnt: 200,
        rating_point: 3.05,
        rating_cnt: 332
      },
      {
        id: 1,
        title: "chat GPT",
        content: "chan AI가 개발했지요?",
        keyword: ["챗봇", "과제"],
        thumbnail:
          "https://www.headmind.com/wp-content/uploads/2023/01/CHAT-GPT.png",
        like_cnt: 599,
        rating_point: 4.75,
        rating_cnt: 202
      },
      {
        id: 2,
        title: "Bing",
        content: "빙빙",
        keyword: ["챗봇", "심서현", "논문"],
        thumbnail:
          "http://image.koreatimes.com/article/2023/02/13/20230213105650631.jpg",
        like_cnt: 403,
        rating_point: 0.15,
        rating_cnt: 332
      },
      {
        id: 3,
        title: "chat GPT",
        content: "chan AI가 개발했지요?",
        keyword: ["챗봇", "과제"],
        thumbnail:
          "https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg",
        like_cnt: 10,
        rating_point: 1.75,
        rating_cnt: 202
      },
      {
        id: 4,
        title: "Bing",
        content: "빙빙",
        keyword: ["챗봇", "심서현", "논문"],
        thumbnail:
          "https://i.pinimg.com/236x/20/54/47/20544776a249886254358f5da2d74229.jpg",
        like_cnt: 100,
        rating_point: 2.45,
        rating_cnt: 332
      },
      {
        id: 5,
        title: "서현",
        content: "서현현",
        keyword: ["챗봇", "농담곰"],
        thumbnail:
          "https://i.namu.wiki/i/YUl8OYhqGEIkaSdhdBVKfG1HIc-zsq3-1-2JLHKjroWUbWEVV5NSoAUjgJHWuKvbb72P9K1VrwQcK0AN8P86ew.webp",
        like_cnt: 200,
        rating_point: 3.05,
        rating_cnt: 332
      },
      {
        id: 1,
        title: "chat GPT",
        content: "chan AI가 개발했지요?",
        keyword: ["챗봇", "과제"],
        thumbnail:
          "https://www.headmind.com/wp-content/uploads/2023/01/CHAT-GPT.png",
        like_cnt: 599,
        rating_point: 4.75,
        rating_cnt: 202
      },
      {
        id: 2,
        title: "Bing",
        content: "빙빙",
        keyword: ["챗봇", "심서현", "논문"],
        thumbnail:
          "http://image.koreatimes.com/article/2023/02/13/20230213105650631.jpg",
        like_cnt: 403,
        rating_point: 0.15,
        rating_cnt: 332
      },
      {
        id: 3,
        title: "chat GPT",
        content: "chan AI가 개발했지요?",
        keyword: ["챗봇", "과제"],
        thumbnail:
          "https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg",
        like_cnt: 10,
        rating_point: 1.75,
        rating_cnt: 202
      },
      {
        id: 4,
        title: "Bing",
        content: "빙빙",
        keyword: ["챗봇", "심서현", "논문"],
        thumbnail:
          "https://i.pinimg.com/236x/20/54/47/20544776a249886254358f5da2d74229.jpg",
        like_cnt: 100,
        rating_point: 2.45,
        rating_cnt: 332
      },
      {
        id: 5,
        title: "서현",
        content: "서현현",
        keyword: ["챗봇", "농담곰"],
        thumbnail:
          "https://i.namu.wiki/i/YUl8OYhqGEIkaSdhdBVKfG1HIc-zsq3-1-2JLHKjroWUbWEVV5NSoAUjgJHWuKvbb72P9K1VrwQcK0AN8P86ew.webp",
        like_cnt: 200,
        rating_point: 3.05,
        rating_cnt: 332
      },
      {
        id: 1,
        title: "chat GPT",
        content: "chan AI가 개발했지요?",
        keyword: ["챗봇", "과제"],
        thumbnail:
          "https://www.headmind.com/wp-content/uploads/2023/01/CHAT-GPT.png",
        like_cnt: 599,
        rating_point: 4.75,
        rating_cnt: 202
      },
      {
        id: 2,
        title: "Bing",
        content: "빙빙",
        keyword: ["챗봇", "심서현", "논문"],
        thumbnail:
          "http://image.koreatimes.com/article/2023/02/13/20230213105650631.jpg",
        like_cnt: 403,
        rating_point: 0.15,
        rating_cnt: 332
      },
      {
        id: 3,
        title: "chat GPT",
        content: "chan AI가 개발했지요?",
        keyword: ["챗봇", "과제"],
        thumbnail:
          "https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg",
        like_cnt: 10,
        rating_point: 1.75,
        rating_cnt: 202
      },
      {
        id: 4,
        title: "Bing",
        content: "빙빙",
        keyword: ["챗봇", "심서현", "논문"],
        thumbnail:
          "https://i.pinimg.com/236x/20/54/47/20544776a249886254358f5da2d74229.jpg",
        like_cnt: 100,
        rating_point: 2.45,
        rating_cnt: 332
      },
      {
        id: 5,
        title: "서현",
        content: "서현현",
        keyword: ["챗봇", "농담곰"],
        thumbnail:
          "https://i.namu.wiki/i/YUl8OYhqGEIkaSdhdBVKfG1HIc-zsq3-1-2JLHKjroWUbWEVV5NSoAUjgJHWuKvbb72P9K1VrwQcK0AN8P86ew.webp",
        like_cnt: 200,
        rating_point: 3.05,
        rating_cnt: 332
      }
    ];

    setData(aiData);
  }, []);

  return (
    <>
      <MainBannerList />

      <S.MainWrapper>
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
          <Selector
            options={SelectorOption}
            getCurrentOption={getCurrentOption}
          />
        </S.MainTitleWrapper>

        <AiServiceList data={showData} />
      </S.MainWrapper>
    </>
  );
}

export default Main;
