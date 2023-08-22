import React, { useState, useEffect } from "react";
import * as S from "./style";

// 컴포넌트
import PostList from "../../../common/postList/PostList";
import axios from "../../../../api/axios";
import { useLocation } from "react-router-dom";

export function AiServiceDetailTip({ aiName }) {
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [tipContent, setTipContent] = useState([]);

  const SelectorOption = [
    { value: "recent", title: "최신순" },
    { value: "popular", title: "조회순" },
    { value: "like", title: "좋아요순" }
  ];

  const [currentOption, setCurrentOption] = useState("recent");
  const getCurrentOption = option => {
    setCurrentOption(option);
  };

  const fetchTipContent = async () => {
    try {
      const response = await axios.get(
        `/communities/tips?ordering=${currentOption}&page=${currentPage}&search=${aiName}`
      );

      const tipContentData = response.data.results;
      setCount(response.data.count);
      setTipContent(tipContentData);
    } catch (e) {}
  };

  // 초기 ai option
  useEffect(() => {
    setCurrentPage(1);
    fetchTipContent();
  }, [currentOption]);

  // 페이지 변경 핸들러
  useEffect(() => {
    fetchTipContent();
  }, [currentPage]);

  const location = useLocation();
  const decodeName = decodeURI(location.pathname.split("/")[2]);

  return (
    <>
      <PostList
        use={"communityTips"}
        category={"tip"}
        data={tipContent}
        url={"/community/tips/"}
        writeUrl={"/community/create"}
        currentOption={currentOption}
        SelectorOption={SelectorOption}
        currentAiOption={decodeName}
        getCurrentOption={getCurrentOption}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        count={count}
      />
    </>
  );
}
