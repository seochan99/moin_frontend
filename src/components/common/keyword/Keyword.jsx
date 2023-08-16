import React from "react";
import * as S from "./style";

function Keyword({ keyword, keywordFontSize, keywordFontWeight = "400" }) {
  const keywordColor = {
    챗봇: "#FFB6A7",
    개발: "#98ADF2",
    디자인: "#FFD494",
    영상: "#FFBB56",
    마케팅: "#b992d8",
    분석: "#f5aee3",
    음성: "#a2dda0",
    언어: "#73b8b8",
    유료: "#535353",
    무료: "#d0d0d0"
  };
  return (
    <S.KeywordWrapper>
      {keyword.map((item, idx) => (
        <S.KeywordTag
          key={idx}
          style={{ backgroundColor: keywordColor[item] }}
          fontSize={keywordFontSize}
          fontWeight={keywordFontWeight}
        >
          {item}
        </S.KeywordTag>
      ))}
    </S.KeywordWrapper>
  );
}

export default Keyword;
