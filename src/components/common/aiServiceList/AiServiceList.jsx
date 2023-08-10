import React from "react";
import * as S from "./style";

import AiService from "./AiService";
import ListView from "../paging/ListView";

function AiServiceList({ data }) {
  return (
    <>
      <S.MainAiServiceListWrapper>
        <S.MainAiServices>
          <ListView items={data} postPerPage={12}>
            <AiService />
          </ListView>
        </S.MainAiServices>
      </S.MainAiServiceListWrapper>
    </>
  );
}

export default AiServiceList;
