import React from "react";

import * as Styled from "./References_slider.styled";

import { useSwiper } from "swiper/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import References_item from "../../../references/references_item/References_item";

const References_slider = ({ references }) => {
  let swip = useSwiper();

  const setInstance = (instance) => {
    swip = instance;
  };

  const slide = () => {
    swip.slideNext(6000);
  };

  const slideBack = () => {
    swip.slidePrev(1000);
  };

  return (
    <Styled.Container>
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1.5, centeredSlides: true },
          768: {
            slidesPerView: 7,
            slidesPerGroup: 7,
          },
        }}
        loop={true}
        spaceBetween={50}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => (swip = swiper)}
      >
        <SwiperInstance setInstance={setInstance}></SwiperInstance>
        {references.map((ref, id) => (
          <SwiperSlide key={id}>
            <References_item reference={ref}></References_item>
          </SwiperSlide>
        ))}
      </Swiper>
      <Styled.SliderButtons>
        <img
          src="/Buttons/arrow_next.svg"
          onClick={() => {
            slide();
          }}
        ></img>
        <img
          src="/Buttons/arrow_prev.svg"
          onClick={() => {
            slideBack();
          }}
        ></img>
      </Styled.SliderButtons>
    </Styled.Container>
  );
};

const SwiperInstance = ({ setInstance }) => {
  let swiperInstance = useSwiper();
  setInstance(swiperInstance);
  return <></>;
};

export default References_slider;
