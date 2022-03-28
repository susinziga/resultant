import React from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import * as Styled from "./PartnersSlider.styled";
import PartnersSlider_item_first from "./PartnersSlider_item/PartnersSlider_item_first";

const items = [{}];

const PartnersSlider = () => {
  let swip = useSwiper();

  const setInstance = (instance) => {
    swip = instance;
  };

  return (
    <Styled.PartnersContainer>
      <Swiper direction={"vertical"} slidesPerView={1}>
        <SwiperInstance setInstance={setInstance}></SwiperInstance>
        <SwiperSlide>
          <PartnersSlider_item_first></PartnersSlider_item_first>
        </SwiperSlide>
      </Swiper>
    </Styled.PartnersContainer>
  );
};

const SwiperInstance = ({ setInstance }) => {
  let swiperInstance = useSwiper();
  setInstance(swiperInstance);
  return <></>;
};

export default PartnersSlider;
