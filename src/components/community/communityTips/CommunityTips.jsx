import React, { useEffect, useState } from "react";
import * as S from "./style";
import List from "../../common/list/List";
import TipsList from "../../common/tipsList/TipsList";
import axios from "../../../api/axios";
function CommunityTips() {
  const [tipContent, setTipContent] = useState([]);

  const [aiOption, setAiOption] = useState([]);
  const [currentAiOption, setCurrentAiOption] = useState("");

  const getCurrentAiOption = option => {
    setCurrentAiOption(option);
  };
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);

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

  const fetchTipContent = async () => {
    try {
      const DecodeAiOption = decodeURI(currentAiOption);
      const response = await axios.get(
        `/communities/tips?ordering=${currentOption}&page=${currentPage}&search=${DecodeAiOption}`
      );
      const tipContentData = response.data.results;
      setCount(response.data.count);
      setTipContent(tipContentData);
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
    fetchTipContent();
  }, [currentOption, currentAiOption]);

  //페이지변경시
  useEffect(() => {
    fetchTipContent();
  }, [currentPage]);

  return (
    <>
      <TipsList
        data={tipContent}
        url={"/community/tips/"}
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

export default CommunityTips;
