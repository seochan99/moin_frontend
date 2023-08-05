import React from "react";
import { useNavigate } from "react-router-dom";
import * as SAuth from "../auths/style";

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
    // 페이지 새로고침
    window.location.reload();
  };

  return (
    <SAuth.AuthWrapper>
      <SAuth.AuthButton onClick={handleLogout}>로그아웃</SAuth.AuthButton>
    </SAuth.AuthWrapper>
  );
}

export default Profile;
