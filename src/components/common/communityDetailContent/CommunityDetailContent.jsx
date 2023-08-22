import React from "react";
import * as S from "./style"; // 해당 컴포넌트에 사용되는 스타일 파일 경로를 임포트해주세요.

import EditDelete from "../editDelete/EditDelete";
import axios from "../../../api/axios";
import { useNavigate } from "react-router-dom";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const CommunityDetailContent = ({ detail, isWriter, id, user, type }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        const accessToken = user.accessToken; // 추출한 accessToken
        const headers = {
          Authorization: `Bearer ${accessToken}` // Bearer Token 설정
        };
        if (type == "suggestion") {
          // suggestions/{suggestion_id}
          const response = await axios.delete(`suggestions/${id}`, {
            headers
          });

          if (response.status === 204) {
            navigate("/suggestion");
          }
        } else {
          const response = await axios.delete(`communities/posts/${id}`, {
            headers
          });

          if (response.status === 204) {
            if (type == "suggestion") {
              navigate("/suggestion");
            }
            navigate("/community");
          }
        }
      } catch (e) {}
    }
  };

  // edit으로 보내기
  const handleEdit = () => {
    navigate(`/community/edit/${id}`, { state: { detail } });
  };

  const markdown = `${detail.content}<!--rehype:style=font-size: 1.8rem;-->`;

  return (
    <>
      <S.DetailTitleWrapper>
        <S.DetailTitle>{detail.title}</S.DetailTitle>
        <EditDelete
          isWriter={isWriter}
          id={id}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          isBlue={true}
        />
      </S.DetailTitleWrapper>
      <S.DetailTitleInfoWrapper>
        <S.DetailTitleGrayInfo>작성자 : {detail.writer}</S.DetailTitleGrayInfo>
        <S.DetailTitleGrayInfo>{detail.created_at}</S.DetailTitleGrayInfo>
      </S.DetailTitleInfoWrapper>

      <ReactMarkdown className={"markDown"} children={detail.content} />

      {/* <S.DetailContent>
        <div data-color-mode="light">
          <MarkdownPreview source={markdown} />
        </div>
        <S.MarkdownWrapper></S.MarkdownWrapper>
      </S.DetailContent> */}
    </>
  );
};

export default CommunityDetailContent;
