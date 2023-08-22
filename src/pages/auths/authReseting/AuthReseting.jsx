import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Banner from "../../../components/common/banner/Banner";
import * as S from "./style";
import axios from "../../../api/axios";

function AuthReseting() {
  const location = useLocation();

  const uid = location.pathname.split("/")[3];
  const token = location.pathname.split("/")[4];
  const navigate = useNavigate();

  const [pwd, setPwd] = useState("");
  const [passwordIsVaild, setpasswordIsVaild] = useState(false);
  const [pwdMatchMessage, setPwdMatchMessage] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const url = `/auth/password/reset/${uid}/${token}/`;

  const handlePwd = e => {
    e.preventDefault();
    const password = e.target.value;
    setPwd(password);
    // Password strength validation
    const hasMinLength = password.length >= 8;
    const hasValidCombination =
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()]).{2,}$/.test(password);
    if (hasMinLength && hasValidCombination) {
      setpasswordIsVaild(true);
    } else {
      setpasswordIsVaild(false);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const requestData = {
        password: pwd,
        confirm: confirmPwd
      };

      const response = await axios.post(
        `https://moooin.com${url}`,
        requestData
      );

      if (response.status === 200) {
        alert("비밀번호 변경이 완료되었습니다.");
        navigate("/login");
      } else {
        alert("변경에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error changing password:", error);
      alert("변경에 실패했습니다.");
    }
  };

  // 비밀번호 확인 입력
  const handleConfirmPwd = e => {
    e.preventDefault();
    const confirmedPassword = e.target.value;
    setConfirmPwd(confirmedPassword);

    // Password confirmation validation
    if (confirmedPassword !== pwd) {
      setPwdMatchMessage("동일하지 않은 비밀번호입니다 :(");
    } else {
      setPwdMatchMessage("확인 완료되었습니다 :)");
    }
  };

  return (
    <>
      <Banner
        titleKorean="비밀번호 재설정"
        titleEnglish="Reset Password"
        image={<></>}
      />
      <S.SignUpInputContainer onSubmit={handleSubmit}>
        <S.SignUpInputWrapper>
          <S.SignUpInputTitleText>비밀번호</S.SignUpInputTitleText>
          <S.SignUpInput
            required
            placeholder="변경원하시는 비밀번호를 입력해주세요."
            type="password"
            name="pwd"
            onChange={handlePwd}
            value={pwd}
            isvaild="true"
          />
          {pwd ? (
            <S.MessageText isvaild={passwordIsVaild ? "true" : "false"}>
              ︎✓ 8자 이상 입력
              <br />✓ 숫자, 영문, 특수문자 포함하여, 2개 이상 조합{" "}
            </S.MessageText>
          ) : (
            ""
          )}
        </S.SignUpInputWrapper>
        {/* --------------- 비밀번호 확인 --------------- */}
        <S.SignUpInputWrapper>
          <S.SignUpInputTitleText>비밀번호 확인</S.SignUpInputTitleText>
          <S.SignUpInput
            required
            placeholder="비밀번호 확인"
            type="password"
            name="confirmPwd"
            onChange={handleConfirmPwd}
            value={confirmPwd}
            isvaild={pwd === confirmPwd ? "true" : "false"}
          />
          {confirmPwd ? (
            pwd === confirmPwd ? (
              <S.MessageText isvaild="true">확인 완료</S.MessageText>
            ) : (
              <S.MessageText isvaild="false">
                동일하지 않은 비밀번호입니다 :(
              </S.MessageText>
            )
          ) : (
            ""
          )}
        </S.SignUpInputWrapper>
        <S.AuthSignUpButton type="submit">비밀번호 변경하기</S.AuthSignUpButton>
      </S.SignUpInputContainer>
    </>
  );
}

export default AuthReseting;
