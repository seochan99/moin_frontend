import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";

import * as S from "./style";

import { AiOutlineSearch } from "react-icons/ai";
import AiServiceList from "../../components/common/aiServiceList/AiServiceList";
import Selector from "../../components/common/selector/Selector";
import SearchForm from "../../components/common/searchForm/SearchForm";

function Search() {
  const [data, setData] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const searchTerm = query.get("q");

  const [searchResult, setsearchResult] = useState([]);

  const fetchSearchData = async searchTerm => {
    try {
      const request = await axios.get(``);
      setsearchResult(request.data.resluts);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    const aiData = [];
    setData(aiData);
  }, []);

  return (
    <S.SearchWrapper>
      <SearchForm />
      <S.SearchTitleWrapper>
        <S.SearchTitle>
          {searchTerm}
          <S.SearchTitleGray> 에 대한 검색 결과입니다.</S.SearchTitleGray>
        </S.SearchTitle>
        <Selector />
      </S.SearchTitleWrapper>
      <AiServiceList data={data} />
    </S.SearchWrapper>
  );
}

export default Search;
