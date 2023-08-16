import React, { useEffect, useState } from "react";
import * as S from "./style";
import * as CS from "../community/style";
import Banner from "../../components/common/banner/Banner";
import List from "../../components/common/list/List";
import SuggestionList from "../../components/common/suggestionList/SuggestionList";
import axios from "../../api/axios";

function Suggestion() {
  const [sugestionContent, setSugestionContent] = useState([]);
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  const [count, setCount] = useState(0);
  useEffect(() => {
    fetchSuggestionContent();
  }, []);

  const fetchSuggestionContent = async () => {
    try {
      const response = await axios.get(`/suggestions?page=${currentPage}`);

      const ContentData = response.data.results;
      setCount(response.data.count);

      setSugestionContent(ContentData);
    } catch (e) {
      console.log(e);
    }
  };

  //페이지변경
  useEffect(() => {
    fetchSuggestionContent();
  }, [currentPage]);

  return (
    <S.SuggestionWrapper>
      <Banner
        titleKorean="건의사항"
        titleEnglish="SUGGESTION"
        image={<S.SuggestionIconImg />}
      />
      <CS.CommunityContentWrapper>
        <SuggestionList
          data={sugestionContent}
          url={"/suggestion/"}
          writeUrl={"/suggestion/create"}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          count={count}
        />
      </CS.CommunityContentWrapper>
    </S.SuggestionWrapper>
  );
}

export default Suggestion;
