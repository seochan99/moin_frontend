import axios from "../../../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import ThumbIcon from "../../../assets/images/icon/mypageThumb.png";
import ThumbOutlineIcon from "../../../assets/images/icon/thumb_outline.png";
import EyeOutlineIcon from "../../../assets/images/icon/eye_outline.png";
import CommuntiyDetailPageType from "../../../components/community/communtiyDetailPageType/CommuntiyDetailPageType";
import { AiServiceDetailContentDescriptionCompanyImg } from "../../../components/aiServiceDetail/aiServiceDetailIntro/style";
import CommunityDetailContent from "../../../components/common/communityDetailContent/CommunityDetailContent";
import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";
import CommentInput from "../../../components/common/commentInput/CommentInput";
import CommonCommentList from "../../../components/common/commonCommentList/CommonCommentList";

function DetailPage() {
  const [user, setUser] = useRecoilState(userState);
  const [commentContent, setCommentContent] = useState("");
  const [comments, setComments] = useState([]);
  const [viewCnt, setViewCnt] = useState(0);
  const [isFirst, setIsFirst] = useState(true);
  // 한 페이지당 보여줄 댓글 수
  const itemsPerPage = 10;
  const navigate = useNavigate();
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  // type에는 common,tips, qnas 들어갈 수 있음
  const { type, id } = useParams();

  // detail와서 ai name받기
  const [aiName, setAiName] = useState("ChatGPT-3");
  const [isUser, setIsUser] = useState(true);
  const [isWriter, setIsWriter] = useState(false);
  const [detail, setDetail] = useState({});
  const [likeImage, setLikeImage] = useState(ThumbOutlineIcon);

  // 댓글 가져오기
  // /api/v1/communities/posts/{post_id}/comments?page={num}
  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `communities/posts/${id}/comments?page=${currentPage}`
      );
      setComments(response.data);
    } catch (error) {}
  };

  // 좋아요 토글
  const handleLikeToggle = async () => {
    if (!user) {
      // 로그인 모달창\
      // 로그인하지 않은 경우 로그인 페이지로 이동
      navigate("/login");
      return;
    }

    try {
      // 좋아요 상태 확인

      const accessToken = user.accessToken;
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };

      // isLiked가 true이면 좋아요 취소, delete 요청보내기
      if (likeImage === ThumbIcon) {
        const response = await axios.delete(`communities/${type}/${id}`, {
          headers
        });

        if (response.status === 200) {
          setLikeImage(ThumbOutlineIcon);
        }
      } else {
        const response = await axios.post(`communities/${type}/${id}`, null, {
          headers
        });

        if (response.status === 200) {
          setLikeImage(ThumbIcon);
        }
      }
    } catch (error) {}
  };

  const fetchDetail = async () => {
    if (user) {
      const accessToken = user.accessToken ?? null; // 추출한 accessToken
      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };
      try {
        const response = await axios.get(`communities/${type}/${id}`, {
          headers
        });
        if (isFirst) {
          setViewCnt(response.data.view_cnt);
          setIsFirst(false);

          setLikeImage(response.data.is_liked ? ThumbIcon : ThumbOutlineIcon);
        }
        setDetail(response.data);

        setCommentContent();
        setAiName(response.data.ai);
      } catch (error) {}
    } else {
      try {
        const response = await axios.get(`communities/${type}/${id}`);
        if (isFirst) {
          setViewCnt(response.data.view_cnt);
          setIsFirst(false);

          setLikeImage(response.data.is_liked ? ThumbIcon : ThumbOutlineIcon);
        }
        setDetail(response.data);

        setCommentContent();
        setAiName(response.data.ai);
      } catch (error) {}
    }
  };

  // writer 확인
  const fetchIsWriter = async () => {
    try {
      const accessToken = user.accessToken; // 추출한 accessToken

      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };

      const response = await axios.get(`users/check?type=community&id=${id}`, {
        headers
      });
      setIsWriter(response.data.is_writer);
    } catch (error) {}
  };
  // 페이지 변경 핸들러
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };
  // 처음 Detail 렌더링
  useEffect(() => {
    // 유저가 있을 경우 writer인지 확인
    if (user) {
      fetchIsWriter();
    }
    fetchDetail();
    fetchComments();
  }, []);

  // 처음 Detail 렌더링
  useEffect(() => {
    // 좋아요 바꼈을때 리렌더링
    fetchDetail();
  }, [likeImage]);

  // 새 페이지마다 댓글 가져오기
  useEffect(() => {
    fetchComments();
  }, [currentPage]);

  // ChangeCommentValue
  // 디테일 렌더링
  const renderDetail = () => {
    return !detail ? (
      <>
        <S.DetailTitle>로딩중</S.DetailTitle>
        <S.DetailDiviner />
      </>
    ) : (
      <>
        <CommunityDetailContent
          detail={detail}
          isWriter={isWriter}
          id={detail.id}
          user={user}
          type={"community"}
        />
        <S.DetailDiviner />
        <S.LikeViewWrapper>
          <S.Thumbnailimg src={EyeOutlineIcon} alt="조회수" />
          <S.DetailViewText>{viewCnt}</S.DetailViewText>
          {/* is_liked 여부에 따라 */}
          <S.Thumbnailimg
            src={likeImage}
            alt="좋아요"
            onClick={handleLikeToggle}
          />
          <S.DetailViewText>{detail.likes_cnt}</S.DetailViewText>
        </S.LikeViewWrapper>
      </>
    );
  };

  const renderComment = () => {
    return comments.length === 0 ? (
      <>작성된 답변이 없습니다.</>
    ) : (
      <>
        <CommonCommentList
          comments={comments}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          userInfo={user} // 사용자 정보
          count={comments.count}
          category={"community"}
          fetchComments={fetchComments}
          fetchDetail={fetchDetail}
        />
      </>
    );
  };

  return (
    <S.DetailPageWrapper>
      <CommuntiyDetailPageType
        type={type}
        aiName={
          type === "tips" || type == "qnas" ? (aiName ? aiName : null) : null
        }
      />
      <S.DetailDiviner />
      {/* detail 불러오기 */}
      {renderDetail(isWriter)}

      {/* 댓글 입력 */}
      <S.DetailCommentHeader>답변 {detail.comments_cnt}</S.DetailCommentHeader>
      <CommentInput
        isUser={isUser}
        id={detail.id}
        fetchDetail={fetchDetail}
        fetchComments={fetchComments}
      />
      {/* <S.DetailDiviner /> */}
      {renderComment()}
    </S.DetailPageWrapper>
  );
}

export default DetailPage;
