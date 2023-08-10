import { styled } from "styled-components";

export const PagingNoPage = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  grid-column: 1/4;
  height: 15rem;
  color: ${props => props.theme.colors.gray4};
`;
