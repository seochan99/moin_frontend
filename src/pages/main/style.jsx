import { styled, keyframes } from "styled-components";

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

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100%;

  max-width: 1178px;
  width: 100%;
  animation: ${fadeInAnimation} 0.5s ease-in-out;
`;

export const MainTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: space-between;
  margin-top: 6rem;
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primary1};
`;
