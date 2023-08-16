import styled from "styled-components";

// detailTitle
export const DetailTitle = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #4285f4;
  margin-bottom: 1rem;
`;

export const MarkdownWrapper = styled.div`
  font-size: 1600px; /* 원하는 글자 크기로 수정 */
  /* 다른 스타일 속성도 추가 가능 */
`;

export const DetailTitleInfoWrapper = styled.div`
  display: flex;
  // row
  flex-direction: row;
  margin-bottom: 2rem;
`;

export const DetailTitleWrapper = styled.div`
  display: flex;
  // row

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailTitleGrayInfo = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: #acacac;
  margin-right: 1rem;
`;

export const DetailContent = styled.div`
  margin-top: 3.5rem;
  font-size: 2rem;
  font-weight: 400;
  color: #282828;
  line-height: 2.5rem;
  margin-bottom: 2rem;
`;
