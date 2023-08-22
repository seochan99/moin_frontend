import axios from "../../../api/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";
import CommuntiyDetailPageType from "../../../components/community/communtiyDetailPageType/CommuntiyDetailPageType";
import CommunityDetailContent from "../../../components/common/communityDetailContent/CommunityDetailContent";
import EyeOutlineIcon from "../../../assets/images/icon/eye_outline.png";
import * as AS from "../../../components/aiServiceDetail/aiServiceDetailComment/aiServiceDetailReview/style";
import EditDelete from "../../../components/common/editDelete/EditDelete";
import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";
function SuggestionDetailPage() {
  // type에는 common,tips, qnas 들어갈 수 있음
  const { id } = useParams();
  const [user] = useRecoilState(userState);

  const [detail, setDetail] = useState({});
  const [isWriter, setIsWriter] = useState(false);
  const [isUser, setIsUser] = useState(true);

  const [comment, setComment] = useState([]);

  // 좋아요
  const fetchComment = async () => {
    try {
      const response = await axios.get(`suggestions/${id}/comments`);

      setComment(response.data);
    } catch (error) {}
  };

  // writer 확인
  const fetchIsWriter = async () => {
    try {
      const accessToken = user.accessToken; // 추출한 accessToken

      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };

      const response = await axios.get(`users/check?type=suggestion&id=${id}`, {
        headers
      });
      setIsWriter(response.data.is_writer);
    } catch (error) {}
  };

  // 처음 Detail 렌더링
  useEffect(() => {
    // 유저가 있을 경우 writer인지 확인
    if (user) {
      fetchIsWriter();
    }
    fetchDetail();
    fetchComment();
  }, []);

  const fetchDetail = async () => {
    try {
      const response = await axios.get(`suggestions/${id}`);

      setDetail(response.data);
    } catch (error) {}
  };

  // ------------------ 디테일 렌더링 ------------------
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
          isWriter={false}
          id={id}
          user={user}
          type={"suggestion"}
        />
        <S.DetailDiviner />
        <S.LikeViewWrapper>
          <S.DetailViewText>
            {detail.reflected_status === 0 ? (
              <S.StatusText color="#282828">대기중</S.StatusText>
            ) : detail.reflected_status === 1 ? (
              <S.StatusText color="#4285F4">반영</S.StatusText>
            ) : (
              <S.StatusText color="#FF5D47">미반영</S.StatusText>
            )}
          </S.DetailViewText>
        </S.LikeViewWrapper>
      </>
    );
  };

  // ------------------ 댓글 렌더링 -----------------

  const renderComment = () => {
    return comment.length === 0 ? (
      <AS.AiServiceDetailReviewListContent
        style={{ marginLeft: "0rem", color: "#282828" }}
      >
        작성된 답변이 없습니다.
      </AS.AiServiceDetailReviewListContent>
    ) : (
      comment.map(commentItem => (
        <S.Wrapper key={commentItem.id}>
          <AS.AiServiceDetailReviewListHeader>
            <AS.AiServiceDetailReviewListHeaderWrapper>
              <AS.AiServiceDetailReviewListWriter>
                {commentItem.writer}
              </AS.AiServiceDetailReviewListWriter>
              <AS.AiServiceDetailReviewListDate>
                {commentItem.created_at}
              </AS.AiServiceDetailReviewListDate>
            </AS.AiServiceDetailReviewListHeaderWrapper>
            <EditDelete isWriter={false} id={commentItem.id} />
          </AS.AiServiceDetailReviewListHeader>
          <AS.AiServiceDetailReviewListContent>
            {commentItem.content}
          </AS.AiServiceDetailReviewListContent>
        </S.Wrapper>
      ))
    );
  };
  return (
    <S.DetailPageWrapper>
      <CommuntiyDetailPageType type={"suggestion"} aiName={""} />
      <S.DetailDiviner />
      {renderDetail()}

      <S.DetailCommentHeader>MOIN 답변</S.DetailCommentHeader>
      <S.DetailDiviner />
      <AS.AiServiceDetailReviewMyWrap>
        {renderComment()}
      </AS.AiServiceDetailReviewMyWrap>
    </S.DetailPageWrapper>
  );
}

export default SuggestionDetailPage;
