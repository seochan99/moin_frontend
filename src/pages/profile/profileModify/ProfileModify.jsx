import React, { useEffect, useState } from "react";
import ProfileHeader from "../../../components/profile/profileHeader/ProfileHeader";
import MypageSetting from "../../../assets/images/icon/mypageSettingBlue.png";

import * as S from "../../auths/authSignup/style";
import { useNavigate } from "react-router-dom";
function ProfileModify() {
  const [user, setUser] = useState({
    job: "",
    nickname: "",
    introduce: ""
  });

  const [jobs, setJobs] = useState([]);

  const jobList = [
    "개발자",
    "디자이너",
    "기획자",
    "마케터",
    "영상/사진 작가",
    "번역가",
    "대학생",
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

    try {
      // axios.post("/signup", user);
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
