import React from "react";
import * as S from "./style";

import { AiFillStar } from "react-icons/ai";

function Star({ starNum, starSize }) {
  return (
    <S.StarWrapper>
      {[1, 2, 3, 4, 5].map(idx => (
        <AiFillStar
          key={idx}
          size={starSize}
          color={idx <= starNum ? "#FFD600" : "#D9D9D9"}
        />
      ))}
    </S.StarWrapper>
  );
}

export default Star;
