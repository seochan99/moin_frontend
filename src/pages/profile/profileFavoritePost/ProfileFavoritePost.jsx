import React from "react";
import * as S from "./style";
import MypageStar from "../../../assets/images/icon/mypageStarBlue.png";
import ProfileHeader from "../../../components/profile/profileHeader/ProfileHeader";
function ProfileFavoritePost() {
  return (
    <>
      <ProfileHeader title="좋아요한 게시글" img={MypageStar} />
    </>
  );
}

export default ProfileFavoritePost;
