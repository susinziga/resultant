import React from "react";

import * as Styled from "./NewsSlider.styled";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import NewsCard_service1 from "./NewsCard_service1";

const CardSlider = ({ news }) => {
  return (
    <Styled.Container>
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1.3, centeredSlides: true },
          768: {
            slidesPerView: 3,
          },
        }}
        loop={false}
        spaceBetween={10}
        initialSlide={0}
      >
        {news.map((n, id) => (
          <SwiperSlide key={id}>
            {({ isActive }) => (
              <NewsCard_service1
                isActive={isActive}
                news={n}
              ></NewsCard_service1>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.Container>
  );
};

export default CardSlider;
