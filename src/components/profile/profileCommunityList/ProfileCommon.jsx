import React, { useState, useEffect } from "react";
import * as S from "./style";

import ProfileList from "../profileList/ProfileList";

function ProfileCommon({
  category,
  data,
  currentPage,
  setCurrentPage,
  count,
  islike,
  iscomment
}) {
  return (
    <>
      <ProfileList
        data={data}
        category={category}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        count={count}
        islike={islike}
        iscomment={iscomment}
      />
    </>
  );
}

export default ProfileCommon;
