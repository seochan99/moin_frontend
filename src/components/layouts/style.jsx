import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const NavBarWrapper = styled.div`
  color: ${props => props.theme.colors.primary1};
  background-color: ${props => props.theme.colors.bg};

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1178px;
  height: 60px;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const NavBarMenu = styled.div`
  color: ${props => props.theme.colors.primary1};
  background-color: ${props => props.theme.colors.bg};

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 6rem;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 0.7rem;
  }
`;

// NavLink
export const NavLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
`;
