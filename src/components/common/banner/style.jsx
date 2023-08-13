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
// 전체 width 차지
export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

export const ProfileBanner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30rem;
  background-color: rgba(0, 10, 65, 0.97);
`;

export const ProfileBannerHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1178px;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: 90%;
  }
  animation: ${fadeInAnimation} 0.5s ease-in-out;
`;
export const ProfileBannerHeaderContainer = styled.div`
  margin-top: 18rem;
  display: flex;
  flex-direction: column;
`;
export const ProfileBannerHeaderTitleBox = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  color: white;
  font-size: 1.5rem;
  width: 14rem;
  height: 3rem;
  border-radius: 1rem;
`;

export const ProfileBannerHeaderTitle = styled.div`
  display: flex;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  font-size: 5rem;
  font-weight: 700;
  line-height: normal;
`;
