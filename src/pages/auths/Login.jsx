import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

// 구글 이미지
import GoogleIcon from "../../assets/images/icon/google.png";
import MoinIcon from "../../assets/images/moin_logo.png";
// 컴포넌트
import AuthLoginTitle from "../../components/auths/authLogin/AuthLoginTitle";
import AuthLoginForm from "../../components/auths/authLogin/AuthLoginForm";

// AuthLoginForm.jsx 가져오기

export default function Login() {
  const navigate = useNavigate();
  // const userInfo = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState(null);
  const [loginData, setLoginData] = useState({
    email: "",
    pwd: ""
  });

  // (임시) 유저 정보 LocalStorage에 저장하기
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
  }, []);

  // 로그인 입력정보 처리
  const handleInputChange = event => {
    const { name, value } = event.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // 로그인 후 이동 페이지 -> 메인 페이지
  const handleSubmit = event => {
    event.preventDefault();
    const { email, pwd } = loginData;

    // 이메일, 비밀번호 입력 확인
    if (email === "" || pwd === "") {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    // 로그인 성공 시
    setUserInfo({
      email: email,
      pwd: pwd
    });

    // 로그인 정보 LocalStorage에 저장하기
    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        email: email,
        pwd: pwd
      })
    );

    // 메인 페이지로 이동
    navigate("/");

    // 페이지 새로고침
    window.location.reload();
  };
  const handleLogout = () => {
    // 로그아웃 시
    setUserInfo(null);
    // token 비우기
    localStorage.removeItem("userInfo");
  };

  return (
    <>
      <S.AuthWrapper>
        {userInfo ? (
          <>
            <S.AuthText> {userInfo.email}님 환영합니다. </S.AuthText>
            <S.AuthButton onClick={handleLogout}> 로그아웃 </S.AuthButton>
          </>
        ) : (
          <>
            <S.AuthForm onSubmit={handleSubmit}>
              <AuthLoginTitle />
              <AuthLoginForm
                handleInputChange={handleInputChange}
                loginData={loginData}
              />

              <S.AuthButtonWrapper>
                <S.AuthButton type="submit">MO:IN에 로그인</S.AuthButton>
                {/* 구글 로그인 */}
                <S.AuthSignUpButton
                  type="button"
                  onClick={() => {
                    console.log("계정생성");
                  }}
                >
                  MOIN에 가입하고 더 많은 서비스를 누려보세요!
                </S.AuthSignUpButton>
                <S.AuthSocialButton
                  onClick={() => {
                    console.log("자체회원가입");
                  }}
                >
                  <S.AuthSocialButtonImg src={MoinIcon} alt="구글 로고" />
                  <S.AuthSocialButtonText style={{ margin: "0 auto" }}>
                    Moin 회원가입
                  </S.AuthSocialButtonText>
                </S.AuthSocialButton>
                <S.AuthSocialButton
                  onClick={() => {
                    console.log("구글계정생성");
                  }}
                >
                  <S.AuthSocialButtonImg src={GoogleIcon} alt="구글 로고" />
                  <S.AuthSocialButtonText style={{ margin: "0 auto" }}>
                    Google 로그인
                  </S.AuthSocialButtonText>
                </S.AuthSocialButton>
              </S.AuthButtonWrapper>
            </S.AuthForm>
          </>
        )}
      </S.AuthWrapper>
    </>
  );
}
