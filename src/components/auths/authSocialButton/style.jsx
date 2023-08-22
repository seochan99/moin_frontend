import styled from "styled-components";
import colors from "../../../style/theme";

export const AuthSocialButton = styled.button`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  padding: 0rem 1.2rem 0rem 2.4rem;
  width: 40rem;
  height: 6.4rem;
  background: ${colors.bg};
  box-shadow: 0rem 0rem 0rem rgba(0, 0, 0, 0.08),
    0rem 0.1rem 0.2rem rgba(0, 0, 0, 0.25);
  border-radius: 1.2rem;
  font-weight: 700;
  font-size: 2.4rem;
`;

export const AuthSocialButtonText = styled.p`
  margin: 0 auto;
  font-size: 2rem;
  font-weight: 600;
  color: #151515;
`;

// 구글 로그인 아이콘
export const AuthSocialButtonImg = styled.img`
  width: 3rem;
  height: 3rem;
`;
