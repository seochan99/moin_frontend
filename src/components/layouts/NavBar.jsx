import { useRecoilState } from "recoil";
import { userState } from "../../context/authState";
import * as S from "./style";
import { useEffect } from "react";

export default function NavBar() {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  // 로그인 정보 불러오기
  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (storedUserInfo) {
      setUserInfo(storedUserInfo);
    }
  }, []);

  console.log(userInfo);

  return (
    <S.NavBarWrapper>
      <S.NavLink to={`/`}>MO:IN</S.NavLink>
      <S.NavBarMenu>
        <S.NavLink to={`/community`}>커뮤니티</S.NavLink>
        <S.NavLink to={`/notice`}>공지사항</S.NavLink>
        <S.NavLink to={`/suggestion`}>건의사항</S.NavLink>
        <S.NavLink to={`/about`}>About</S.NavLink>
        {userInfo ? (
          <S.NavLink to={`/mypage`}>Mypage</S.NavLink>
        ) : (
          <S.NavLink to={`/login`}>Login</S.NavLink>
        )}
      </S.NavBarMenu>
    </S.NavBarWrapper>
  );
}
