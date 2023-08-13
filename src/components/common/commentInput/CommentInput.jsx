import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";

function CommentInput({ isUser, id }) {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  const sumbitComment = async () => {
    // 댓글 등록
    try {
      // header
      const accessToken = userInfo.accessToken; // 추출한 accessToken
      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };

      const response = await axios.post(
        `communities/posts/${id}/comments/`,
        {
          content: content
        },
        {
          headers
        }
      );
      if (response.status === 200) {
        alert("댓글이 등록되었습니다.");
      }
    } catch (err) {
      console.log(err);
    }

    setContent("");
  };

  return !isUser ? (
    <>
      <S.DetailCommentInputWrapper
        onClick={() => {
          navigate("/login");
        }}
      >
        <S.DetailCommentInput
          placeholder="로그인 후 댓글을 작성할 수 있습니다."
          disabled
        />
        <S.DetailCommentButton>로그인</S.DetailCommentButton>
      </S.DetailCommentInputWrapper>
    </>
  ) : (
    <>
      <S.DetailCommentInputWrapper onSubmit={sumbitComment}>
        <S.DetailCommentInput
          placeholder="답변을 작성해보세요 !"
          onChange={e => setContent(e.target.value)}
          required
        />
        <S.DetailCommentButton>등록</S.DetailCommentButton>
      </S.DetailCommentInputWrapper>
    </>
  );
}

export default CommentInput;
