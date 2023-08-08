import React from "react";
import * as S from "./style";
import Banner from "../../components/common/banner/Banner";

function Community() {
  return (
    <S.CommunityWrapper>
      <Banner
        titleKorean="커뮤니티"
        titleEnglish="COMMUNITY"
        image={<S.CommunityIconImg />}
      />
    </S.CommunityWrapper>
  );
}

export default Community;
