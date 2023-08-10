import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const NavWrapper = styled.div`
  margin: auto;
  color: ${props => props.theme.colors.gray4};
  background-color: ${props => props.theme.colors.bg};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1178px;
  height: 6rem;
  padding: 0 2rem;

  z-index: 1;
`;

// 로고
export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  padding-right: 10rem;
  color: ${props => props.theme.colors.primary1};
`;

export const NavLogoIcon = styled.img`
  height: 3rem;
  object-fit: cover;
  margin-right: 1rem;
`;

export const NavLogoTitle = styled.div`
  font-size: 3rem;
  font-weight: 900;
`;

// 모니터
export const NavMonitorMenu = styled.div`
  width: 620px;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

// 모바일
export const NavMobileMenu = styled.div`
  height: 6rem;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  z-index: 1;
  color: ${props => props.theme.colors.primary1};
`;

// NavLink
export const NavLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  color: ${props =>
    props.$isActive ? props.theme.colors.primary1 : props.theme.colors.gray4};

  &:hover {
    background-color: ${props => props.theme.colors.gray2};
  }
`;

// 한글 영어
export const NavBarTranslate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.gray4};

  * {
    font-size: 1.5rem;
  }
`;

export const NavTranslateLanguage = styled.div`
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${props => props.theme.colors.gray2};
  }
`;

export const NavTranslateSection = styled.div`
  padding: 0.2rem;
`;

// 사이드바
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
`;

export const NavSideBarWrapper = styled.div`
  display: none;
  opacity: 100%;
  width: 40rem;
  height: 100vh;
  padding: 2rem 2.5rem;
  z-index: 3;
  position: fixed;
  right: 0;
  top: 0;

  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  background-color: ${props => props.theme.colors.bg};
  * {
    font-size: 2rem;
  }
`;

export const NavSideBarMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavSideBarHeader = styled.div`
  display: flex;
  align-items: center;
  height: 10rem;
  margin-bottom: 4rem;
  border-bottom: 0.2rem solid;
  border-color: ${props => props.theme.colors.gray4};
  color: ${props => props.theme.colors.primary1};
  * {
    font-size: 3rem;
  }
`;

export const NavSideBarBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30rem;
`;
