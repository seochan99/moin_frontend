import React, { useEffect, useState } from "react";
import * as S from "./style";
import List from "../../common/list/List";
import axios from "../../../api/axios";
import TipsList from "../../common/tipsList/TipsList";

function CommunityQna() {
  const [qnaContent, setQnaContent] = useState([]);

  // 현재 페이지
  const [aiOption, setAiOption] = useState([]);
  const [currentAiOption, setCurrentAiOption] = useState("");

  const getCurrentAiOption = option => {
    setCurrentAiOption(option);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(1);

  const SelectorOption = [
    { value: "recent", title: "최신순" },
    { value: "popular", title: "조회순" },
    { value: "like", title: "좋아요순" }
  ];

  const [currentOption, setCurrentOption] = useState("recent");

  const getCurrentOption = option => {
    setCurrentOption(option);
  };

  // ai option state
  const fetchAiContent = async () => {
    try {
      const response = await axios.get("moin/all/ai");
      const aiData = response.data;
      setAiOption(aiData);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchQnaContent = async () => {
    try {
      const DecodeAiOption = decodeURI(currentAiOption);
      const response = await axios.get(
        `/communities/qnas?ordering=${currentOption}&page=${currentPage}&search=${DecodeAiOption}`
      );

      const qnaContentData = response.data.results;
      setCount(response.data.count);
      setQnaContent(qnaContentData);
    } catch (e) {
      console.log(e);
    }
  };

  // 초기 ai option
  useEffect(() => {
    fetchAiContent();
  }, []);

  // 옵션 선택시
  useEffect(() => {
    setCurrentPage(1);
    fetchQnaContent();
  }, [currentOption, currentAiOption]);

  //페이지변경시
  useEffect(() => {
    fetchQnaContent();
  }, [currentPage]);

  return (
    <>
      <TipsList
        data={qnaContent}
        url={"/community/qnas/"}
        writeUrl={"/community/create"}
        currentOption={currentOption}
        currentAiOption={currentAiOption}
        SelectorOption={SelectorOption}
        aiOption={aiOption}
        getCurrentOption={getCurrentOption}
        getCurrentAiOption={getCurrentAiOption}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        count={count}
      />
    </>
  );
}

export default CommunityQna;
