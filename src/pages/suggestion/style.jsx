import { styled } from "styled-components";
import { ReactComponent as suggestionIcon } from "../../assets/images/icon/suggestionBannerIcon.svg";
// 전체 width 차지
export const SuggestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

// MypageBook
export const SuggestionIconImg = styled(suggestionIcon)`
  display: flex;
  width: 17rem;
  height: 12rem;
  margin-top: 16.5rem;
`;
