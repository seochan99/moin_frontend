import { styled } from "styled-components";
import colors from "../../../style/theme";

export const SignUpInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 60px;
  width: 100%;
`;

/* ------- 회원 가입 컴포넌트 스타일 ------- */
export const SignUpInputTitleText = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 35px;
`;

export const SignUpInput = styled.input`
  border: none;
  border-bottom: 2px solid #aeafb9;
  outline: none;
  padding: 5px;
  ::placeholder {
    color: #aeafb9;
  }
  /* Your styling here */
  border-bottom: ${props =>
    props.isvaild == "true" ? "1px solid #000000" : "1px solid red"};
  /* Additional styling based on validity */
`;

export const MessageText = styled.span`
  margin-top: 10px;
  color: ${props => (props.isvaild == "true" ? "#00C24E" : "#FF5D47")};
  font-size: 13px;
`;
export const Select = styled.select`
  /* 스타일링을 원하는대로 설정하세요 */
  background-color: #f8f8fa;
  border: none;
  padding: 1rem;
`;

export const Option = styled.option`
  background-color: white;
  color: #333333;
`;

export const SignUpInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
  // center
  align-items: center;
  justify-content: center;
`;

export const AuthSignUpButton = styled.button`
  display: flex;
  /* Orange */
  padding: 2.6rem;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */

  background: ${colors.primary1};
  /* orange */
  width: 25rem;
  height: 2rem;
  font-weight: 600;
  font-size: 2rem;
  color: ${colors.bg};
  box-shadow: 0rem 0.1rem 1rem ${colors.primary1};
  border-radius: 4.4rem;
  margin-bottom: 4.1rem;
`;
