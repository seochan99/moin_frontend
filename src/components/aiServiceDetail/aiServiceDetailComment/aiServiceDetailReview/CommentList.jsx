import React, { useState } from "react";
import Comment from "./Comment";
import * as S from "./style";
import ReviewListIcon from "../../../../assets/images/icon/reviewList.png";
import MyReviewListIcon from "../../../../assets/images/icon/myReviewList.png";
import Paging from "../../../common/paging/Paging";
import CommonCommentList from "../../../common/commonCommentList/CommonCommentList";

const CommentList = ({
  comments,
  onUpdate,
  onDelete,
  userInfo,
  myComments,
  myCommentsCnt,
  count
}) => {
  // const memberComments = comments.filter(comment => comment.isMember);

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

  // 한 페이지당 보여줄 댓글 수
  const itemsPerPage = 10;

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지의 댓글 목록 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedComments.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <>
        <S.MyCommentsWrap>
          {userInfo && (
            <>
              {mySortedComments.length > 0 && (
                <>
                  <S.AiServiceDetailReviewCommentMyReviewWrap>
                    <S.AiServiceDetailReviewCommentMyReviewText>
                      <S.AiServiceDetailReviewCommentMyReviewListIcon
                        src={MyReviewListIcon}
                        alt="나의 후기 아이콘"
                      />
                      나의 후기 {myCommentsCnt}
                    </S.AiServiceDetailReviewCommentMyReviewText>
                  </S.AiServiceDetailReviewCommentMyReviewWrap>
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
            </>
          )}
        </S.MyCommentsWrap>
      </>

      {/* 댓글목록 */}
      <S.ReviewHeader>
        <S.ReviewHeaderIcon src={ReviewListIcon} alt="후기 목록 아이콘" />
        <S.ReviewHeaderText>후기 {count}</S.ReviewHeaderText>
      </S.ReviewHeader>
      {/* CommonCommentList 컴포넌트로 대체 */}
      <CommonCommentList
        currentItems={currentItems}
        comments={comments}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        onUpdate={onUpdate}
        onDelete={onDelete}
        userInfo={userInfo}
      />
    </>
  );
};

export default CommentList;
