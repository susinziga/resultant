import React from "react";

import * as Styled from "./Testimonials_home.styled";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Testimonial from "./testimonial/Testimonial";
import useTranslation from "next-translate/useTranslation";

const Testimonials_home = (props) => {
  let swiperInstance = useSwiper();
  const { t } = useTranslation("testimonials");

  const numTestimonials = 7;

  const setInstance = (instance) => {
    swiperInstance = instance;
  };
  return (
    <Styled.TestimonialsContainer {...props}>
      <Swiper
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        onSwiper={(swiper) => (swiperInstance = swiper)}
      >
        <SwiperInstance setInstance={setInstance}></SwiperInstance>
        {Array.from({ length: numTestimonials }).map((_, id) => {
          const testimonial = {
            title: t(`testimonial${id + 1}_title`),
            text: t(`testimonial${id + 1}_text`),
            name: t(`testimonial${id + 1}_name`),
            role: t(`testimonial${id + 1}_role`),
          };

          return (
            <SwiperSlide key={id}>
              <Testimonial testimonial={testimonial}></Testimonial>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Styled.TestimonialsButton>
        <img
          src="./Buttons/arrow_next.svg"
          alt=""
          onClick={() => {
            swiperInstance.slideNext(1000);
          }}
        ></img>
        <img
          src="./Buttons/arrow_prev2.svg"
          alt=""
          onClick={() => {
            swiperInstance.slidePrev(1000);
          }}
        ></img>
      </Styled.TestimonialsButton>
    </Styled.TestimonialsContainer>
  );
};

const SwiperInstance = ({ setInstance }) => {
  let swiperInstance = useSwiper();
  setInstance(swiperInstance);
  return <></>;
};

export default Testimonials_home;
