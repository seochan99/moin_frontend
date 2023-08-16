import { styled, keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const BannerListWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 0;
  animation: ${fadeInAnimation} 0.5s ease-in-out;
`;

export const BannerWrapper = styled.div`
  width: 100%;
`;

export const BannerImg = styled.img`
  width: 100%;
  height: auto;
`;
