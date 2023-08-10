import { styled, keyframes } from "styled-components";
import colors from "../../../style/theme";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
/* ------- 회원 관리 통합 스타일 ------- */
export const AuthInputWrapper = styled.div`
  animation: ${fadeInAnimation} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  text-align: center;
`;

export const AuthInput = styled.input`
  display: flex;
  flex-direction: column;

  margin: 0.5rem;
  width: 56rem;
  height: 8rem;
  font-weight: 500;
  padding-left: 3.1rem;
  font-size: 1.8rem;
  color: ${colors.primary1};
  border-radius: 2.4rem;
  background: #f8f8fa;
  border: none;
  outline: none;
  transition: border 0.3s;
  @media (max-width: 768px) {
    width: 80%;
    margin: 0.5rem auto;
  }

  &:focus,
  &:not(:placeholder-shown) {
    border: 0.2rem solid ${colors.primary1};
  }
`;

/* ------- 회원 가입 컴포넌트 스타일 ------- */
export const SignUpInputTitleText = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3.5rem;
`;

export const SignUpInput = styled.input`
  border: none;
  border-bottom: 0.2rem solid #aeafb9;
  outline: none;
  padding: 0.5rem;
  ::placeholder {
    color: #aeafb9;
  }
  /* Your styling here */
  border-bottom: ${props =>
    props.real == "true" ? "0.1rem solid #000000" : "0.1rem solid red"};
  /* Additional styling based on validity */
`;

export const SignUpInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
`;
// export const MessageText = styled.span`
//   margin-top: 1rem;
//   color: ${props => (props.real == "true" ? "#00C24E" : "#FF5D47")};
//   font-size: 1.3rem;
// `;

/* ------- 로그인 타이틀 컴포넌트 스타일 ------- */
export const LoginTitleText = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 8rem;
`;
export const LoginSybTitleText = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 2.5rem 0rem 2rem 0rem;
`;
export const LoginTitleWrapper = styled.div`
  animation: ${fadeInAnimation} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginTitleStrong = styled.strong`
  font-weight: 900;
  font-size: 4rem;
  color: ${colors.primary1};
`;

/* ------- 로그인 title image ------- */
export const LoginLogo = styled.img`
  height: 6rem;
  object-fit: cover;
  margin-bottom: 3rem;
`;
