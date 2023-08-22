import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import * as S from "./style";

// 컴포넌트
import Selector from "../selector/Selector";
import Paging from "../paging/Paging";
import { useRecoilState } from "recoil";
import { userState } from "../../../context/authState";
import NoPage from "../noPage/NoPage";
import { AiOutlineHeart } from "react-icons/ai";

const PostList = ({
  use,
  category = "",
  data,
  url,
  writeUrl,
  currentOption = "",
  currentAiOption = "",
  SelectorOption,
  aiOption = "",
  getCurrentOption = "",
  getCurrentAiOption = "",
  currentPage,
  setCurrentPage,
  count
}) => {
  let thList = [];
  switch (use) {
    case "communityCommon":
      thList = ["번호", "제목", "등록일시", "좋아요", "조회수"];
      break;
    case "communityTips":
      thList = ["번호", "제목", "서비스명", "등록일시", "좋아요", "조회수"];
      break;
    case "communityQnA":
      thList = ["번호", "제목", "서비스명", "등록일시", "좋아요", "조회수"];
      break;
    case "notice":
      thList = ["번호", "제목", "등록일시", "조회수"];
      break;
    case "suggestion":
      thList = ["번호", "제목", "등록일시", "반영여부"];
      break;
  }

  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const navigate = useNavigate();

  //Paging
  // 한 페이지당 보여줄 게시글 수
  const itemsPerPage = 10;

  // 페이지 변경 핸들러
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const [isMobile, setisMobile] = useState(false);

  //윈도우가 550px 이하면  모바일버전을 연다
  const resizingHandler = () => {
    if (window.innerWidth < 550) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };

  const ifThListContain = thTitle => {
    if (thList.includes(thTitle)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 550) {
      setisMobile(true);
    }
    window.addEventListener("resize", resizingHandler);

    return () => {
      window.removeEventListener("resize", resizingHandler);
    };
  });

  return (
    <>
      <S.PostListWrap>
        <S.PostListHeader>
          <S.PostListHeaderWrapper>
            {aiOption != "" ? (
              <S.Select
                required
                name="ais"
                onChange={e => getCurrentAiOption(e.target.value)}
              >
                <S.Option value="">▿ 서비스 선택</S.Option>
                {aiOption.map((ai, index) => (
                  <S.Option key={index} value={ai.title}>
                    {ai.title}
                  </S.Option>
                ))}
              </S.Select>
            ) : (
              <></>
            )}
            {/* 글작성 버튼 */}
            {use != "notice" ? (
              <S.PostListHeaderWrite>
                {/* 로그인하지 않은 경우 로그인 페이지로 이동하기 */}
                <S.PostListHeaderWriteContent
                  onClick={() => {
                    !userInfo
                      ? navigate("/login")
                      : navigate(writeUrl, {
                          state: { category: category, ai: currentAiOption }
                        });
                  }}
                >
                  <S.StyledPencilIcon />
                  글쓰기
                </S.PostListHeaderWriteContent>
              </S.PostListHeaderWrite>
            ) : (
              <></>
            )}
          </S.PostListHeaderWrapper>

          {currentOption != "" ? (
            <S.PostListHeaderSort>
              <Selector
                options={SelectorOption}
                getCurrentOption={getCurrentOption}
              />
            </S.PostListHeaderSort>
          ) : (
            <></>
          )}
        </S.PostListHeader>
        <S.PostListLine></S.PostListLine>

        {/* */}
        {/* 데이터 목록 */}
        {data && data.length > 0 ? (
          isMobile ? (
            <S.PostListMobile>
              {data.map((data, idx) => (
                <S.PostListMobileWrapper
                  key={data.id}
                  onClick={() => navigate(`${url}${data.id}`)}
                >
                  <S.PostListMobukeWrapperBox1>
                    {ifThListContain("서비스명") ? (
                      <S.PostListMobileServiceTitle>
                        {data.ai}
                      </S.PostListMobileServiceTitle>
                    ) : (
                      <></>
                    )}
                    <S.PostListMobileTitle>{data.title}</S.PostListMobileTitle>
                    <S.PostListMobileDescription>
                      {ifThListContain("등록일시") ? (
                        <S.PostListMobileContent>
                          {data.created_at.split(" ")[1]}
                        </S.PostListMobileContent>
                      ) : (
                        <></>
                      )}

                      {ifThListContain("조회수") ? (
                        <S.PostListMobileContent>
                          조회 {data.view_cnt}
                        </S.PostListMobileContent>
                      ) : (
                        <></>
                      )}
                      {data.comments_cnt != undefined ? (
                        <S.PostListMobileContent>
                          댓글 {data.comments_cnt}
                        </S.PostListMobileContent>
                      ) : (
                        <></>
                      )}
                    </S.PostListMobileDescription>
                  </S.PostListMobukeWrapperBox1>

                  {ifThListContain("좋아요") ? (
                    <S.PostListMobukeWrapperBox2 style={{ color: "gray" }}>
                      <AiOutlineHeart style={{ color: "#4285F4" }} />{" "}
                      {data.likes_cnt}
                    </S.PostListMobukeWrapperBox2>
                  ) : (
                    <></>
                  )}
                  {ifThListContain("반영여부") ? (
                    <S.PostListMobukeWrapperBox2
                      style={{ color: "gray", backgroundColor: "#F8F8FA" }}
                    >
                      {data.reflected_status === 0 ? (
                        <S.StatusText color="#282828">대기중</S.StatusText>
                      ) : data.reflected_status === 1 ? (
                        <S.StatusText color="#4285F4">반영</S.StatusText>
                      ) : (
                        <S.StatusText color="#FF5D47">미반영</S.StatusText>
                      )}
                    </S.PostListMobukeWrapperBox2>
                  ) : (
                    <></>
                  )}
                </S.PostListMobileWrapper>
              ))}
            </S.PostListMobile>
          ) : (
            // 데탑

            <S.PostListTable>
              <S.PostListTableThead>
                <S.PostListTableTr>
                  {thList.map((thTitle, idx) => (
                    <S.PostListTableTh key={idx}>{thTitle}</S.PostListTableTh>
                  ))}
                </S.PostListTableTr>
              </S.PostListTableThead>

              <S.PostListTableTbody>
                {data.map((data, idx) => (
                  //   <S.PostListTableTd>{data.ai}</S.PostListTableTd>
                  <S.PostListTableTrContent
                    key={data.id}
                    onClick={() => navigate(`${url}${data.id}`)}
                  >
                    {ifThListContain("번호") ? (
                      <S.PostListTableTd>
                        {currentOption === "popular" || currentOption === "like"
                          ? idx + 1 + (currentPage - 1) * itemsPerPage
                          : count - idx - (currentPage - 1) * itemsPerPage}
                      </S.PostListTableTd>
                    ) : (
                      <></>
                    )}

                    {ifThListContain("제목") ? (
                      <S.PostListTableTdTitle>
                        {data.title}{" "}
                        {data.comments_cnt != undefined ? (
                          <strong
                            style={{ fontSize: "1.6rem", color: "#4285F4" }}
                          >
                            [{data.comments_cnt}]
                          </strong>
                        ) : (
                          <></>
                        )}
                      </S.PostListTableTdTitle>
                    ) : (
                      <></>
                    )}

                    {ifThListContain("서비스명") ? (
                      <S.PostListTableTd>{data.ai}</S.PostListTableTd>
                    ) : (
                      <></>
                    )}

                    {ifThListContain("등록일시") ? (
                      <S.PostListTableTd>
                        {data.created_at.split(" ")[0]}
                      </S.PostListTableTd>
                    ) : (
                      <></>
                    )}

                    {ifThListContain("좋아요") ? (
                      <S.PostListTableTd>{data.likes_cnt}</S.PostListTableTd>
                    ) : (
                      <></>
                    )}

                    {ifThListContain("조회수") ? (
                      <S.PostListTableTd>{data.view_cnt}</S.PostListTableTd>
                    ) : (
                      <></>
                    )}

                    {ifThListContain("반영여부") ? (
                      <S.PostListTableTd>
                        {data.reflected_status === 0 ? (
                          <S.StatusText color="#282828">대기중</S.StatusText>
                        ) : data.reflected_status === 1 ? (
                          <S.StatusText color="#4285F4">반영</S.StatusText>
                        ) : (
                          <S.StatusText color="#FF5D47">미반영</S.StatusText>
                        )}
                      </S.PostListTableTd>
                    ) : (
                      <></>
                    )}
                  </S.PostListTableTrContent>
                ))}
              </S.PostListTableTbody>
            </S.PostListTable>
          )
        ) : (
          <>
            <NoPage />
          </>
        )}
        {/* 페이지네이션 컴포넌트 사용 */}
        <S.PostListPaging>
          <Paging
            page={currentPage}
            count={count}
            postPerPage={itemsPerPage}
            setPage={handlePageChange}
          />
        </S.PostListPaging>
      </S.PostListWrap>
    </>
  );
};

export default PostList;
