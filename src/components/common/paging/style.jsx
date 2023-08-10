import { styled } from "styled-components";

export const PagingNoPage = styled.div`
  width: 100%;

  display: flex;

  justify-content: center;
  align-items: center;

  grid-column: 1/5;
  flex-grow: 1;
  height: 30rem;
  color: ${props => props.theme.colors.gray4};
`;
