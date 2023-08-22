import React from "react";
import * as S from "./style";

function PostMonitorList(data, url, currentPage, count, use) {
  let thList = [];
  let posts = data.data;

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

  const ifThListContain = thTitle => {
    if (thList.includes(thTitle)) {
      return true;
    } else {
      return false;
    }
  };

  return (
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
                  <strong style={{ fontSize: "1.6rem", color: "#4285F4" }}>
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
  );
}

export default PostMonitorList;
