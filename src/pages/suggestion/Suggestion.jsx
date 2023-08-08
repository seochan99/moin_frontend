import React from "react";
import * as S from "./style";
import Banner from "../../components/common/banner/Banner";

function Suggestion() {
  return (
    <S.SuggestionWrapper>
      <Banner
        titleKorean="건의사항"
        titleEnglish="SUGGESTION"
        image={<S.SuggestionIconImg />}
      />
    </S.SuggestionWrapper>
  );
}

export default Suggestion;
