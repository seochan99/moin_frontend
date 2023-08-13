import { styled } from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 20rem;
  padding-bottom: 0.5rem;
`;

export const FooterContent = styled.div`
  position: relative;
  width: 100%;

  padding: 0 3rem;
  padding-bottom: 2rem;
  border-bottom: solid 1px;
  border-color: ${props => props.theme.colors.primary2};
`;

export const FooterTitle = styled.div`
  color: ${props => props.theme.colors.primary1};
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
`;

export const FooterBody = styled.div``;

export const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary2};
  margin: 0.25rem 0;

  svg {
    margin-right: 0.5rem;
  }
`;

export const FooterText = styled.div`
  color: ${props => props.theme.colors.gray4};
`;

export const FooterCopyRight = styled.div`
  color: ${props => props.theme.colors.gray4};
  width: 100%;

  display: flex;
  justify-content: end;
  padding: 0.5rem 3rem;
`;

export const NavLogo = styled.div`
  bottom: 0;
  right: 3rem;
  position: absolute;
  display: flex;
  align-items: center;
  margin: 1rem;
  color: ${props => props.theme.colors.primary1};
`;

export const NavLogoIcon = styled.img`
  height: 2rem;
  object-fit: cover;
  margin-right: 0.5rem;
`;

export const NavLogoTitle = styled.div`
  font-size: 2rem;
  font-weight: 900;
`;
