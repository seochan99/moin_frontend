import { Link } from "react-router-dom";
import { styled } from "styled-components";
// 모니터

export const NavWrapper = styled.div`
  margin: auto;
  color: ${props => props.theme.colors.primary1};
  background-color: ${props => props.theme.colors.bg};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1178px;
  height: 6rem;
  padding: 0 2rem;
  padding-top: 0.4rem;

  z-index: 1;
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
`;

export const NavLogoIcon = styled.img`
  height: 3rem;
  object-fit: cover;
  margin-right: 1rem;
  margin-bottom: 0.4rem;
`;

export const NavLogoTitle = styled.div`
  font-size: 3rem;
  font-weight: 900;
`;

export const NavMonitorMenu = styled.div`
  width: 500px;
  padding: 0 2rem;
  height: 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  @media (max-width: 640px) {
    display: none;
  }
  @media (min-width: 640px) {
  }
`;

// 모바일
export const NavMobileMenu = styled.div`
  height: 6rem;
  padding: 0 2rem;
  width: 100%;

  display: flex;

  justify-content: end;
  align-items: center;
  z-index: 1;

  @media (max-width: 640px) {
  }
  @media (min-width: 640px) {
    display: none;
  }
`;

export const NavMenu = styled.div``;

// NavLink
export const NavLink = styled(Link)`
  font-size: 2rem;
  font-weight: 600;
  /* padding-top: 0.3rem; */
`;

export const NavTranslate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  /* padding-top: 0.11rem; */
`;

export const NavTranslateLanguage = styled.div``;

export const NavSideBarBackground = styled.div`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: black;
  opacity: 30%;

  @media (max-width: 640px) {
  }
  @media (min-width: 640px) {
    display: none;
  }
`;

export const NavSideBarWrapper = styled.div`
  display: none;
  opacity: 100%;
  width: 40rem;
  height: 100vh;
  padding: 2rem 2rem;
  z-index: 3;
  position: fixed;
  right: 0;
  top: 0;

  flex-direction: column;
  align-items: start;

  background-color: ${props => props.theme.colors.bg};

  @media (max-width: 640px) {
  }
  @media (min-width: 640px) {
    display: none;
  }
`;

export const NavSideBarHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 10rem;
  margin-bottom: 4rem;
  border-bottom: 0.2rem solid;
  border-color: ${props => props.theme.colors.gray4};
`;

export const NavSideBarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30rem;
`;
