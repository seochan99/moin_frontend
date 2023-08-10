import { styled } from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20rem;
  background-color: ${props => props.theme.colors.gray1};
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1178px;
  height: 100%;
  background-color: ${props => props.theme.colors.gray1};
`;
