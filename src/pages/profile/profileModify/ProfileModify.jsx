import React from "react";
import ProfileHeader from "../../../components/profile/profileHeader/ProfileHeader";
import MypageSetting from "../../../assets/images/icon/mypageSettingBlue.png";

function ProfileModify() {
  return (
    <>
      <ProfileHeader title="회원정보 수정" img={MypageSetting} />
    </>
  );
}

export default ProfileModify;
