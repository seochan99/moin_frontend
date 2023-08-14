import styled, { keyframes } from "styled-components";

// 컴포넌트
import Modal from "react-modal"; // 모달창

export const AiServiceDetailReviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

// 별점wrap
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

export const AiServiceDetailReviewStarMyContentSubmit = styled.button`
  color: #aeafb9;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  border: 0.5px solid #acacac;
  border-radius: 14px;
  padding: 1.5rem 1.3rem;
  margin-left: 1rem;

  &:hover {
    background-color: #ededed;
  }
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
  flex-direction: column;
  margin-top: 2rem;
  /* margin-left: 2rem; */
  justify-content: center;
  align-items: flex-start;
`;

export const AiServiceDetailReviewCommentFormWriteTextArea = styled.textarea`
  width: 91rem;
  height: 9rem;
  padding: 1rem;
  padding-left: 1.5rem;
  resize: none;
  border-radius: 20px;
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
  border-radius: 20px;
  border: 1px solid #aeafb9;
  color: #acacac;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;

  &:hover {
    background: #e8e8e8;
  }
`;

// 이용 후기 목록
export const AiServiceDetailReviewListLi = styled.li`
  display: flex;

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
  justify-content: space-between;
  margin-left: 3rem;
`;

export const AiServiceDetailReviewListHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
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
  width: 2.3rem;
  margin-right: 0.8rem;
`;

export const AiServiceDetailReviewCommentFormTitleText = styled.div`
  color: #4285f4;
  font-size: 2rem;
  font-weight: 700;
`;

// 내 댓글
export const AiServiceDetailReviewMyLi = styled.li`
  display: flex;
  width: 100rem;
  flex-direction: row;
  padding: 2.6rem;
  border-radius: 10px;
  background: rgba(178, 191, 235, 0.39);
  margin-top: 2.2rem;
  margin-left: 3rem;
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

// 이용후기 댓글 수정/삭제 버튼
export const AiServiceDetailReviewMyButton = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;

  margin-left: 5rem;
`;
export const AiServiceDetailReviewMyButtonEdit = styled.button`
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

  &:hover {
    background: #2c5aa3;
  }
`;
export const AiServiceDetailReviewMyButtonDelete = styled.button`
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

  &:hover {
    background: #6a6a70;
  }
`;

// 이용후기 댓글 수정 폼
export const AiServiceDetailReviewCommentFormWriteMy = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-left: 3rem;
  justify-content: center;
  align-items: center;
`;

// 이용후기 헤더 추가
export const ReviewHeader = styled.div`
  display: flex;
  margin-top: 7.5rem;
  margin-left: 3rem;
`;
export const ReviewHeaderText = styled.div`
  display: flex;
  color: #4285f4;
  font-size: 2rem;
  font-weight: 700;
`;
export const ReviewHeaderIcon = styled.img`
  display: flex;
  width: 2.8rem;
  margin-right: 0.8rem;
`;

// 비회원 비밀번호
export const AiServiceDetailReviewMyButtonNotUser = styled.div`
  display: flex;
  margin-right: 0;
`;

export const AiServiceDetailReviewMyButtonDeleteNotUser = styled.div`
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
  margin-left: -5rem;
  &:hover {
    background: #6a6a70;
  }
`;

export const AiServiceDetailReviewCommentFormWritePwd = styled.input`
  display: flex;

  border-radius: 20px;
  border: 1px solid #aeafb9;

  width: 21rem;
  height: 5.3rem;
  padding: 1rem;
  padding-left: 1.5rem;
  resize: none;
  border-radius: 20px;
  border: 1px solid #aeafb9;
  font-size: 1.8rem;
  font-weight: 500;
  font-family: inherit;

  margin-bottom: 1.3rem;

  ::placeholder {
    color: #acacac;
  }
`;

export const AiServiceDetailReviewCommentFormWriteContent = styled.div`
  display: flex;
`;

// 내 댓글 더보기 버튼 생성
const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 1000px; /* 적절한 최대 높이 설정 */
    opacity: 1;
  }
`;

export const MyCommentsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MoreButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MoreButton = styled.button`
  display: flex;
  color: #aeafb9;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 1.3rem;
`;

export const SlideCommentsWrap = styled.div`
  max-height: 0; // 처음에 안보이게
  overflow: hidden;
  transition: max-height 0.3s ease-in-out; //접는 속도

  &.show {
    max-height: 100rem;
    transition: max-height 0.5s ease-in-out; //펼치는 속도
  }
`;

// 비회원 삭제 모달창
export const NotUserDeleteModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 30rem;

  overlay {
    background-color: rgba(255, 2, 2, 0.5);
    z-index: 1000;
  }
`;

export const NotUserDeleteModalContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100rem;
  height: 30rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const NotUserDeleteModalContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #4285f4;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const NotUserDeleteModalContentButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export const NotUserDeleteModalContentButtonConfirm = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #000;
  padding: 1rem 4rem;
  margin-right: 2rem;

  &:hover {
    background-color: #ededed;
  }
`;

export const NotUserDeleteModalContentButtonCancle = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #000;
  padding: 1rem 4rem;

  &:hover {
    background-color: #ededed;
  }
`;

// 나의 후기 헤더
export const AiServiceDetailReviewCommentMyReviewWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7rem;
  margin-left: 3rem;
`;

export const AiServiceDetailReviewCommentMyReviewListIcon = styled.img`
  width: 2.3rem;
  margin-right: 0.8rem;
`;

export const AiServiceDetailReviewCommentMyReviewText = styled.div`
  display: flex;
  color: #4285f4;
  font-size: 2rem;
  font-weight: 700;
`;

// 회원 삭제창
export const DeleteModalContentTitle = styled.div`
  display: flex;
  color: #4285f4;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const DeleteModalContentButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 8.5rem;
`;

export const RatingBox = styled.div`
  margin: 0 auto;

  & svg {
    color: #c4c4c4;
    cursor: pointer;
  }
  :hover svg {
    color: black;
  }
  & svg:hover ~ svg {
    color: #c4c4c4;
  }
  .black {
    color: black;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Stars = styled.div`
  display: flex;
  padding: 0.6rem;
  & svg {
    color: #d9d9d9;
    cursor: pointer;
  }

  :hover svg {
    color: #ffd600;
  }

  & svg:hover ~ svg {
    color: #d9d9d9;
  }

  .yellowStar {
    color: #ffd600;
  }
`;
