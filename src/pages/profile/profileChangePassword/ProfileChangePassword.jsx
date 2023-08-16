import React, { useState } from "react";
import * as S from "../../auths/authSignup/style";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";

function ProfileChangePassword() {
  const navigate = useNavigate();
  const [pwd0, setPwd0] = useState("");
  const [pwd, setPwd] = useState("");
  const [passwordIsVaild, setpasswordIsVaild] = useState(false);
  const [pwdMatchMessage, setPwdMatchMessage] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  // user State

  // 로그인 정보 불러오기
  const [userInfo, setUserInfo] = useRecoilState(userState);

  // 비밀번호 입력
  const handlePwd0 = e => {
    e.preventDefault();
    const password0 = e.target.value;
    setPwd0(password0);
  };
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
      const accessToken = userInfo.accessToken; // 추출한 accessToken
      console.log(userInfo);
      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };

      const requestData = {
        origin_password: pwd0,
        new_password1: pwd, // 변경할 비밀번호
        new_password2: confirmPwd // 변경할 비밀번호 확인
      };
      const response = await axios.post("auth/password/change", requestData, {
        headers
      });

      if (response.status === 200) {
        alert("비밀번호 변경이 완료되었습니다.");
        navigate("/mypage"); // navigate 함수가 어디에서 정의되어 있는지에 따라 수정이 필요합니다.
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
    <S.SignUpInputContainer onSubmit={handleSubmit}>
      <S.SignUpInputWrapper>
        <S.SignUpInputTitleText>기존 비밀번호</S.SignUpInputTitleText>
        <S.SignUpInput
          required
          placeholder="기존 비밀번호를 입력해주세요."
          type="password"
          name="pwd0"
          onChange={handlePwd0}
          value={pwd0}
          isvaild="true"
        />
      </S.SignUpInputWrapper>
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
  );
}

export default ProfileChangePassword;
