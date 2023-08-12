import React, { useState } from "react";
import Comment from "./Comment";
import * as S from "./style";
import ReviewListIcon from "../../../../assets/images/icon/reviewList.png";
const CommentList = ({
  comments,
  onUpdate,
  onDelete,
  userInfo,
  myComments
}) => {
  const memberComments = comments.filter(comment => comment.isMember);

  // 나중에 추가??
  // const filteredMyComments = myComments.filter(comment => comment.writer === userInfo.username);

  // 댓글 데이터를 최신순으로 정렬
  const sortedComments = comments.slice().reverse();

  // 내 댓글 더보기
  const [showMore, setShowMore] = useState(false);
  // 작성한 댓글 데이터를 최신순으로 정렬
  const mySortedComments = myComments.slice().reverse();
  const visibleComments = showMore
    ? mySortedComments
    : mySortedComments.slice(0, 1); // 처음엔 한 개만 보이게 설정

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  console.log("userInfo List");
  console.log(userInfo);
  console.log("userInfo List");
  return (
    <>
      <>
        <S.MyCommentsWrap>
          {userInfo && (
            <>
              {/* 보여지는 첫 번째 댓글 */}
              <Comment
                key={visibleComments[0].id}
                content={visibleComments[0].content}
                writer={visibleComments[0].writer}
                created_at={visibleComments[0].created_at}
                onUpdate={updatedComment =>
                  onUpdate(visibleComments[0].id, updatedComment)
                }
                onDelete={() => onDelete(visibleComments[0].id)}
                userInfo={userInfo}
                isRegist={true}
              />

              {/* 더보기 버튼 */}
              {myComments.length > 1 && (
                <S.MoreButtonWrap>
                  <S.MoreButton onClick={handleToggleShowMore}>
                    {showMore ? "접기" : "펼치기"}
                  </S.MoreButton>
                </S.MoreButtonWrap>
              )}

              {/* 숨겨진 내 댓글 목록 */}
              <S.SlideCommentsWrap className={showMore ? "show" : "hide"}>
                {mySortedComments.slice(1).map(comment => (
                  <Comment
                    key={comment.id}
                    content={comment.content}
                    writer={comment.writer}
                    created_at={comment.created_at}
                    onUpdate={updatedComment =>
                      onUpdate(comment.id, updatedComment)
                    }
                    onDelete={() => onDelete(comment.id)}
                    userInfo={userInfo}
                    isRegist={true}
                  />
                ))}
              </S.SlideCommentsWrap>
            </>
          )}
        </S.MyCommentsWrap>
      </>

      {/* 댓글목록 */}
      <S.ReviewHeader>
        <S.ReviewHeaderIcon src={ReviewListIcon} alt="후기 목록 아이콘" />
        <S.ReviewHeaderText>후기</S.ReviewHeaderText>
      </S.ReviewHeader>

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
              userInfo={userInfo}
            />
          ))}
        </S.AiServiceDetailReviewListUl>
      </S.AiServiceDetailReviewListWrap>
    </>
  );
};

export default CommentList;
