import React from "react";
import * as S from "./style";
import Paging from "../paging/Paging";
import Comment from "../../aiServiceDetail/aiServiceDetailComment/aiServiceDetailReview/Comment";

const CommonCommentList = ({
  comments,
  itemsPerPage,
  currentPage,
  handlePageChange,
  userInfo,
  count,
  category,
  fetchComments,
  fetchDetail
}) => {
  // 댓글 내용 부분만 추출
  const commentsContent = comments.results;

  if (!commentsContent) {
    return <>Loading comments...</>;
  }

  // 댓글 데이터를 최신순으로 정렬
  // const sortedComments = commentsContent.slice().reverse();

  return (
    <S.AiServiceDetailReviewListWrap>
      <S.AiServiceDetailReviewListUl>
        {commentsContent.map((comment, idx) => (
          <Comment
            key={idx}
            id={comment.id}
            isTemp={comment.is_tmp}
            content={comment.content}
            writer={comment.writer}
            created_at={comment.created_at}
            userInfo={userInfo}
            category={category}
            fetchComments={fetchComments}
            fetchDetail={fetchDetail}
          />
        ))}
      </S.AiServiceDetailReviewListUl>
      <S.AiServiceDetailReviewListPagingWrap>
        <S.AiServiceDetailReviewListPaging>
          <Paging
            page={currentPage}
            count={count}
            postPerPage={itemsPerPage}
            setPage={handlePageChange}
          />
        </S.AiServiceDetailReviewListPaging>
      </S.AiServiceDetailReviewListPagingWrap>
    </S.AiServiceDetailReviewListWrap>
  );
};

export default CommonCommentList;
