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

export const DetailPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  max-width: 1178px;
  width: 100%;
  margin-top: 6rem;
  padding: 0 2rem;
  margin-bottom: 13rem;
  animation: ${fadeInAnimation} 0.5s ease-in-out;
  @media (max-width: 1200px) {
    width: 90%;
  }
`;

export const Wrapper = styled.div``;

export const DetailDiviner = styled.hr`
  width: 100%;
  height: 0.1rem;
  background-color: #eeeff3;
  border: none;
  margin-bottom: 2rem;
`;

export const DetailCommentHeader = styled.div`
  color: #4285f4;
  font-size: 2rem;
  font-weight: 600;
`;

export const Thumbnailimg = styled.img`
  display: flex;
  width: 1.6rem;
  height: 1.6rem;
  justify-self: center;
  align-self: flex-end;
  margin-bottom: 6rem;
`;

export const DetailViewText = styled.p`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  color: #d9d9d9;
  text-align: center;
  font-size: 16px;
`;
export const LikeViewWrapper = styled.div`
  display: flex;
  gap: 10px;
  text-align: center;
  justify-content: flex-end;

  margin-bottom: 2rem;
`;

export const StatusText = styled.p`
  border: 1px solid ${props => props.color};
  padding: 7px 15px;
  border-radius: 20px;
  color: ${props => props.color};
  font-size: 1.6rem;
`;
