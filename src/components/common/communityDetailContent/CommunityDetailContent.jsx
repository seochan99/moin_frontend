import React from "react";
import * as S from "./style"; // 해당 컴포넌트에 사용되는 스타일 파일 경로를 임포트해주세요.
import BinIcon from "../../../assets/images/icon/bin.png";
import PencilIcon from "../../../assets/images/icon/pencil.png";
import EditDelete from "../editDelete/EditDelete";

const CommunityDetailContent = ({ detail, isWriter, id }) => {
  return (
    <>
      <S.DetailTitleWrapper>
        <S.DetailTitle>{detail.title}</S.DetailTitle>
        <EditDelete
          isWriter={isWriter}
          id={id}
          handleEdit={null}
          handleDelete={null}
          isBlue={false}
        />
      </S.DetailTitleWrapper>
      <S.DetailTitleInfoWrapper>
        <S.DetailTitleGrayInfo>작성자 : {detail.writer}</S.DetailTitleGrayInfo>
        <S.DetailTitleGrayInfo>{detail.created_at}</S.DetailTitleGrayInfo>
      </S.DetailTitleInfoWrapper>
      <S.DetailContent>{detail.content}</S.DetailContent>
    </>
  );
};

export default CommunityDetailContent;
