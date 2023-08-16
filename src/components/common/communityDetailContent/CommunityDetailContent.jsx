import React from "react";
import * as S from "./style"; // 해당 컴포넌트에 사용되는 스타일 파일 경로를 임포트해주세요.
import BinIcon from "../../../assets/images/icon/bin.png";
import PencilIcon from "../../../assets/images/icon/pencil.png";
import EditDelete from "../editDelete/EditDelete";
import axios from "../../../api/axios";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const CommunityDetailContent = ({ detail, isWriter, id, user }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        const accessToken = user.accessToken; // 추출한 accessToken
        console.log(user);
        const headers = {
          Authorization: `Bearer ${accessToken}` // Bearer Token 설정
        };
        const response = await axios.delete(`communities/posts/${id}`, {
          headers
        });
        console.log(response);
        if (response.status === 204) {
          navigate("/community");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  // edit으로 보내기
  const handleEdit = () => {
    navigate(`/community/edit/${id}`);
  };

  const markdown = `
  # 해딩

  **굵게**
  
  하이 ㅋ

  \`\`\`

  code block

  \`\`\`

  > 인용쓰
  `;

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
      <S.DetailContent>
        <S.MarkdownWrapper>
          <ReactMarkdown
            children={detail.content}
            remarkPlugins={[remarkGfm]}
          />
        </S.MarkdownWrapper>
      </S.DetailContent>
    </>
  );
};

export default CommunityDetailContent;
