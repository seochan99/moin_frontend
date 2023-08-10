import * as S from "./style";

export default function AuthLoginForm(props) {
  const { handleInputChange, loginData } = props;

  return (
    <S.AuthInputWrapper>
      <S.AuthInput
        required
        placeholder="이메일을 입력하세요."
        type="email"
        name="email"
        onChange={handleInputChange}
        value={loginData.email}
        real={loginData.email ? "true" : "false"}
      />

      <S.AuthInput
        required
        placeholder="비밀번호를 입력하세요."
        type="password"
        name="pwd"
        onChange={handleInputChange}
        value={loginData.pwd}
        real={loginData.pwd ? "true" : "false"}
      />
    </S.AuthInputWrapper>
  );
}
