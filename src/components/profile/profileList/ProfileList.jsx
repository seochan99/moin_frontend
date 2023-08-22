import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";

// 컴포넌트

import Paging from "../../common/paging/Paging";
import { useRecoilState } from "recoil";
import { userState } from "../../../context/authState";
import NoPage from "../../common/noPage/NoPage";

const ProfileList = ({
  data,
  category,
  currentPage,
  setCurrentPage,
  count,
  islike,
  iscomment
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

  let index = -1;

  return (
    <>
      <S.AiServiceDetailTipWrap>
        <S.AiServiceDetailTipLine></S.AiServiceDetailTipLine>
        {/* 데이터 목록 */}
        {data && data.length > 0 ? (
          <S.AiServiceDetailTipTable>
            <S.AiServiceDetailTipTableThead>
              <S.AiServiceDetailTipTableTr>
                <S.AiServiceDetailTipTableTh>번호</S.AiServiceDetailTipTableTh>
                <S.AiServiceDetailTipTableTh>
                  카테고리
                </S.AiServiceDetailTipTableTh>
                {islike ? (
                  <>
                    <S.AiServiceDetailTipTableTh>
                      서비스명
                    </S.AiServiceDetailTipTableTh>
                  </>
                ) : (
                  <></>
                )}

                <S.AiServiceDetailTipTableTh>
                  {iscomment ? "내용" : "제목"}
                </S.AiServiceDetailTipTableTh>

                <S.AiServiceDetailTipTableTh>
                  등록일시
                </S.AiServiceDetailTipTableTh>

                {islike ? (
                  <>
                    <S.AiServiceDetailTipTableTh>
                      좋아요
                    </S.AiServiceDetailTipTableTh>
                  </>
                ) : (
                  <></>
                )}
              </S.AiServiceDetailTipTableTr>
            </S.AiServiceDetailTipTableThead>
            <S.AiServiceDetailTipTableTbody>
              {data.map((data, idx) => {
                if (data.category === category || category === "total") {
                  index = index + 1;
                  return (
                    <S.AiServiceDetailTipTableTrContent
                      key={data.id}
                      onClick={() => {
                        let url;

                        if (data.category === "common") {
                          url = "/community/commons/";
                        } else if (data.category === "tip") {
                          url = "/community/tips/";
                        } else if (data.category === "qna") {
                          url = "/community/qnas/";
                        } else if (data.category === "건의사항") {
                          url = "/suggestion/";
                        } else if (data.category === "ai") {
                          url = "/AiService/";
                        } else {
                          return;
                        }

                        navigate(
                          `${url}${
                            iscomment ? data.ai || data.community_id : data.id
                          }`
                        );
                      }}
                    >
                      <S.AiServiceDetailTipTableTd>
                        {index + 1 + (currentPage - 1) * itemsPerPage}
                      </S.AiServiceDetailTipTableTd>

                      <S.AiServiceDetailTipTableTd>
                        {data.category === "common" && "자유 게시판"}
                        {data.category === "tip" && "이용 꿀팁"}
                        {data.category === "qna" && "Q&A"}
                        {data.category === "건의사항" && "건의사항"}
                        {data.category === "ai" && "ai"}
                      </S.AiServiceDetailTipTableTd>

                      {islike ? (
                        <>
                          <S.AiServiceDetailTipTableTd>
                            {data.ai}
                          </S.AiServiceDetailTipTableTd>
                        </>
                      ) : (
                        <></>
                      )}

                      <S.AiServiceDetailTipTableTdTitle>
                        {iscomment ? data.content : data.title}

                        {islike ? (
                          <>
                            <strong
                              style={{ fontSize: "1.6rem", color: "#4285F4" }}
                            >
                              [{data.comments_cnt}]
                            </strong>
                          </>
                        ) : (
                          <></>
                        )}
                      </S.AiServiceDetailTipTableTdTitle>

                      <S.AiServiceDetailTipTableTd>
                        {data.created_at.split(" ")[0]}
                      </S.AiServiceDetailTipTableTd>

                      {islike ? (
                        <>
                          <S.AiServiceDetailTipTableTd>
                            {data.likes_cnt}
                          </S.AiServiceDetailTipTableTd>
                        </>
                      ) : (
                        <></>
                      )}
                    </S.AiServiceDetailTipTableTrContent>
                  );
                }
                return null; // 카테고리가 맞지 않는 경우 렌더링하지 않음
              })}
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

export default ProfileList;
