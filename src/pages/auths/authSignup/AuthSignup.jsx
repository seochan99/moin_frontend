import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";

function Signup() {
  //유저 이메일, 직군, 비밀번호, 닉네임, 한줄소개 입력받음
  // 이를 위한 유저 useState 객체 생성
  const [user, setUser] = useState({
    email: "",
    job: "",
    password: "",
    nickname: "",
    introduce: ""
  });

  const [pwd, setPwd] = useState("");
  const [passwordIsVaild, setpasswordIsVaild] = useState(false);
  const [pwdMatchMessage, setPwdMatchMessage] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const [jobs, setJobs] = useState([]);

  const jobList = [
    "IT",
    "디자인",
    "학생",
    "마케팅",
    "연구",
    "금융",
    "교육",
    "기타"
  ];

  const navigate = useNavigate();
  useEffect(() => {
    // 데이터 통신해서 API넣기
    setJobs(jobList);
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    // 모든 필수 정보가 입력되었는지 확인
    if (
      user.email &&
      user.password &&
      confirmPwd &&
      user.nickname &&
      user.job
    ) {
      try {
        const response = await axios.post("auth/signup", {
          nickname: user.nickname,
          email: user.email,
          job: user.job,
          description: user.introduce ?? null,
          password: user.password
        });
        if (response.status === 200) {
          alert("회원가입이 완료되었습니다.");
          navigate("/login");
        }
      } catch (error) {
        alert("회원가입에 실패했습니다.");
        console.log(error);
      }
    } else {
      alert("모든 필수 정보를 입력해주세요.");
    }
  };

  // 비밀번호 입력
  const handlePwd = e => {
    e.preventDefault();
    const password = e.target.value;
    setPwd(password);
    setUser({ ...user, password: password });

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
        {/* --------------- 이메일  --------------- */}
        <S.SignUpInputTitleText>*이메일</S.SignUpInputTitleText>
        <S.SignUpInput
          required
          placeholder="이메일을 입력해주세요."
          type="email"
          name="email"
          onChange={e => setUser({ ...user, email: e.target.value })}
          value={user.email}
          isvaild="true"
        />
      </S.SignUpInputWrapper>
      {/* --------------- 비밀번호 입력 --------------- */}
      <S.SignUpInputWrapper>
        <S.SignUpInputTitleText>*비밀번호</S.SignUpInputTitleText>
        <S.SignUpInput
          required
          placeholder="비밀번호"
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
        <S.SignUpInputTitleText>*비밀번호 확인</S.SignUpInputTitleText>
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
      {/* --------------- 닉네임 --------------- */}
      <S.SignUpInputWrapper>
        <S.SignUpInputTitleText>*닉네임</S.SignUpInputTitleText>
        <S.SignUpInput
          required
          placeholder="닉네임을 입력해주세요."
          type="text"
          name="nickname"
          onChange={e => setUser({ ...user, nickname: e.target.value })}
          value={user.nickname}
          isvaild="true"
        />
      </S.SignUpInputWrapper>
      {/* --------------- 직군 --------------- */}
      <S.SignUpInputWrapper>
        <S.SignUpInputTitleText>*직군</S.SignUpInputTitleText>

        <S.Select
          required
          name="job"
          onChange={e => setUser({ ...user, job: e.target.value })}
          value={user.job}
        >
          <S.Option value="" disabled>
            직종을 선택해주세요.
          </S.Option>
          {jobs.map((job, index) => (
            <S.Option key={index} value={job}>
              {job}
            </S.Option>
          ))}
        </S.Select>
      </S.SignUpInputWrapper>
      {/* --------------- 한줄소개 --------------- */}
      <S.SignUpInputWrapper>
        <S.SignUpInputTitleText>한줄소개</S.SignUpInputTitleText>
        <S.SignUpInput
          placeholder="한줄소개를 입력해주세요."
          type="text"
          name="nickname"
          onChange={e => setUser({ ...user, introduce: e.target.value })}
          value={user.introduce}
          isvaild="true"
        />
      </S.SignUpInputWrapper>
      <S.AuthSignUpButton type="submit">가입하기</S.AuthSignUpButton>
    </S.SignUpInputContainer>
  );
}

export default Signup;
