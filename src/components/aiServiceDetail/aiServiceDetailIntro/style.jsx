import { styled } from "styled-components";
import colors from "../../../style/theme";

export const AiServiceDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.black};
`;

export const AiServiceDetailBanner = styled.div`
  display: flex;
  width: 100%;
  height: 47rem;
  background-color: rgba(0, 10, 65, 0.97);
  position: absolute;
  top: 6rem;
`;

export const AiServiceDetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  position: relative;
`;

export const AiServiceDetailShare = styled.div`
  display: flex;
  margin-top: 2.9rem;
  margin-right: 3.5rem;
  justify-content: right;
`;

export const AiServiceDetailShareImg = styled.img`
  display: flex;
  width: 4rem;
  height: 4rem;
`;

export const AiServiceDetailRegistrant = styled.div`
  display: flex;
  margin-top: 5.3rem;
  margin-left: 0.5rem;
  font-size: 1.3rem;
  font-weight: 700;
`;

export const AiServiceDetailContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.1rem;
`;

export const AiServiceThumbnail = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export const AiServiceThumbnailImg = styled.img`
  width: 44.2rem;
  height: 39.4rem;
`;

export const AiServiceDetailContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4.3rem;
`;

export const AiServiceDetailContentDescriptionCompany = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  margin-top: 5.3rem;
  font-size: 1.3rem;
  font-weight: 700;
`;

export const AiServiceDetailContentDescriptionCompanyImg = styled.img`
  display: flex;
  width: 3rem;
  height: 3.2rem;
  margin-right: 0.7rem;
`;

export const AiServiceDetailContentDescriptionName = styled.div`
  display: flex;
  margin-top: 1rem;
  font-size: 4.8rem;
  font-weight: 600;
`;

export const AiServiceDetailContentDescriptionIntro = styled.div`
  display: flex;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
`;

export const AiServiceDetailContentDescriptionJob = styled.div`
  display: flex;
  align-content: center;
  margin-top: 3rem;
  background-color: #fff;
  width: 39.5rem;
  height: 3rem;
  border-radius: 5px;
  color: ${colors.black};
  font-size: 1.3rem;
  padding: 0.8rem;
`;

export const AiServiceDetailContentDescriptionJobTitle = styled.div`
  display: flex;
  align-content: center;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
  margin-right: 0.8rem;
`;

export const AiServiceDetailContentDescriptionJobContent = styled.div`
  display: flex;
  font-size: 1.3rem;
  font-weight: 500;
  margin-right: 0.8rem;
`;

export const AiServiceDetailContentDescriptionStar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const AiServiceDetailContentDescriptionStarIcon = styled.div`
  display: flex;
`;

export const AiServiceDetailContentDescriptionStarCnt = styled.div`
  display: flex;
  font-size: 1.4rem;
  margin-left: 1rem;
`;

export const AiServiceDetailContentDescriptionKeywordWrap = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 0.5rem;
  margin-left: 41.5rem;
`;

export const AiServiceDetailContentDescriptionKeyword = styled.div`
  display: flex;
  font-size: 1.4rem;
  font-weight: 600;
  background: #ffb6a7;
  margin-right: 1.2rem;
  border-radius: 4.5px;
  padding: 0.5rem 1rem;
`;

export const AiServiceDetailContentDescriptionBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AiServiceDetailContentDescriptionBottomLink = styled.div`
  margin-top: 3.8rem;
`;

export const AiServiceDetailContentDescriptionBottomLinkBox = styled.div`
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  border: 0.2rem solid #4285f4;
  border-radius: 5px;
  padding: 0.9rem 1.1rem;
  color: #4285f4;
`;

export const AiServiceDetailContentDescriptionBottomHeart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-right: 2rem;
`;

export const AiServiceDetailContentDescriptionBottomHeartIcon = styled.div`
  display: flex;
  margin-top: 2.5rem;
`;

export const AiServiceDetailContentDescriptionBottomHeartCnt = styled.div`
  color: #4285f4;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
`;
