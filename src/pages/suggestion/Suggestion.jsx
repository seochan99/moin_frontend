import React, { useEffect, useState } from "react";
import * as S from "./style";
import * as CS from "../community/style";
import Banner from "../../components/common/banner/Banner";
import List from "../../components/common/list/List";
import SuggestionList from "../../components/common/suggestionList/SuggestionList";

function Suggestion() {
  const [sugestionContent, setSugestionContent] = useState([]);

  useEffect(() => {
    const sugestionData = [
      {
        id: 2,
        ai: "chan",
        writer: "chan",
        title: "음",
        reflected_status: 0,
        created_at: "2023/08/09 04:49",
        updated_at: "2023/08/09 04:49"
      },
      {
        id: 4,
        ai: "chan",
        writer: "",
        title: "모인 3차 회의했어용",
        reflected_status: 0,
        created_at: "2023/08/09 11:44",
        updated_at: "2023/08/09 23:30"
      },
      {
        id: 9,
        ai: null,
        writer: "dudtlstm",
        title: "ai없이",
        reflected_status: 2,
        created_at: "2023/08/10 10:31",
        updated_at: "2023/08/10 10:31"
      },
      {
        id: 10,
        ai: null,
        writer: "dudtlstm",
        title: "hihi",
        reflected_status: 0,
        created_at: "2023/08/10 11:07",
        updated_at: "2023/08/10 11:07"
      },
      {
        id: 3,
        ai: "ho",
        writer: "wy",
        title: "반대할게요. 이 서비스.",
        reflected_status: 1,
        created_at: "2023/08/09 11:34",
        updated_at: "2023/08/09 11:35"
      }

      // 추가.....
    ];
    setSugestionContent(sugestionData);
  }, []);

  return (
    <S.SuggestionWrapper>
      <Banner
        titleKorean="건의사항"
        titleEnglish="SUGGESTION"
        image={<S.SuggestionIconImg />}
      />
      <CS.CommunityContentWrapper>
        <SuggestionList data={sugestionContent} url={"/suggestion/"} />
      </CS.CommunityContentWrapper>
    </S.SuggestionWrapper>
  );
}

export default Suggestion;
