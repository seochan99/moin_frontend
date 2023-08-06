import { styled } from "styled-components";

export const SelectorSelect = styled.select`
  border: 1px solid;
  border-color: ${props => props.theme.colors.gray4};
  color: ${props => props.theme.colors.gray4};
  background-color: ${props => props.theme.colors.bg};
  border-radius: 5px;
  padding: 1rem;
`;

export const SelectorOption = styled.option``;
