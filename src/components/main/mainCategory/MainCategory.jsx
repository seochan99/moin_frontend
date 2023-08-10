import React, { useState } from "react";
import * as S from "./style";

function MainCategory(props) {
  const category = props.category;

  const onClick = e => {
    props.getCurrentCategoryTag(category.tags.indexOf(e.target.innerText, 0));
  };
  return (
    <>
      <S.MainCategoryWrapper>
        <S.MainCategoryTitle>{category.title}</S.MainCategoryTitle>
        <S.MainCategoryTagListWrapper>
          {category.tags.map((tag, idx) => (
            <S.MainCategoryTagWrapper
              key={idx}
              $isActive={props.currentCategoryTag == idx}
              onClick={onClick}
            >
              {tag}
            </S.MainCategoryTagWrapper>
          ))}
        </S.MainCategoryTagListWrapper>
      </S.MainCategoryWrapper>
    </>
  );
}

export default MainCategory;
