import React from "react";

import MypageVector from "../../../assets/images/icon/mypageVector.png";
import ProfileHeader from "../../../components/profile/profileHeader/ProfileHeader";
function ProfilePost() {
  return (
    <>
      <ProfileHeader title="작성한 게시물" img={MypageVector} />
    </>
  );
}

export default ProfilePost;
