import React, { useEffect, useRef } from "react";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { LanguageAtom } from "../../../recoil/LanguageAtom";

function NavBarTranslate(props) {
  const kor = useRef();
  const eng = useRef();
  const [language, setLanguage] = useRecoilState(LanguageAtom);

  const clickTranslateLanguage = e => {
    setLanguage(e.target.innerText);
  };

  useEffect(() => {
    if (language == "KOR") {
      kor.current.style.color = "#4285F4";
      eng.current.style.color = "";
    } else if (language == "ENG") {
      eng.current.style.color = "#4285F4";
      kor.current.style.color = "";
    }
  }, [language]);

  return (
    <S.NavBarTranslate>
      <S.NavTranslateLanguage ref={kor} onClick={clickTranslateLanguage}>
        KOR
      </S.NavTranslateLanguage>
      <S.NavTranslateSection>|</S.NavTranslateSection>
      <S.NavTranslateLanguage ref={eng} onClick={clickTranslateLanguage}>
        ENG
      </S.NavTranslateLanguage>
    </S.NavBarTranslate>
  );
}

export default NavBarTranslate;
