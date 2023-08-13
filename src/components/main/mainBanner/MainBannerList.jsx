import React from "react";
import * as S from "./style";
import Banner from "./Banner";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./pagination.css";

import bannerImg1 from "./banner1.png";
import bannerImg2 from "./banner2.png";
import bannerImg3 from "./banner3.png";

function MainBannerList() {
  const banners = [bannerImg1, bannerImg2, bannerImg3];
  return (
    <>
      <S.BannerListWrapper>
        <Swiper
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          {banners.map(banner => (
            <SwiperSlide key={banner}>
              <Banner bannerImg={banner} />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.BannerListWrapper>
    </>
  );
}

export default MainBannerList;
