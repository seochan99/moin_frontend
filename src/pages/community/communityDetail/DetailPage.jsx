import axios from "../../../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as S from "./style";
import ThumbIcon from "../../../assets/images/icon/mypageThumb.png";
import ThumbOutlineIcon from "../../../assets/images/icon/thumb_outline.png";
import EyeOutlineIcon from "../../../assets/images/icon/eye_outline.png";
import CommuntiyDetailPageType from "../../../components/community/communtiyDetailPageType/CommuntiyDetailPageType";
import { AiServiceDetailContentDescriptionCompanyImg } from "../../../components/aiServiceDetail/aiServiceDetailIntro/style";
import CommunityDetailContent from "../../../components/common/communityDetailContent/CommunityDetailContent";
import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";
import CommentInput from "../../../components/common/CommentInput/CommentInput";
import CommonCommentList from "../../../components/common/commonCommentList/CommonCommentList";

function DetailPage() {
  const [user] = useRecoilState(userState);

  const [comments, setComments] = useState({
    count: 24,
    next: "http://127.0.0.1:8000/api/v1/moin/detail/ho/comments/?page=${id}",
    previous: "http://127.0.0.1:8000/api/v1/moin/detail/ho/comments/",
    results: [
      {
        id: 43,
        ai: "ho",
        is_tmp: false,
        writer: "admin",
        content: "페이지네이션 테스트\n",
        created_at: "2023/08/10 12:12",
        updated_at: "2023/08/10 12:12"
      },
      {
        id: 52,
        ai: "ho",
        is_tmp: false,
        writer: "admin",
        content: "페이지네이션 테스트\n",
        created_at: "2023/08/10 12:12",
        updated_at: "2023/08/10 12:12"
      }
    ]
  });

  // 댓글 데이터를 최신순으로 정렬
  const sortedComments = comments.results.slice().reverse();
  // 한 페이지당 보여줄 댓글 수
  const itemsPerPage = 10;

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지의 댓글 목록 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedComments.slice(indexOfFirstItem, indexOfLastItem);

  // type에는 common,tips, qnas 들어갈 수 있음
  const { type, id } = useParams();

  // detail와서 ai name받기
  const [aiName, setAiName] = useState("ChatGPT-3");
  const [isWriter, setIsWriter] = useState(true);
  const [isUser, setIsUser] = useState(true);

  const [detail, setDetail] = useState({});
  const [likeCount, setLikeCount] = useState(0);
  const [likeImage, setLikeImage] = useState(ThumbOutlineIcon);

  const handleLike = async islike => {
    // 비어 토큰

    // 유저 있는지 없는지 체크
    try {
      // islike is true
      // 좋아요 취소
      if (islike) {
        setLikeCount(likeCount - 1);
        setLikeImage(ThumbOutlineIcon);
        // post
        setDetail(prevDetail => ({ ...prevDetail, likes_cnt: likeCount - 1 }));
      }
      // islike is false
      // 좋아요
      else {
        setLikeCount(likeCount + 1);
        setLikeImage(ThumbIcon);
        // post
        setDetail(prevDetail => ({ ...prevDetail, likes_cnt: likeCount + 1 }));
      }
    } catch (error) {
      console.log(error);
      // Handle error if needed
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    try {
      // const response = await axios.get(`community/${type}/${id}/`);
      // console.log(response.data);
      // setDetail(response.data);

      // 임시 데이터
      const response = {
        data: {
          id: 1,
          category: "",
          writer: "서찬",
          title: "서차나ㅇ아난",
          content: "안녕하세요! 서찬입니다.",
          is_liked: false,
          view_cnt: 302,
          comments_cnt: 3,
          likes_cnt: 2,
          images:
            "https://velog.velcdn.com/images/seochan99/post/f69eadaf-46d2-4910-927d-e187ceaee4ab/image.png",
          created_at: "2023.01.01 8:20",
          updated_at: "202301.01 8:40"
        }
      };
      setLikeCount(response.data.likes_cnt);
      setDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 디테일 렌더링
  const renderDetail = () => {
    return !detail ? (
      <>
        <S.DetailTitle>로딩중</S.DetailTitle>
        <S.DetailDiviner />
      </>
    ) : (
      <>
        <CommunityDetailContent detail={detail} isWriter={isWriter} id={1} />
        <S.DetailDiviner />
        <S.LikeViewWrapper>
          <S.Thumbnailimg src={EyeOutlineIcon} alt="조회수" />
          <S.DetailViewText>{detail.view_cnt}</S.DetailViewText>
          {/* is_liked 여부에 따라 */}
          {detail.is_liked ? (
            <S.Thumbnailimg
              src={likeImage}
              alt="좋아요"
              onClick={() => handleLike(true)}
            />
          ) : (
            <S.Thumbnailimg
              src={likeImage}
              alt="좋아요"
              onClick={() => handleLike(false)}
            />
          )}
          <S.DetailViewText>{likeCount}</S.DetailViewText>
        </S.LikeViewWrapper>
      </>
    );
  };

  return (
    <S.DetailPageWrapper>
      <CommuntiyDetailPageType
        type={type}
        aiName={type === "tips" ? aiName : null}
      />
      <S.DetailDiviner />
      {/* detail 불러오기 */}
      {renderDetail(isWriter)}

      {/* 댓글 입력 */}
      <S.DetailCommentHeader>답변 {detail.comments_cnt}</S.DetailCommentHeader>
      <CommentInput isUser={isUser} id={detail.id} />
      {/* <S.DetailDiviner /> */}
      <CommonCommentList
        currentItems={comments.results} // 사용할 댓글 데이터 배열
        comments={comments.results} // 전체 댓글 데이터 배열
        itemsPerPage={itemsPerPage} // 한 페이지당 보여줄 댓글 수
        currentPage={currentPage} // 현재 페이지
        handlePageChange={pageNumber => setCurrentPage(pageNumber)} // 페이지 변경 핸들러
        onUpdate={null} // 댓글 업데이트 핸들러
        onDelete={null}
        userInfo={user} // 사용자 정보
      />
    </S.DetailPageWrapper>
  );
}

export default DetailPage;
