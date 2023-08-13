import { useRecoilState } from "recoil";

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import NavBarTranslate from "./NavBarTranslate";

import { AiOutlineMenu } from "react-icons/ai";

import * as S from "./style";
import { userState } from "../../../context/authState";
import MainLogo from "../../../assets/images/moin_logo.png";

export default function NavBar() {
  //사이드바 열고 닫는 함수
  const sideBar = useRef();
  const sideBarBackground = useRef();

  const sideBarOpen = () => {
    sideBar.current.style.display = "flex";
    sideBarBackground.current.style.display = "block";
  };

  const sideBarClose = () => {
    sideBar.current.style.display = "none";
    sideBarBackground.current.style.display = "none";
  };

  const menuContents = [
    {
      link: `/community`,
      title: "커뮤니티"
    },
    {
      link: `/notice`,
      title: "공지사항"
    },
    {
      link: `/suggestion`,
      title: "건의사항"
    },
    {
      link: `/about`,
      title: "서비스 소개"
    }
  ];

  //위치가 바뀔때마다
  const location = useLocation();
  useEffect(() => {
    if (isMobile) {
      sideBarClose();
    }
    window.scrollTo(0, 0);
  }, [location]);

  const setMenu = () => {
    return menuContents.map((menu, idx) => (
      <S.NavLink
        to={menu.link}
        key={idx}
        $isActive={location.pathname.startsWith(menu.link)}
      >
        {menu.title}
      </S.NavLink>
    ));
  };

  const [isMobile, setisMobile] = useState(false);

  //윈도우가 640px 이하면  모바일버전을 연다
  const resizingHandler = () => {
    if (window.innerWidth < 640) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 640) {
      setisMobile(true);
    }
    window.addEventListener("resize", resizingHandler);

    return () => {
      window.removeEventListener("resize", resizingHandler);
    };
  }, []);

  // 로그인 정보 불러오기
  const [userInfo, setUserInfo] = useRecoilState(userState);

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (storedUserInfo) {
      setUserInfo(storedUserInfo);
    }
  }, []);

  return (
    <S.NavWrapper>
      <S.NavLogo>
        <S.NavLogoIcon src={MainLogo} alt="MO:IN" />
        <S.NavLogoTitle to={`/`}> MO:IN</S.NavLogoTitle>
      </S.NavLogo>

      {isMobile ? (
        <>
          <S.NavMobileMenu>
            <AiOutlineMenu size={"3rem"} onClick={sideBarOpen} />
          </S.NavMobileMenu>

          {/* 사이드바 */}
          <S.NavSideBarWrapper ref={sideBar}>
            <S.NavSideBarMenu>
              <S.NavSideBarHeader>
                {userInfo ? (
                  <S.NavLink to={`/mypage`} $isActive={true}>
                    {userInfo.nickname} 님 {" >"}
                  </S.NavLink>
                ) : (
                  <S.NavLink to={`/login`} $isActive={true}>
                    로그인하세요! {" >"}
                  </S.NavLink>
                )}
              </S.NavSideBarHeader>

              <S.NavSideBarBody>{setMenu()}</S.NavSideBarBody>
            </S.NavSideBarMenu>

            <NavBarTranslate />
          </S.NavSideBarWrapper>
          <S.NavSideBarBackground
            ref={sideBarBackground}
            onClick={sideBarClose}
          />
        </>
      ) : (
        <S.NavMonitorMenu>
          {setMenu()}
          {userInfo ? (
            <S.NavLink
              to={`/mypage`}
              $isActive={location.pathname == `/mypage`}
            >
              마이페이지
            </S.NavLink>
          ) : (
            <S.NavLink to={`/login`} $isActive={location.pathname == `/login`}>
              로그인
            </S.NavLink>
          )}
          <NavBarTranslate />
        </S.NavMonitorMenu>
      )}
    </S.NavWrapper>
  );
}
