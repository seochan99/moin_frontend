import { styled, keyframes } from "styled-components";
import { BiSolidPencil } from "react-icons/bi";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AiServiceDetailTipWrap = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeInAnimation} 0.5s ease-in-out;
`;

// 헤더 (글쓰기, 정렬순)
export const AiServiceDetailTipHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  width: 100%;
`;

export const AiServiceDetailTipHeaderWrite = styled.div`
  :hover {
    color: white;
    background-color: #4285f4;
  }
`;

export const AiServiceDetailTipHeaderWriteContent = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 500;
  color: #4285f4;

  border-radius: 10px;
  border: 2px solid #4285f4;
  padding: 0.7rem 1rem;

  cursor: pointer;

  :hover {
    color: white;
    background-color: #4285f4;
  }
`;

export const StyledPencilIcon = styled(BiSolidPencil)`
  font-size: 2rem;
  margin-right: 0.5rem;
`;

export const AiServiceDetailTipHeaderSort = styled.div`
  display: flex;
`;

export const AiServiceDetailTipLine = styled.div`
  display: flex;
  margin-top: 2.7rem;
  background: #4285f4;
  width: 100%;
  height: 2px;
`;

// 이용꿀팁 목록
export const AiServiceDetailTipTable = styled.table`
  margin: 0 auto;
  width: 100%;
`;

export const AiServiceDetailTipTableThead = styled.thead``;
export const AiServiceDetailTipTableTbody = styled.tbody`
  animation: ${fadeInAnimation} 0.5s ease-in-out;
`;

export const AiServiceDetailTipTableTr = styled.tr``;
export const AiServiceDetailTipTableTh = styled.th`
  padding: 2rem;
  font-size: 1.6rem;
  border-bottom: 2px solid #f0f0f0;
`;

export const AiServiceDetailTipTableTd = styled.td`
  padding: 2rem;
  font-size: 1.6rem;
  border-bottom: 2px solid #f0f0f0;
  text-align: center;
`;
export const AiServiceDetailTipTableTdTitle = styled.td`
  padding: 2rem;
  font-size: 1.6rem;
  border-bottom: 2px solid #f0f0f0;
  text-align: flex-start;
`;

export const LikeIcon = styled(FaRegThumbsUp)`
  color: black;
  font-size: 1.4rem;
  margin-right: 0.5rem;
`;

export const CommentIcon = styled(FaRegCommentAlt)`
  color: black;
  font-size: 1.4rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

export const EyeIcon = styled(FaEye)`
  color: black;
  font-size: 1.4rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

export const AiServiceDetailTipPaging = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  position: relative;
  bottom: 0;
  transform: translate(-50%, 0);
`;

export const AiServiceDetailTipTableTrContent = styled.tr`
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
