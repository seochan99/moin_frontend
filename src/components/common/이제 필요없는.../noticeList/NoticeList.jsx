import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";

// 컴포넌트

import Paging from "../../paging/Paging";

import NoPage from "../../noPage/NoPage";
import NoticeBanner from "../../noticeBanner/NoticeBanner";

const NoticeList = ({ data, url, currentPage, setCurrentPage, count }) => {
  const navigate = useNavigate();

  //Paging
  // 한 페이지당 보여줄 댓글 수
  const itemsPerPage = 10;
  // 페이지 변경 핸들러
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <S.AiServiceDetailTipWrap>
        <NoticeBanner
          title={"공지안내"}
          content={"중요한정보! 모두 여기에 모였다!"}
        />
        <S.AiServiceDetailTipLine></S.AiServiceDetailTipLine>
        {/* 데이터 목록 */}
        {data && data.length > 0 ? (
          <S.AiServiceDetailTipTable>
            <S.AiServiceDetailTipTableThead>
              <S.AiServiceDetailTipTableTr>
                <S.AiServiceDetailTipTableTh>번호</S.AiServiceDetailTipTableTh>
                <S.AiServiceDetailTipTableTh>제목</S.AiServiceDetailTipTableTh>

                <S.AiServiceDetailTipTableTh>
                  등록일시
                </S.AiServiceDetailTipTableTh>
                <S.AiServiceDetailTipTableTh>
                  조회수
                </S.AiServiceDetailTipTableTh>
              </S.AiServiceDetailTipTableTr>
            </S.AiServiceDetailTipTableThead>
            <S.AiServiceDetailTipTableTbody>
              {data.map((data, idx) => (
                <S.AiServiceDetailTipTableTrContent
                  key={data.id}
                  onClick={() => navigate(`${url}${data.id}`)}
                >
                  <S.AiServiceDetailTipTableTd>
                    {count - idx - (currentPage - 1) * itemsPerPage}
                  </S.AiServiceDetailTipTableTd>
                  <S.AiServiceDetailTipTableTdTitle>
                    {data.title}
                  </S.AiServiceDetailTipTableTdTitle>

                  <S.AiServiceDetailTipTableTd>
                    {data.created_at.split(" ")[0]}
                  </S.AiServiceDetailTipTableTd>
                  <S.AiServiceDetailTipTableTd>
                    {data.view_cnt}
                  </S.AiServiceDetailTipTableTd>
                </S.AiServiceDetailTipTableTrContent>
              ))}
            </S.AiServiceDetailTipTableTbody>
          </S.AiServiceDetailTipTable>
        ) : (
          <>
            <NoPage />
          </>
        )}
        {/* 페이지네이션 컴포넌트 사용 */}
        <S.AiServiceDetailTipPaging>
          <Paging
            page={currentPage}
            count={count}
            postPerPage={itemsPerPage}
            setPage={handlePageChange}
          />
        </S.AiServiceDetailTipPaging>
      </S.AiServiceDetailTipWrap>
    </>
  );
};

export default NoticeList;
