import React, { useState, useEffect } from "react";
import * as S from "./style";

// 컴포넌트
import Selector from "../../../common/selector/Selector";
import Paging from "../../../common/paging/Paging";

export function AiServiceDetailTip() {
  const [tipContent, setTipContent] = useState([]);

  useEffect(() => {
    const tipData = [
      {
        id: 1,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 2,
        title: "챗지피티에 ",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 3,
        title: "챗지피티에 대해 보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 4,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 5,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 6,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 7,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 8,
        title: "챗지피티에",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 9,
        title: "챗지피티에",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 10,
        title: "챗지피티에",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 11,
        title: "챗지피티에",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 12,
        title: "챗지피티에 ",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 13,
        title: "챗지피티에 해자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      }

      // 추가.....
    ];
    setTipContent(tipData);
  }, []);

  //Paging

  // 한 페이지당 보여줄 댓글 수
  const itemsPerPage = 10;

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지의 댓글 목록 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tipContent.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <S.AiServiceDetailTipWrap>
        <S.AiServiceDetailTipHeader>
          <S.AiServiceDetailTipHeaderWrite>
            <S.StyledPencilIcon />
            글쓰기
          </S.AiServiceDetailTipHeaderWrite>
          <S.AiServiceDetailTipHeaderSort>
            <Selector /> {/* 임시로 넣어둠 */}
          </S.AiServiceDetailTipHeaderSort>
        </S.AiServiceDetailTipHeader>
        <S.AiServiceDetailTipLine></S.AiServiceDetailTipLine>
        {/* 이용꿀팁 목록 */}
        <S.AiServiceDetailTipTable>
          <S.AiServiceDetailTipTableThead>
            <S.AiServiceDetailTipTableTr>
              <S.AiServiceDetailTipTableTh>번호</S.AiServiceDetailTipTableTh>
              <S.AiServiceDetailTipTableTh>제목</S.AiServiceDetailTipTableTh>
              <S.AiServiceDetailTipTableTh>
                서비스명
              </S.AiServiceDetailTipTableTh>
              <S.AiServiceDetailTipTableTh>
                등록일시
              </S.AiServiceDetailTipTableTh>
              <S.AiServiceDetailTipTableTh> </S.AiServiceDetailTipTableTh>
            </S.AiServiceDetailTipTableTr>
          </S.AiServiceDetailTipTableThead>
          <S.AiServiceDetailTipTableTbody>
            {currentItems.map(tip => (
              <S.AiServiceDetailTipTableTr key={tip.id}>
                <S.AiServiceDetailTipTableTd>
                  {tip.id}
                </S.AiServiceDetailTipTableTd>
                <S.AiServiceDetailTipTableTd>
                  {tip.title}
                </S.AiServiceDetailTipTableTd>
                <S.AiServiceDetailTipTableTd>
                  {tip.name}
                </S.AiServiceDetailTipTableTd>
                <S.AiServiceDetailTipTableTd>
                  {tip.date}
                </S.AiServiceDetailTipTableTd>
                <S.AiServiceDetailTipTableTd>
                  <S.LikeIcon />
                  {tip.like}
                  <S.CommentIcon />
                  {tip.comment_cnt}
                </S.AiServiceDetailTipTableTd>
              </S.AiServiceDetailTipTableTr>
            ))}
          </S.AiServiceDetailTipTableTbody>
        </S.AiServiceDetailTipTable>
        {/* 페이지네이션 컴포넌트 사용 */}
        <S.AiServiceDetailTipPaging>
          <Paging
            page={currentPage}
            count={tipContent.length}
            postPerPage={itemsPerPage}
            setPage={handlePageChange}
          />
        </S.AiServiceDetailTipPaging>
      </S.AiServiceDetailTipWrap>
    </>
  );
}
