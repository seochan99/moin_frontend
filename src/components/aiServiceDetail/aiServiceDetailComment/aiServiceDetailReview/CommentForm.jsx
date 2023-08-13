import React, { useState } from "react";
import * as S from "./style";

// 아이콘
import ReviewIcon from "../../../../assets/images/icon/review.png";

const CommentForm = ({ onSubmit, userInfo }) => {
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
              후기 작성
            </S.AiServiceDetailReviewCommentFormTitleText>
          </S.AiServiceDetailReviewCommentFormTitle>

          <S.AiServiceDetailReviewCommentFormWrite onSubmit={handleSubmit}>
            {/* 비회원일 때 비밀번호 입력받기 */}
            {!userInfo ? (
              <S.AiServiceDetailReviewCommentFormWritePwd
                type="password"
                inputMode="numeric"
                value={password}
                onChange={e => setPassword(e.target.value)}
                pattern="\d{4}"
                minLength={4}
                maxLength={4}
                title="4자리 숫자로 입력해주세요"
                placeholder="비밀번호 (4자리 숫자)"
                required
              />
            ) : null}

            <S.AiServiceDetailReviewCommentFormWriteContent>
              <S.AiServiceDetailReviewCommentFormWriteTextArea
                value={comment}
                onChange={e => setComment(e.target.value)}
                minLength={10}
                maxLength={300}
                required
                placeholder="당신의 후기를 남겨주세요"
              />

              <S.AiServiceDetailReviewCommentFormWriteButton type="submit">
                등록
              </S.AiServiceDetailReviewCommentFormWriteButton>
            </S.AiServiceDetailReviewCommentFormWriteContent>
          </S.AiServiceDetailReviewCommentFormWrite>
        </S.AiServiceDetailReviewCommentForm>
      </S.AiServiceDetailReviewCommentWrap>
    </>
  );
};

export default CommentForm;
