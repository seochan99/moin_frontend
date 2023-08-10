import { styled, keyframes } from "styled-components";
import { ReactComponent as CommunityIcon } from "../../../assets/images/icon/authBannerIcon.svg";

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
// 전체 width 차지
export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

// MypageBook
export const AuthIconImg = styled(CommunityIcon)`
  display: flex;
  width: 17rem;
  height: 12rem;
  margin-top: 16.5rem;
`;

export const AuthInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  max-width: 1178px;
  width: 100%;
  margin-top: 13rem;
  margin-bottom: 13rem;
  animation: ${fadeInAnimation} 0.5s ease-in-out;
`;
