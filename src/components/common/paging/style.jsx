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

export const Nav = styled.nav`
  position: absolute;
  bottom: -1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  margin: 1.6rem 0;
`;

export const Button = styled.button`
  border: none;
  border-radius: 0.8rem;
  padding: 0.8rem;
  margin: 0;

  color: ${props => props.theme.colors.gray4};
  font-size: 1%.5;

  &:hover {
    background: ${props => props.theme.colors.gray1};
    cursor: pointer;
    transform: translateY(0.2rem);
  }

  &[disabled] {
    color: ${props => props.theme.colors.bg};
    cursor: revert;
    transform: revert;
  }
  &[disabled]:hover {
    background: ${props => props.theme.colors.bg};
  }

  &[aria-current] {
    color: ${props => props.theme.colors.primary1};
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
