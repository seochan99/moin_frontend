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

export const AiServiceDescriptionWrap = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  animation: ${fadeInAnimation} 0.5s ease-in-out;
`;

export const AiServiceDescriptionIntroTitle = styled.div`
  display: flex;
  width: 100%;
  color: #4285f4;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const AiServiceDescriptionIntroIcon = styled.img`
  display: flex;
  width: 2.2rem;
  height: 2.2rem;
  margin-right: 1rem;
`;

export const AiServiceDescriptionIntroContent = styled.div`
  display: flex;
  width: 95%;

  padding-top: 2.2rem;
  line-height: 3rem;
  color: #282828;

  font-size: 1.8rem;
  font-weight: 500;

  white-space: pre-line;
  word-wrap: break-word;
`;

export const AiServiceDescriptionFunctionTitle = styled.div`
  display: flex;
  width: 100%;
  color: #4285f4;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 10rem;
  align-items: center;
`;

export const AiServiceDescriptionFunctionContent = styled.li`
  display: flex;
  width: 100%;

  padding: 0 0.3rem;
  padding-top: 1rem;
  line-height: 3rem;
  color: #282828;
  font-size: 1.8rem;
  font-weight: 500;
  white-space: pre-line;
  word-wrap: break-word;
  align-items: flex-start;
`;

export const AiServiceDescriptionFunctionSubTitle = styled.div`
  display: flex;
  color: #4285f4;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const AiServiceDescriptionFunctionSubContentWrap = styled.div`
  padding-top: 2.2rem;
  padding-bottom: 1rem;
  width: 95%;
`;

export const AiServiceDescriptionFunctionSubContent = styled.div`
  display: flex;
  color: #4285f4;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const AiServiceDescriptionFunctionSubContentIcon = styled.div`
  display: flex;
  color: #4285f4;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  width: 100%;
  margin-top: 6.5rem;
`;

export const AiServiceDescriptionFunctionWrap = styled.div`
  margin-left: 2rem;
`;

// 아이콘
export const AiServiceDescriptionFunctionIcon = styled.img`
  display: flex;
  width: 0.8rem;
  margin-right: 1rem;
  margin-top: 0.8rem;
`;
export const AiServiceDescriptionFunctionContentWrap = styled.div`
  display: flex;
  flex-direction: column;

  line-height: 3rem;
  color: #282828;
  font-size: 1.8rem;
  font-weight: 500;

  white-space: pre-line;
  word-wrap: break-word;
  align-items: flex-start;
`;

export const AiServiceDescriptionBulbIcon = styled.img`
  display: flex;
  width: 1.9rem;
  height: auto;
  margin-right: 1rem;
`;
