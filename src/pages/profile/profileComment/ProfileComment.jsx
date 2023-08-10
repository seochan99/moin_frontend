import React from "react";
import MypageChat from "../../../assets/images/icon/mypageChat.png";
import ProfileHeader from "../../../components/profile/profileHeader/ProfileHeader";

function ProfileComment() {
  return (
    <>
      <ProfileHeader title="댓글" img={MypageChat} />
    </>
  );
}

export default ProfileComment;
