import React, { useState, useEffect } from "react";
import * as S from "./style";
import Banner from "./Banner";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./pagination.css";

import DeepDive from "./img/DeepDive.jpeg";
import DeepDiveMobile from "./img/DeepDiveMovbile.jpeg";
import EventPresent from "./img/EventPresent.png";
import EventPresentMobile from "./img/EventPresentMobile.png";

import { Link } from "react-router-dom";

function MainBannerList() {
  const bannersDesktop = [
    { img: EventPresent, url: "https://www.instagram.com/moin.dgu/" },
    { img: DeepDive, url: "https://www.instagram.com/deep.daiv/" }
  ];
  const bannersMobile = [
    { img: EventPresentMobile, url: "https://www.instagram.com/moin.dgu/" },
    { img: DeepDiveMobile, url: "https://www.instagram.com/deep.daiv/" }
  ];

  const [currentBanners, setCurrentBanners] = useState(bannersDesktop);
  //윈도우가 640px 이하면  모바일버전을 연다
  const resizingHandler = () => {
    if (window.innerWidth <= 550) {
      setCurrentBanners(bannersMobile);
    } else {
      setCurrentBanners(bannersDesktop);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 550) {
      setCurrentBanners(bannersMobile);
    }
    window.addEventListener("resize", resizingHandler);

    return () => {
      window.removeEventListener("resize", resizingHandler);
    };
  }, []);

  return (
    <>
      <S.BannerListWrapper>
        <Swiper
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          {currentBanners.map((banner, idx) => (
            <SwiperSlide key={idx}>
              <Link to={banner.url} target="_blank">
                <Banner bannerImg={banner.img} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.BannerListWrapper>
    </>
  );
}

export default MainBannerList;
