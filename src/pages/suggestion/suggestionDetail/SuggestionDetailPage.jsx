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
  const [aiName, setAiName] = useState("");
  const [isWriter, setIsWriter] = useState(false);
  const [isUser, setIsUser] = useState(true);

  const [comment, setComment] = useState({});

  const fetchComment = async () => {
    try {
      const response = await axios.get(`suggestions/${id}/comments`);
      console.log(response);
      setComment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // writer 확인
  const fetchIsWriter = async () => {
    try {
      const accessToken = user.accessToken; // 추출한 accessToken
      console.log(user);
      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };

      const response = await axios.get(`users/check?type=suggestion&id=${id}`, {
        headers
      });
      setIsWriter(response.data.is_writer);
    } catch (error) {
      console.log(error);
    }
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
      console.log(response);
      setDetail(response.data);
      setAiName(response.data.ai);

      setLikeCount(response.data.likes_cnt);
      setDetail(response.data);
    } catch (error) {
      console.log(error);
    }
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
        <CommunityDetailContent detail={detail} isWriter={isWriter} id={id} />
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

  // ------------------ 댓글 렌더링 ------------------
  const renderComment = () => {
    return !comment || comment.length ? (
      <>
        <AS.AiServiceDetailReviewListContent
          style={{ marginLeft: "0rem", color: "#282828" }}
        >
          작성된 답변이 없습니다.
        </AS.AiServiceDetailReviewListContent>
      </>
    ) : (
      <>
        <AS.AiServiceDetailReviewListHeader>
          <AS.AiServiceDetailReviewListHeaderWrapper>
            <AS.AiServiceDetailReviewListWriter>
              {comment.writer}
            </AS.AiServiceDetailReviewListWriter>
            <AS.AiServiceDetailReviewListDate>
              {comment.created_at}
            </AS.AiServiceDetailReviewListDate>
          </AS.AiServiceDetailReviewListHeaderWrapper>
          <EditDelete isWriter={false} id={comment.id} />
        </AS.AiServiceDetailReviewListHeader>
        <AS.AiServiceDetailReviewListContent>
          {comment.content}
        </AS.AiServiceDetailReviewListContent>
      </>
    );
  };

  return (
    <S.DetailPageWrapper>
      <CommuntiyDetailPageType type={"suggestion"} aiName={aiName} />
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
