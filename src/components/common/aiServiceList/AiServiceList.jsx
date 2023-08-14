import React, { useEffect } from "react";
import * as S from "./style";

import AiService from "./AiService";
import ListView from "../paging/ListView";

function AiServiceList({
  data,
  count,
  currentPage,
  getCurrentPage,
  searchTerm
}) {
  return (
    <>
      <S.MainAiServiceListWrapper>
        <S.MainAiServices>
          <ListView
            items={data}
            count={count}
            postPerPage={12}
            currentPage={currentPage}
            getCurrentPage={getCurrentPage}
          >
            <AiService searchTerm={searchTerm} />
          </ListView>
        </S.MainAiServices>
      </S.MainAiServiceListWrapper>
    </>
  );
}

export default AiServiceList;
