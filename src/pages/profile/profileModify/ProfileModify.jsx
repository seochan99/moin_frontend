import React, { useEffect, useState } from "react";
import ProfileHeader from "../../../components/profile/profileHeader/ProfileHeader";
import MypageSetting from "../../../assets/images/icon/mypageSettingBlue.png";

import * as S from "../../auths/authSignup/style";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import { useRecoilState } from "recoil";
import { userState } from "../../../context/authState";

function ProfileModify() {
  const { state } = useLocation();
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const [user, setUser] = useState({
    job: state.job,
    nickname: state.nickname,
    introduce: state.description
  });

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

  const handleSubmit = e => {
    e.preventDefault();
    // 모든 필수 정보가 입력되었는지 확인

    if (user.introduce.length > 50) {
      alert("한줄소개는 50자 이내로 입력해주세요.");
      return;
    }

    try {
      const accessToken = userInfo.accessToken; // 추출한 accessToken
      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };
      const response = axios.patch(
        "mypage/profile",
        {
          email: state.email,
          nickname: user.nickname,
          description: user.introduce,
          job: user.job
        },
        { headers }
      );

      alert("수정이 완료되었습니다.");
      navigate("/mypage");
    } catch (error) {
      alert("수정에 실패했습니다.");
    }
  };
  return (
    <>
      <ProfileHeader title="회원정보 수정" img={MypageSetting} />
      <S.SignUpInputContainer onSubmit={handleSubmit}>
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
        <S.AuthSignUpButton type="submit">수정하기</S.AuthSignUpButton>
      </S.SignUpInputContainer>
    </>
  );
}

export default ProfileModify;
