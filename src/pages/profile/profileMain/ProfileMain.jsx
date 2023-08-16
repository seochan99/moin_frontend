import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { userState } from "../../../context/authState";
import MyPageUser from "../../../assets/images/icon/mypageUserIcon.png";
import MypageSetting from "../../../assets/images/icon/mypageSetting.png";
import MypageChat from "../../../assets/images/icon/mypageChat.png";
import MypageHeart from "../../../assets/images/icon/mypageHeart.png";
import MypageThumb from "../../../assets/images/icon/mypageThumb.png";
import MypageVector from "../../../assets/images/icon/mypageVector.png";
import AuthContentBox from "../../../components/auths/authContentBox/AuthContentBox";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import Modal from "../../../components/common/modal/Modal";

function ProfileMain() {
  // 모달창
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 로그아웃 버튼 클릭 시 모달창 띄우기
  const LogoutSubmit = () => {
    setIsModalOpen(true);
  };

  // 유저 정보 불러오기
  const [userInfo, setUserInfo] = useRecoilState(userState);

  // 로그인 정보 불러오기
  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    fetchUserData(storedUserInfo);
  }, []); // userInfo가 변경될 때마다 실행

  //fetchUserData
  // GET /
  const fetchUserData = async storedUserInfo => {
    try {
      const accessToken = storedUserInfo.accessToken;
      console.log(userInfo);
      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };
      console.log(headers);

      const response = await axios.get("mypage/profile", {
        headers
      });

      console.log(response);
      if (response.status === 200) {
        // setUserInfo(response.data);
      } else {
        alert("유저 정보를 가져오는데 실패했습니다.");
        // remove local stroage
        localStorage.removeItem("userInfo");
        localStorage.removeItem("recoil-persist");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("유저 정보를 가져오는데 실패했습니다.");
    }
  };

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const accessToken = userInfo.accessToken;
      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };
      const response = await axios.post("auth/logout/", null, {
        headers
      });

      if (response.status === 200) {
        setUserInfo(null);
        // 로컬 스토리지에서 로그인 정보 삭제
        localStorage.removeItem("userInfo");
        // 로그인 페이지로 이동
        navigate("/");
      }
    } catch (error) {
      console.error("Error logging out:", error);
      alert("로그아웃 실패했습니다.");
    }
  };

  const handleChangePassword = () => {
    navigate("/mypage/changepassword");
    // // 페이지 새로고침
    // window.location.reload();
  };
  return (
    <>
      {/* 프로필 헤더  */}
      <S.ProfileInfoHeaderWrapper>
        <S.ProfileInfoHeaderTitle>
          <S.myPageUserIcon src={MyPageUser} />
          <S.ProfileInfoHeaderTitleName>
            {userInfo && userInfo.nickname}
          </S.ProfileInfoHeaderTitleName>
          님의 마이페이지
        </S.ProfileInfoHeaderTitle>
        <S.ProfileInfoHeaderButtonWrapper>
          <S.ProfileInfoHeaderButton onClick={handleChangePassword}>
            암호변경
          </S.ProfileInfoHeaderButton>
          <S.ProfileInfoHeaderButton onClick={LogoutSubmit}>
            로그아웃
          </S.ProfileInfoHeaderButton>
          {/* 로그아웃 클릭 시 띄우는 모달창 */}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={handleLogout}
            content={"로그아웃 하시겠습니까?"}
          />
        </S.ProfileInfoHeaderButtonWrapper>
      </S.ProfileInfoHeaderWrapper>
      {/* 프로필 내용물 박스  */}
      <S.ProfileInfoContentWrapper>
        <AuthContentBox
          content="좋아요한 서비스"
          img={MypageHeart}
          link="favorite"
        />
        <AuthContentBox
          content="좋아요한 게시물"
          img={MypageThumb}
          link="favoritePost"
        />
        <AuthContentBox
          content="작성한 게시물"
          img={MypageVector}
          link="post"
        />
        <AuthContentBox
          content="댓글 단 게시물"
          img={MypageChat}
          link="comment"
        />
        <AuthContentBox
          content="회원정보 수정"
          img={MypageSetting}
          link="modify"
        />
      </S.ProfileInfoContentWrapper>
    </>
  );
}

export default ProfileMain;
