import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import * as S from "./style";
import "./mainCategorySwiper.css";

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
          <Swiper
            className="mainCategorySwiper"
            slidesPerView="auto"
            breakpoints={{
              390: {
                slidesPerGroup: 4
              },
              700: {
                slidesPerGroup: 7
              }
            }}
            modules={[Navigation, Pagination, Scrollbar]}
            navigation={true}
          >
            {category.tags.map((tag, idx) => (
              <SwiperSlide key={idx}>
                <S.MainCategoryTagWrapper
                  key={idx}
                  $isActive={props.currentCategoryTag == idx}
                  onClick={onClick}
                >
                  {tag}
                </S.MainCategoryTagWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.MainCategoryTagListWrapper>
      </S.MainCategoryWrapper>
    </>
  );
}

export default MainCategory;
