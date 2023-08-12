import React from "react";
import * as S from "./style";

import { AiFillStar } from "react-icons/ai";

function Star({ starNum, starSize }) {
  return (
    <>
      <S.StarGray>
        <S.StarYellow width={(starNum / 5) * (starSize * 5)}>
          {[1, 2, 3, 4, 5].map(idx => (
            <AiFillStar key={idx} size={starSize + "rem"} color={"#FFD600"} />
          ))}
        </S.StarYellow>
        {[1, 2, 3, 4, 5].map(idx => (
          <AiFillStar key={idx} size={starSize + "rem"} color={"#D9D9D9"} />
        ))}
      </S.StarGray>
    </>
  );
}

export default Star;
