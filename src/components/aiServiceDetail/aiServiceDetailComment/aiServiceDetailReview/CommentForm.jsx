import React, { useState } from "react";
import * as S from "./style";

// 아이콘
import ReviewIcon from "../../../../assets/images/icon/review.png";

const CommentForm = ({ onSubmit }) => {
  const [comment, setComment] = useState("");
  const [password, setPassword] = useState("");
  const [isRegist, setIsRegist] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(comment, password);
    setComment("");
    setPassword("");
    setIsRegist(true);
  };
  /**
  if (isRegist) {
    return null;
  }
 */
  return (
    <>
      <S.AiServiceDetailReviewCommentWrap>
        <S.AiServiceDetailReviewCommentForm>
          <S.AiServiceDetailReviewCommentFormTitle>
            <S.AiServiceDetailReviewCommentFormTitleIcon
              src={ReviewIcon}
              alt="후기 아이콘"
            />

            <S.AiServiceDetailReviewCommentFormTitleText>
              당신의 후기를 남겨주세요
            </S.AiServiceDetailReviewCommentFormTitleText>
          </S.AiServiceDetailReviewCommentFormTitle>

          <S.AiServiceDetailReviewCommentFormWrite onSubmit={handleSubmit}>
            <S.AiServiceDetailReviewCommentFormWriteTextArea
              value={comment}
              onChange={e => setComment(e.target.value)}
              minLength={10}
              maxLength={300}
              required
              placeholder="당신의 후기를 남겨주세요"
            />
            {/* 비회원일 때 비밀번호 입력받기 */}
            {/* <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                pattern="\d{4}"
                title="4 숫자를 입력해주세요."
                required
              /> */}
            <S.AiServiceDetailReviewCommentFormWriteButton type="submit">
              등록
            </S.AiServiceDetailReviewCommentFormWriteButton>
          </S.AiServiceDetailReviewCommentFormWrite>
        </S.AiServiceDetailReviewCommentForm>
      </S.AiServiceDetailReviewCommentWrap>
    </>
  );
};

export default CommentForm;
