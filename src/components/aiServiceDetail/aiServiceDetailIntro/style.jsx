import { styled } from "styled-components";
import colors from "../../../style/theme";
import { Link } from "react-router-dom";

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
  margin-left: -12rem;
`;

export const AiServiceDetailShare = styled.div`
  display: flex;
  margin-top: 2.9rem;
  margin-right: -12rem;
  justify-content: right;
  transition: transform 450ms;
  :hover {
    transform: scale(1.05);
  }
`;

export const AiServiceDetailShareImg = styled.img`
  display: flex;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
`;

// 클립보드
export const CopyToClipboardElement = styled.text``;

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
  margin-left: 6rem;
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
  white-space: pre-line;
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
  align-items: center;
  margin-right: -12rem;
  margin-top: 0.5rem;
  width: 100%;
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

// export const StyledKeyword = styled(Keyword)`
//   font-weight: 700;
// `;

export const AiServiceDetailContentDescriptionBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AiServiceDetailContentDescriptionBottomLink = styled.div`
  margin-top: 2rem;
  :hover {
    color: white;
    background-color: #4285f4;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  border: 0.2rem solid #4285f4;
  border-radius: 5px;
  padding: 0.9rem 1.1rem;
  color: #4285f4;
  font-size: 1.3rem;
  font-weight: 700;
`;

export const AiServiceDetailContentDescriptionBottomHeart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-right: 2rem;
  margin-left: 2rem;
`;

export const AiServiceDetailContentDescriptionBottomHeartIcon = styled.div`
  display: flex;
  margin-top: 0.2rem;

  transition: transform 200ms;
  :hover {
    transform: scale(1.03);
  }
`;

export const AiServiceDetailContentDescriptionBottomHeartCnt = styled.div`
  color: #4285f4;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
`;

// 조회수 추가

export const AiServiceDetailContentDescriptionEndWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AiServiceDetailContentDescriptionViews = styled.div`
  display: flex;
  width: 20rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

// 좋아요 버튼 기능
export const LikeButton = styled.button`
  display: flex;
`;
