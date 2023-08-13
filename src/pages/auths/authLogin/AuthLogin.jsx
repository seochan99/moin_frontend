import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
// aixos
import axios from "../../../api/axios";
// 구글 이미지
import GoogleIcon from "../../../assets/images/icon/google.png";
import KakaoIcon from "../../../assets/images/icon/kakao.png";
import MoinIcon from "../../../assets/images/moin_logo.png";

// 컴포넌트
import AuthLoginTitle from "../../../components/auths/authLogin/AuthLoginTitle";
import AuthLoginForm from "../../../components/auths/authLogin/AuthLoginForm";
import AuthSocialButton from "../../../components/auths/authSocialButton/AuthSocialButton";

// recoil 적용
import { useRecoilState } from "recoil";
import { userState } from "../../../context/authState";

export default function AuthLogin() {
  const navigate = useNavigate();
  // const userInfo = useContext(AuthContext);

  // recoil 적용 (로그인 정보)
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const [loginData, setLoginData] = useState({
    email: "",
    pwd: ""
  });

  // 로그인 입력정보 처리
  const handleInputChange = event => {
    const { name, value } = event.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, pwd } = loginData;

    // 이메일, 비밀번호 입력 확인
    if (email === "" || pwd === "") {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post("auth/login", {
        email: email,
        password: pwd
      });

      // accessToken 받아오기
      const accessToken = response.data.token.access;
      const refreshToken = response.data.token.refresh;
      console.log(response);
      const nickname = response.data.user.nickname;

      // 로그인 성공 시
      setUserInfo({
        email: email,
        nickname: nickname,
        accessToken: accessToken,
        refreshToken: refreshToken // 저장 추가
      });

      // 로컬스토리지에 저장
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          email: email,
          nickname: nickname,
          accessToken: accessToken,
          refreshToken: refreshToken // 저장 추가
        })
      );

      alert("로그인에 성공했습니다.");

      // 메인 페이지로 이동
      navigate("/");
    } catch (error) {
      // Handle login error (e.g., display an error message)
      console.error("Login failed:", error.message);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <S.AuthWrapper>
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

              <S.AuthSignUpButtonDiv>
                소셜을 통해 더 간편하게 가입하고 로그인해요!
              </S.AuthSignUpButtonDiv>

              <AuthSocialButton
                onClick={() => {
                  console.log("자체회원가입");
                }}
                imgSrc={KakaoIcon}
                altText="카카오 로고"
                buttonText="Kakao 로그인"
              />
              <AuthSocialButton
                onClick={() => {
                  console.log("구글계정생성");
                }}
                imgSrc={GoogleIcon}
                altText="구글 로고"
                buttonText="Google 로그인"
              />
            </S.AuthButtonWrapper>
          </S.AuthForm>
        </>
      </S.AuthWrapper>
    </>
  );
}
