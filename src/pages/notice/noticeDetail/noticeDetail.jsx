import axios from "../../../api/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";
import CommuntiyDetailPageType from "../../../components/community/communtiyDetailPageType/CommuntiyDetailPageType";
import CommunityDetailContent from "../../../components/common/communityDetailContent/CommunityDetailContent";
import EyeOutlineIcon from "../../../assets/images/icon/eye_outline.png";

function NoticeDetailPage() {
  // type에는 common,tips, qnas 들어갈 수 있음
  const { id } = useParams();
  const [detail, setDetail] = useState({});

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
          <S.Thumbnailimg src={EyeOutlineIcon} alt="조회수" />
          <S.DetailViewText>{detail.view_cnt}</S.DetailViewText>
        </S.LikeViewWrapper>
      </>
    );
  };

  return (
    <S.DetailPageWrapper>
      <CommuntiyDetailPageType type={"notice"} aiName={null} />
      <S.DetailDiviner />
      {renderDetail()}
    </S.DetailPageWrapper>
  );
}

export default NoticeDetailPage;
