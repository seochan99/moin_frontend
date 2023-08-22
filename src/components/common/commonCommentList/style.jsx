import { styled } from "styled-components";

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
// 댓글 목록 페이징

export const AiServiceDetailReviewListPagingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;

export const AiServiceDetailReviewListPaging = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  transform: translate(-50%, 0);
`;
