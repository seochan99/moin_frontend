import React from "react";
import Comment from "./Comment";
import * as S from "./style";
const CommentList = ({ comments, onUpdate, onDelete }) => {
  const memberComments = comments.filter(comment => comment.isMember);

  // 댓글 데이터를 최신순으로 정렬
  const sortedComments = comments.slice().reverse();

  // 작성한 댓글 데이터를 최신순으로 정렬
  const memberSortedComments = memberComments.slice().reverse();

  return (
    <>
      <>
        {/* 내가 작성한 댓글 */}
        {memberSortedComments.map(comment => (
          <Comment
            key={comment.id}
            content={comment.content}
            writer={comment.writer}
            created_at={comment.created_at}
            onUpdate={updatedComment => onUpdate(comment.id, updatedComment)}
            onDelete={() => onDelete(comment.id)}
            isMember={comment.isMember}
            isRegist={true}
          />
        ))}
      </>

      {/* 댓글목록 */}
      <S.AiServiceDetailReviewListWrap>
        <S.AiServiceDetailReviewListUl>
          {sortedComments.map(comment => (
            <Comment
              key={comment.id}
              content={comment.content}
              writer={comment.writer}
              created_at={comment.created_at}
              onUpdate={updatedComment => onUpdate(comment.id, updatedComment)}
              onDelete={() => onDelete(comment.id)}
            />
          ))}
        </S.AiServiceDetailReviewListUl>
      </S.AiServiceDetailReviewListWrap>
    </>
  );
};

export default CommentList;
