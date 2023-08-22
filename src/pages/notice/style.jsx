import { styled } from "styled-components";
import { ReactComponent as NoticeIcon } from "../../assets/images/icon/noticeBannerIcon.svg";
// 전체 width 차지
export const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

// MypageBook
export const NoticeIconImg = styled(NoticeIcon)`
  display: flex;
  width: 17rem;
  height: 12rem;
  margin-top: 16.5rem;
`;
