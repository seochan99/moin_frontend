import { styled } from "styled-components";
import colors from "../../../style/theme";

export const ProfileInfoHeaderTitle = styled.div`
  display: flex;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: normal;
  color: ${colors.primary1};
`;

export const ProfileInfoHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const myPageUserIcon = styled.img`
  display: flex;
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
`;

export const ProfileInfoHeaderTitleName = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: normal;
  color: ${colors.primary1};
`;
