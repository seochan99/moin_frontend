import React from "react";
import * as S from "./style";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function Like({ likeSize, likeCheck }) {
  return (
    <S.LikeWrapper>
      {likeCheck ? (
        <AiFillHeart size={likeSize} color="#4285F4" />
      ) : (
        <AiOutlineHeart size={likeSize} color="#4285F4" />
      )}
    </S.LikeWrapper>
  );
}

export default Like;
