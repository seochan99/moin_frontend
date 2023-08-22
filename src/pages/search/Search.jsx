import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";

import * as S from "./style";

import AiServiceList from "../../components/common/aiServiceList/AiServiceList";
import Selector from "../../components/common/selector/Selector";
import SearchForm from "../../components/common/searchForm/SearchForm";

function Search() {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  // const [searchTerm, setSearchTerm] = useState(query.get("q"));
  const searchTerm = query.get("q");

  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const getCurrentPage = currentPage => setCurrentPage(currentPage);

  const SelectorOption = [
    { value: "recent", title: "최신순" },
    { value: "popular", title: "조회순" },
    { value: "like", title: "좋아요순" },
    { value: "rating", title: "평점순" }
  ];
  const [currentOption, setCurrentOption] = useState("recent");
  const getCurrentOption = option => {
    setCurrentOption(option);
  };

  const fetchData = async () => {
    try {
      const request = await axios.get(
        `/moin?search=${searchTerm}&ordering=${currentOption}&page=${currentPage}`
      );

      setCount(request.data.count);
      setData(request.data.results);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    fetchData();
  }, [searchTerm, currentOption]);

  return (
    <S.SearchWrapper>
      <SearchForm />
      <S.SearchTitleWrapper>
        <S.SearchTitle>
          {searchTerm}
          <S.SearchTitleGray> 에 대한 검색 결과입니다.</S.SearchTitleGray>
        </S.SearchTitle>
        <Selector
          options={SelectorOption}
          getCurrentOption={getCurrentOption}
        />
      </S.SearchTitleWrapper>

      <AiServiceList
        data={data}
        count={count}
        currentPage={currentPage}
        getCurrentPage={getCurrentPage}
        searchTerm={searchTerm}
      />
    </S.SearchWrapper>
  );
}

export default Search;
