// 인가코드 받아오기
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const KakaoLogin = () => {
  const CLIENT_ID = "6b8cb881efc2c4dac250f5a6f6b975ac";
  const REDIRECT_URI = "https://moooin.com/login";
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const [loading, setLoading] = useState(true);

  // 로그인 성공시 MyPage로 이동시키기위해 useNavigate 사용
  const navigate = useNavigate();

  useEffect(() => {
    // 인가코드 받아오기
    const code = new URL(window.location.href).searchParams.get("code");

    const fetchTokens = async () => {
      try {
        // 백엔드로부터 인가 코드를 전달하여 액세스 토큰과 리프레시 토큰 받아오기
        const tokenResponse = await axios.post(
          "https://moin.dcs-hyungjoon.com/api/v1/auth/kakao/login/callback/",
          { code }
        );

        const accessToken = tokenResponse.data.access_token;
        const refreshToken = tokenResponse.data.refresh_token;

        // 액세스 토큰과 리프레시 토큰을 로컬 스토리지에 저장
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        setLoading(false); // 데이터 로딩 완료

        // 여기서 원하는 작업을 수행하거나 다른 페이지로 이동
        navigate("/");
      } catch (error) {
        console.error("Error:", error);
        setLoading(false); // 데이터 로딩 완료
      }
    };

    if (code) {
      fetchTokens();
    } else {
      setLoading(false); // 인가코드 없음
    }
  }, []);

  if (loading) {
    // 로딩 중일 때의 화면 표시
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="KaKaoBtn">
        <a href={KAKAO_AUTH_URI}>카카오로 시작하기</a>
      </div>
    </>
  );
};

export default KakaoLogin;
