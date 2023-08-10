import { useRecoilState } from "recoil";
import { userState } from "../../context/authState";
import * as S from "./style";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import LoginLogo from "../../assets/images/moin_logo.png";
import { AiOutlineMenu } from "react-icons/ai";

export default function NavBar() {
  const sideBar = useRef();
  const sideBarBackground = useRef();

  const sideBarOpen = e => {
    sideBar.current.style.display = "flex";
    sideBarBackground.current.style.display = "block";
  };

  const sideBarClose = e => {
    sideBar.current.style.display = "none";
    sideBarBackground.current.style.display = "none";
  };

  const location = useLocation();
  useEffect(() => {
    sideBarClose();
  }, [location]);

  const [userInfo, setUserInfo] = useRecoilState(userState);
  // 로그인 정보 불러오기
  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (storedUserInfo) {
      setUserInfo(storedUserInfo);
    }
  }, []);

  // console.log(userInfo);

  return (
    <S.NavWrapper>
      {/* 모니터용 */}
      <S.NavLogo>
        <S.NavLogoIcon src={LoginLogo} alt="MO:IN" />
        <S.NavLogoTitle to={`/`}> MO:IN</S.NavLogoTitle>
      </S.NavLogo>

      <S.NavMonitorMenu>
        <S.NavLink to={`/community`}>커뮤니티</S.NavLink>
        <S.NavLink to={`/notice`}>공지사항</S.NavLink>
        <S.NavLink to={`/suggestion`}>건의사항</S.NavLink>
        <S.NavLink to={`/about`}>About</S.NavLink>
        {userInfo ? (
          <S.NavLink to={`/mypage`}>Mypage</S.NavLink>
        ) : (
          <S.NavLink to={`/login`}>Login</S.NavLink>
        )}
        <S.NavTranslate style={{ paddingLeft: "1.5rem" }}>
          <S.NavTranslateLanguage>KOR</S.NavTranslateLanguage>
          <>/</>
          <S.NavTranslateLanguage>ENG</S.NavTranslateLanguage>
        </S.NavTranslate>
      </S.NavMonitorMenu>

      {/* 모바일용  */}
      <S.NavMobileMenu>
        <AiOutlineMenu size={"3rem"} onClick={sideBarOpen} />
      </S.NavMobileMenu>

      {/* 사이드바 */}
      <S.NavSideBarWrapper ref={sideBar}>
        <S.NavSideBarHeader>
          {userInfo ? (
            <S.NavLink to={`/mypage`}>홍길동 님</S.NavLink>
          ) : (
            <S.NavLink to={`/login`}>Login</S.NavLink>
          )}
        </S.NavSideBarHeader>
        <S.NavSideBarMenu>
          <S.NavLink to={`/`}> MO:IN</S.NavLink>
          <S.NavLink to={`/community`}>커뮤니티</S.NavLink>
          <S.NavLink to={`/notice`}>공지사항</S.NavLink>
          <S.NavLink to={`/suggestion`}>건의사항</S.NavLink>
          <S.NavLink to={`/about`}>About</S.NavLink>
        </S.NavSideBarMenu>

        <S.NavTranslate
          style={{
            position: "absolute",
            bottom: "0rem",
            paddingBottom: "3rem"
          }}
        >
          <S.NavTranslateLanguage>KOR</S.NavTranslateLanguage>
          <>/</>
          <S.NavTranslateLanguage>ENG</S.NavTranslateLanguage>
        </S.NavTranslate>
      </S.NavSideBarWrapper>

      <S.NavSideBarBackground ref={sideBarBackground} onClick={sideBarClose} />
    </S.NavWrapper>
  );
}
