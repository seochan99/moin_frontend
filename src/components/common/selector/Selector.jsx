import React from "react";
import * as S from "./style";

function Selector({ options, getCurrentOption }) {
  const onChagne = e => {
    getCurrentOption(e.target.value);
  };
  return (
    <>
      <S.SelectorSelect onChange={onChagne}>
        {options.map((option, idx) => (
          <S.SelectorOption value={option.value} key={idx}>
            {option.title}
          </S.SelectorOption>
        ))}
      </S.SelectorSelect>
    </>
  );
}
export default Selector;
