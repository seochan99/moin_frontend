import React, { useState } from "react";
import * as S from "./style";
import * as SS from "../authSignup/style";
import axios from "../../../api/axios";
import { useNavigate } from "react-router-dom";

function AuthReset() {
  // 메일 입력 받고 제출 버튼 누르면 초기화 메일 발송 완료
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    // 모든 필수 정보가 입력되었는지 확인
    if (email) {
      try {
        const response = await axios.post("auth/password-reset", {
          email: email
        });

        alert("초기화 메일이 발송되었습니다.");
        navigate("/");
      } catch (error) {
        alert("초기화 메일 발송에 실패했습니다.");
      }
    } else {
      alert("이메일을 입력해주세요.");
    }
  };
  return (
    <SS.SignUpInputContainer onSubmit={handleSubmit}>
      <SS.SignUpInputWrapper>
        {/* --------------- 이메일  --------------- */}
        <SS.SignUpInputTitleText>*이메일</SS.SignUpInputTitleText>

        <SS.SignUpInput
          required
          placeholder="초기화 메일을 발송할 이메일을 입력해주세요."
          type="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          isvaild="true"
        />
      </SS.SignUpInputWrapper>
      <SS.AuthSignUpButton type="submit">초기화 메일 발송</SS.AuthSignUpButton>
    </SS.SignUpInputContainer>
    // 제출  버튼
  );
}

export default AuthReset;
