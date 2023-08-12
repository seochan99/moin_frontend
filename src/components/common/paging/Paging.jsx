import React, { useState, useEffect } from "react";
import * as S from "./style";
import "./style.css";

function Paging({ page, count, postPerPage, setPage }) {
  const pageRangeDisplayed = 5;
  const numPages = Math.ceil(count / postPerPage);
  const numPagesSection = Math.ceil(numPages / pageRangeDisplayed);
  const [currentPageSection, setCurrentPageSection] = useState(0);

  useEffect(() => {
    setPage(currentPageSection * pageRangeDisplayed + 1);
  }, [currentPageSection]);
  return (
    <>
      <S.Nav>
        <S.Button
          onClick={() => {
            setCurrentPageSection(currentPageSection - 1);
          }}
          disabled={currentPageSection === 0}
        >
          &lt;
        </S.Button>

        {Array(numPages)
          .fill()
          .slice(
            currentPageSection * pageRangeDisplayed,
            (currentPageSection + 1) * pageRangeDisplayed
          )
          .map((_, i) => (
            <S.Button
              key={currentPageSection * pageRangeDisplayed + i + 1}
              onClick={() =>
                setPage(currentPageSection * pageRangeDisplayed + i + 1)
              }
              aria-current={
                page === currentPageSection * pageRangeDisplayed + i + 1
                  ? "page"
                  : null
              }
            >
              {currentPageSection * pageRangeDisplayed + i + 1}
            </S.Button>
          ))}

        <S.Button
          onClick={() => {
            setCurrentPageSection(currentPageSection + 1);
          }}
          disabled={currentPageSection === numPagesSection - 1}
        >
          &gt;
        </S.Button>
      </S.Nav>
    </>
  );
}

export default Paging;
