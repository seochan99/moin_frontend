import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";

// 컴포넌트
import Selector from "../selector/Selector";
import Paging from "../paging/Paging";
import { useRecoilState } from "recoil";
import { userState } from "../../../context/authState";
import NoPage from "../noPage/NoPage";
import NoticeBanner from "../noticeBanner/NoticeBanner";

const SuggestionList = ({
  data,
  url,
  writeUrl,
  currentPage,
  setCurrentPage,
  count
}) => {
  const [userInfo, setUserInfo] = useRecoilState(userState);

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
          title={"이용안내"}
          content={
            "건의사항은 관리자 열람 이후, 건의 내용에 따라 답변까지 3-5일 소요됩니다."
          }
        />

        <S.AiServiceDetailTipHeader>
          <S.AiServiceDetailTipHeaderWriteContent
            onClick={() => {
              // 로그인하지 않은 경우 로그인 페이지로 이동
              !userInfo ? navigate("/login") : navigate(writeUrl);
            }}
          >
            <S.StyledPencilIcon />
            글쓰기
          </S.AiServiceDetailTipHeaderWriteContent>
        </S.AiServiceDetailTipHeader>
        <S.AiServiceDetailTipLine></S.AiServiceDetailTipLine>
        {/* 데이터 목록 */}
        {data && data.length > 0 ? (
          <S.AiServiceDetailTipTable>
            <S.AiServiceDetailTipTableThead>
              <S.AiServiceDetailTipTableTr>
                <S.AiServiceDetailTipTableTh>번호</S.AiServiceDetailTipTableTh>
                <S.AiServiceDetailTipTableTh>제목</S.AiServiceDetailTipTableTh>
                <S.AiServiceDetailTipTableTh></S.AiServiceDetailTipTableTh>
                <S.AiServiceDetailTipTableTh>
                  등록일시
                </S.AiServiceDetailTipTableTh>
                <S.AiServiceDetailTipTableTh>
                  반영여부
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
                  <S.AiServiceDetailTipTableTd></S.AiServiceDetailTipTableTd>
                  <S.AiServiceDetailTipTableTd>
                    {data.created_at.split(" ")[0]}
                  </S.AiServiceDetailTipTableTd>
                  <S.AiServiceDetailTipTableTd>
                    {data.reflected_status === 0 ? (
                      <S.StatusText color="#282828">대기중</S.StatusText>
                    ) : data.reflected_status === 1 ? (
                      <S.StatusText color="#4285F4">반영</S.StatusText>
                    ) : (
                      <S.StatusText color="#FF5D47">미반영</S.StatusText>
                    )}
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

export default SuggestionList;
