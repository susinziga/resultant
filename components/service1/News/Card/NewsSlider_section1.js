import React from "react";

import * as Styled from "./NewsSlider.styled";

import { useSwiper } from "swiper/react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import NewsCard_service1 from "./NewsCard_service1";

const CardSlider = ({ news }) => {
  let swip = useSwiper();

  const setInstance = (instance) => {
    swip = instance;
  };

  const slide = (nr) => {
    swip.slideNext(500);
    swip.slideNext(500);
  };

  const slideBack = (nr) => {
    for (let index = 0; index < nr; index++) {
      swip.slidePrev(100);
    }
  };

  return (
    <Styled.Container>
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1.5, centeredSlides: true },
          768: {
            slidesPerView: 3,
          },
        }}
        loop={false}
        spaceBetween={30}
      >
        <SwiperInstance setInstance={setInstance}></SwiperInstance>
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

const SwiperInstance = ({ setInstance }) => {
  let swiperInstance = useSwiper();
  setInstance(swiperInstance);
  return <></>;
};

export default CardSlider;
