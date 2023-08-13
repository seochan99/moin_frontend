import axios from "../../../api/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";
import CommuntiyDetailPageType from "../../../components/community/communtiyDetailPageType/CommuntiyDetailPageType";
import CommunityDetailContent from "../../../components/common/communityDetailContent/CommunityDetailContent";
import EyeOutlineIcon from "../../../assets/images/icon/eye_outline.png";
import * as AS from "../../../components/aiServiceDetail/aiServiceDetailComment/aiServiceDetailReview/style";
import EditDelete from "../../../components/common/editDelete/EditDelete";
function SuggestionDetailPage() {
  // type에는 common,tips, qnas 들어갈 수 있음
  const { id } = useParams();

  const [detail, setDetail] = useState({});

  const [comment, setComment] = useState({
    id: 1,
    community: 17,
    writer: "haha",
    created_at: "2023/08/12 20:07",
    updated_at: "2023/08/12 20:07",
    content: "댓글 달았찡!"
  });
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
          id: 2,
          writer: "sad",
          title: "tt",
          content: "gggg",
          url: "",
          comments: [],
          images: [
            {
              image:
                "http://127.0.0.1:8000/media/suggestion/2/%ED%8B%B0%EA%B1%B0.jpg"
            }
          ],
          created_at: "2023/08/13 03:09",
          updated_at: "2023/08/13 03:09",
          reflected_status: 0
        }
      };

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
        <CommunityDetailContent detail={detail} isWriter={false} id={id} />
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

  return (
    <S.DetailPageWrapper>
      <CommuntiyDetailPageType type={"suggestion"} aiName={null} />
      <S.DetailDiviner />
      {renderDetail()}
      <S.DetailCommentHeader>MOIN 답변</S.DetailCommentHeader>
      <S.DetailDiviner />
      <AS.AiServiceDetailReviewMyWrap>
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
      </AS.AiServiceDetailReviewMyWrap>
    </S.DetailPageWrapper>
  );
}

export default SuggestionDetailPage;
