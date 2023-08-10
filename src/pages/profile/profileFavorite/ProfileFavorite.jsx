import React from "react";
import * as S from "./style";
import MypageStar from "../../../assets/images/icon/mypageStarBlue.png";
import ProfileHeader from "../../../components/profile/profileHeader/ProfileHeader";
function ProfileFavorite() {
  return (
    <>
      <ProfileHeader title="즐겨찾는 서비스" img={MypageStar} />
    </>
  );
}

export default ProfileFavorite;
