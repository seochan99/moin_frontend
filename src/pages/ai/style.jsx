import { styled } from "styled-components";
import colors from "../../style/theme";

export const AiServiceDetailCommentWrap = styled.div`
  width: 100%;
  max-width: 1178px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  margin-top: 5.7rem;
  margin-bottom: 10rem;
  background-color: white;
  @media (max-width: 550px) {
    margin-top: 3rem;
  }
  color: ${colors.black};
`;

export const AiServiceDetailCommentCategory = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 3px solid #f0f0f0;
`;

export const AiServiceDetailCommentReview = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 600;
  padding-bottom: 1.8rem;
  border-bottom: 3px solid #4285f4;
`;

export const AiServiceDetailCommentTip = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 600;
  padding-bottom: 1.8rem;
`;

export const TabMenuWrap = styled.div``;

// 탭 메뉴
export const AiServiceDetailCommentCategoryTabMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const AiServiceDetailCommentCategoryMenuItem = styled.li`
  padding: 15px 10px;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  color: ${props => (props.$isActive ? "#4285f4" : "black")};
  border-bottom: ${props => (props.$isActive ? "3px solid #4285f4" : "none")};
  margin-left: 3rem;
  margin-bottom: -0.3rem;
`;
