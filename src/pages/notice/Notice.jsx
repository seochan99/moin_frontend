import React from "react";
import * as S from "./style";
import Banner from "../../components/common/banner/Banner";

function Notice() {
  return (
    <S.NoticeWrapper>
      <Banner
        titleKorean="공지사항"
        titleEnglish="NOTICE"
        image={<S.NoticeIconImg />}
      />
    </S.NoticeWrapper>
  );
}

export default Notice;
