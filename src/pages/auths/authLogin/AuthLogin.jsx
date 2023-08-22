import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import * as S from "./style";
import GoogleIcon from "../../../assets/images/icon/google.png";
import KakaoIcon from "../../../assets/images/icon/kakao.png";
import AuthLoginTitle from "../../../components/auths/authLogin/AuthLoginTitle";
import AuthLoginForm from "../../../components/auths/authLogin/AuthLoginForm";
import AuthSocialButton from "../../../components/auths/authSocialButton/AuthSocialButton";
import { useRecoilState } from "recoil";
import { userState } from "../../../context/authState";
import KakaoLogin from "./kakaoAuth";

export default function AuthLogin() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [loginData, setLoginData] = useState({
    email: "",
    pwd: ""
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // const onClickSocialLogin = async provider => {
  //   try {
  //     const kakaoURL =
  //       "https://moin.dcs-hyungjoon.com/api/v1/auth/kakao/login/";

  //       }
  //     }, []);
  //   } catch (error) {
  //     console.error("Login failed:", error.message);
  //     alert("로그인에 실패했습니다.");
  //   }
  // };

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, pwd } = loginData;

    if (email === "" || pwd === "") {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post("auth/login", {
        email: email,
        password: pwd
      });

      const accessToken = response.data.token.access;
      const refreshToken = response.data.token.refresh;
      const nickname = response.data.user.nickname;

      setUserInfo({
        email: email,
        nickname: nickname,
        accessToken: accessToken,
        refreshToken: refreshToken
      });

      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          email: email,
          nickname: nickname,
          accessToken: accessToken,
          refreshToken: refreshToken
        })
      );

      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("비밀번호를 다시 입력해주세요!");
    }
  };

  return (
    <>
      <S.AuthWrapper>
        <S.AuthForm onSubmit={handleSubmit}>
          <AuthLoginTitle />
          <AuthLoginForm
            handleInputChange={handleInputChange}
            loginData={loginData}
          />

          <S.AuthButtonWrapper>
            <S.AuthButton type="submit">MO:IN에 로그인</S.AuthButton>
            <S.UnderButtonTextWrapper>
              &nbsp;&nbsp;
              <S.UnderButtonText
                onClick={() => {
                  navigate("/auth/create");
                }}
              >
                모인계정 만들기
              </S.UnderButtonText>{" "}
              | &nbsp;&nbsp;
              <S.UnderButtonText
                onClick={() => {
                  navigate("/auth/reset");
                }}
              >
                비밀번호 초기화
              </S.UnderButtonText>
            </S.UnderButtonTextWrapper>

            {/* <S.AuthSignUpButtonDiv>
              소셜을 통해 더 간편하게 가입하고 로그인해요!
            </S.AuthSignUpButtonDiv> */}

            {/* <AuthSocialButton
              onClick={() => {
                onClickSocialLogin("kakao");
              }}
              imgSrc={KakaoIcon}
              altText="카카오 로고"
              buttonText="Kakao 로그인"
            />
            <AuthSocialButton
              onClick={() => {
                onClickSocialLogin("google");
              }}
              imgSrc={GoogleIcon}
              altText="구글 로고"
              buttonText="Google 로그인"
            /> */}
          </S.AuthButtonWrapper>
        </S.AuthForm>
      </S.AuthWrapper>
    </>
  );
}
