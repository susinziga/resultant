import React from "react";

import * as Styled from "./References_slider.styled";

import { useSwiper } from "swiper/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import References_item from "../../../references/references_item/References_item";
import { useRef, useState } from "react";

const References_slider = ({ references }) => {
  const swiperInstance = useSwiper();
  const [swip, setSwip] = useState();

  const slide = (nr) => {
    for (let index = 0; index < nr; index++) {
      swip.slideNext(1500);
    }
  };

  const slideBack = (nr) => {
    for (let index = 0; index < nr; index++) {
      swip.slidePrev(2000);
    }
  };

  return (
    <Styled.Container>
      <Swiper
        loop={true}
        spaceBetween={50}
        slidesPerView={7}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => (swip = swiper)}
      >
        {references.map((ref, id) => (
          <SwiperSlide key={id}>
            <References_item reference={ref}></References_item>
          </SwiperSlide>
        ))}
      </Swiper>
      <Styled.SliderButtons>
        <img
          src="./Buttons/arrow_next.svg"
          onClick={() => {
            slide(7);
          }}
        ></img>
        <img
          src="./Buttons/arrow_prev.svg"
          onClick={() => {
            slideBack(7);
          }}
        ></img>
      </Styled.SliderButtons>
    </Styled.Container>
  );
};

export default References_slider;
