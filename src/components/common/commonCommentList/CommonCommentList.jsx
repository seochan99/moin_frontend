import React from "react";
import * as S from "./style";
import Paging from "../paging/Paging";
import Comment from "../../aiServiceDetail/aiServiceDetailComment/aiServiceDetailReview/Comment";

const CommonCommentList = ({
  currentItems,
  comments,
  itemsPerPage,
  currentPage,
  handlePageChange,
  onUpdate,
  onDelete,
  userInfo
}) => {
  return (
    <S.AiServiceDetailReviewListWrap>
      <S.AiServiceDetailReviewListUl>
        {currentItems.map(comment => (
          <Comment
            key={comment.id}
            content={comment.content}
            writer={comment.writer}
            created_at={comment.created_at}
            onUpdate={updatedComment => onUpdate(comment.id, updatedComment)}
            onDelete={() => onDelete(comment.id)}
            userInfo={userInfo}
          />
        ))}
      </S.AiServiceDetailReviewListUl>
      <S.AiServiceDetailReviewListPagingWrap>
        <S.AiServiceDetailReviewListPaging>
          <Paging
            page={currentPage}
            count={comments.length}
            postPerPage={itemsPerPage}
            setPage={handlePageChange}
          />
        </S.AiServiceDetailReviewListPaging>
      </S.AiServiceDetailReviewListPagingWrap>
    </S.AiServiceDetailReviewListWrap>
  );
};

export default CommonCommentList;
