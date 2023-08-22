import React, { useEffect, useState } from "react";

import axios from "../../../api/axios";
import PostList from "../../common/postList/PostList";
import Loading from "../../common/loading/Loading";
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
  const [init, setInit] = useState(false);

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
      setInit(true);
    } catch (e) {}
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
    } catch (e) {}
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
      {init ? (
        <>
          {" "}
          <PostList
            use={"communityTips"}
            category={"tip"}
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
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
}

export default CommunityTips;
