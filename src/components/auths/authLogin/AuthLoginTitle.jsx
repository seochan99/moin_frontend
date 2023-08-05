import LoginLogo from "../../../assets/images/moin_logo.png";
import * as S from "./style";

export default function AuthLoginTitle() {
  return (
    <S.LoginTitleWrapper>
      <S.LoginLogo src={LoginLogo} alt="MO:IN" />
      <S.LoginSybTitleText>내가 찾던 인공지능 서비스,</S.LoginSybTitleText>
      <S.LoginTitleText>
        <S.LoginTitleStrong>MO:IN</S.LoginTitleStrong> 에 모이다!
      </S.LoginTitleText>
    </S.LoginTitleWrapper>
  );
}
