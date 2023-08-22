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
      // /api/v1/notifications/{notification_id}
      const response = await axios.get(`notifications/${id}`);
      if (response.status === 200) {
        const data = response.data;
        setDetail(data);
      }
    } catch (error) {}
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
