import { styled } from "styled-components";

export const AiServiceDetailReviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

// 별점
export const AiServiceDetailReviewStarWrap = styled.div`
  display: flex;
  margin-left: 3rem;
  margin-top: 3rem;
`;

export const AiServiceDetailReviewStarMy = styled.div``;

export const AiServiceDetailReviewStarMyHeader = styled.div`
  display: flex;
`;

export const AiServiceDetailReviewStarMyHeaderIcon = styled.img`
  width: 2.8rem;
`;

export const AiServiceDetailReviewStarHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  color: #4285f4;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-left: 0.5rem;
`;

export const AiServiceDetailReviewStarMyContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

export const AiServiceDetailReviewStarMyContentIcon = styled.div`
  display: flex;
  justify-content: center;
  border: 0.5px solid #acacac;
  border-radius: 15px;
  padding: 0.7rem 1.3rem;
`;

export const AiServiceDetailReviewStarMyContentSubmit = styled.div`
  color: #aeafb9;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  border: 0.5px solid #acacac;
  border-radius: 14px;
  padding: 1.5rem 1.3rem;
  margin-left: 1rem;
`;

export const AiServiceDetailReviewStarAvg = styled.div`
  margin-left: 26.3rem;
`;

export const AiServiceDetailReviewStarAvgHeader = styled.div`
  display: flex;
`;

export const AiServiceDetailReviewStarAvgHeaderIcon = styled.img`
  width: 2.8rem;
`;

export const AiServiceDetailReviewStarAvgHeaderTitle = styled.div``;

export const AiServiceDetailReviewStarAvgContent = styled.div`
  display: flex;
  border: 0.5px solid #acacac;
  border-radius: 14px;
  padding: 0.75rem 4rem;
  margin-top: 2rem;
`;

export const AiServiceDetailReviewStarAvgContentResult = styled.div`
  display: flex;
  align-items: center;
`;

export const AiServiceDetailReviewStarAvgContentResultAi = styled.div`
  color: #4285f4;
  font-size: 3rem;
  font-weight: 600;
  margin-right: 0.8rem;
`;

export const AiServiceDetailReviewStarAvgContentResultTotal = styled.div`
  color: #282828;
  font-size: 2rem;
  font-weight: 600;
  margin-right: 0.8rem;
`;

export const AiServiceDetailReviewStarAvgContentResultCnt = styled.div`
  color: #9d9d9d;
  font-size: 1.6rem;
  font-weight: 400;
  margin-right: 3rem;
`;

export const AiServiceDetailReviewStarAvgContentIcon = styled.div``;
export const AiServiceDetailReviewStarAvgContentSubmit = styled.div``;

// 이용후기 댓글

// 댓글 작성하는 곳
export const AiServiceDetailReviewCommentFormWrite = styled.form`
  display: flex;
  margin-top: 2rem;
  margin-left: 2rem;
  justify-content: center;
  align-items: center;
`;

export const AiServiceDetailReviewCommentFormWriteTextArea = styled.textarea`
  width: 86rem;
  height: 9rem;
  padding: 1rem;
  resize: none;
  border: 1px solid #aeafb9;
  font-size: 1.8rem;
  margin-right: 1rem;
  font-family: inherit;
  ::placeholder {
    color: #acacac;
  }
  font-weight: 500;
`;

export const AiServiceDetailReviewCommentFormWriteButton = styled.button`
  width: 80px;
  height: 9rem;
  border: 1px solid #aeafb9;
`;

// 이용 후기 목록
export const AiServiceDetailReviewListLi = styled.li`
  display: flex;
  flex-direction: column;
  padding: 2.6rem;
  border-bottom: 2px solid #f0f0f0;
`;

export const AiServiceDetailReviewMyWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AiServiceDetailReviewListHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 3rem;
`;
export const AiServiceDetailReviewListWriter = styled.div`
  color: #282828;
  font-size: 2.2rem;
  font-weight: 700;
  margin-right: 2rem;
`;
export const AiServiceDetailReviewListDate = styled.div`
  color: #acacac;
  font-size: 1.8rem;
  font-weight: 500;
`;
export const AiServiceDetailReviewListContent = styled.div`
  width: 100rem;
  margin-top: 2.2rem;
  margin-left: 3rem;
  color: #282828;
  font-size: 1.8rem;
  font-weight: 500;
  white-space: pre-line;
  word-wrap: break-word;
`;

// 이용후기 댓글 작성 폼
export const AiServiceDetailReviewCommentWrap = styled.div`
  display: flex;
  margin-top: 4.5rem;
  margin-left: 3rem;
`;
export const AiServiceDetailReviewCommentForm = styled.div``;
export const AiServiceDetailReviewCommentFormTitle = styled.div`
  display: flex;
  align-items: center;
`;
export const AiServiceDetailReviewCommentFormTitleIcon = styled.img`
  width: 4rem;
`;

export const AiServiceDetailReviewCommentFormTitleText = styled.div`
  color: #4285f4;
  font-size: 2rem;
  font-weight: 700;
`;

// 내 댓글
export const AiServiceDetailReviewMyLi = styled.li`
  display: flex;
  width: 95rem;
  flex-direction: row;
  padding: 2.6rem;
  border-radius: 10px;
  background: rgba(178, 191, 235, 0.39);
  margin-top: 2.2rem;
  margin-left: 5rem;
`;

export const AiServiceDetailReviewMyHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 3rem;
`;
export const AiServiceDetailReviewMyWriter = styled.div`
  color: #282828;
  font-size: 2.2rem;
  font-weight: 700;
  margin-right: 2rem;
`;
export const AiServiceDetailReviewMyDate = styled.div`
  color: #acacac;
  font-size: 1.8rem;
  font-weight: 500;
`;
export const AiServiceDetailReviewMyContent = styled.div`
  width: 70rem;
  margin-top: 2.2rem;
  margin-left: 3rem;
  color: #282828;
  font-size: 1.8rem;
  font-weight: 500;
  white-space: pre-line;
  word-wrap: break-word;
`;

// 이용후기 목록
export const AiServiceDetailReviewListWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #f0f0f0;
  display: flex;
  margin-top: 1.6rem;
  width: 100%;
`;

export const AiServiceDetailReviewListUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// 이용후기 댓글 수정/삭제 버튼
export const AiServiceDetailReviewMyButton = styled.div`
  display: flex;
  margin-left: 2rem;
`;
export const AiServiceDetailReviewMyButtonEdit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 0.8rem;
  background: #4285f4;
  padding: 0.7rem 1rem;
  width: 6.7rem;
  height: 3.7rem;
`;
export const AiServiceDetailReviewMyButtonDelete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 0.8rem;
  background: #aeafb9;
  padding: 0.7rem 1rem;
  width: 6.7rem;
  height: 3.7rem;
  margin-left: 1rem;
`;

// 이용후기 댓글 수정 폼
export const AiServiceDetailReviewCommentFormWriteMy = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-left: 5rem;
  justify-content: center;
  align-items: center;
`;
