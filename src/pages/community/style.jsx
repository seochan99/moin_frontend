import { styled } from "styled-components";
import { ReactComponent as CommunityIcon } from "../../assets/images/icon/communityBannerIcon.svg";
// 전체 width 차지
export const CommunityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

// MypageBook
export const CommunityIconImg = styled(CommunityIcon)`
  display: flex;
  width: 17rem;
  height: 12rem;
  margin-top: 16.5rem;
`;

export const CommunityContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  max-width: 1178px;
  width: 100%;
`;
