import { styled } from "styled-components";
import colors from "../../../style/theme";
// 전체 width 차지
export const CommunityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const CommunityContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  max-width: 1178px;
  width: 100%;
`;

export const AiServiceDetailCommentWrap = styled.div`
  flex-direction: column;
  align-items: flex-start; // 수정
  justify-content: center;
  margin-bottom: 10rem;
  color: ${colors.black};
  margin-top: 5.7rem;
`;
