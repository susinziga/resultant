import React from "react";

import * as Styled from "./Testimonials_home.styled";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Testimonial from "./testimonial/Testimonial";
import useTranslation from "next-translate/useTranslation";

const Testimonials_home = (props) => {
  const swiperInstance = useSwiper();
  const { t } = useTranslation("testimonials");
  const testimonials = [
    {
      title: t("testimonial1_title"),
      text: t("testimonial1_text"),
      name: t("testimonial1_name"),
      role: t("testimonial1_role"),
    },
    {
      title: t("testimonial1_title"),
      text: t("testimonial1_text"),
      name: t("testimonial1_name"),
      role: t("testimonial1_role"),
    },
  ];
  return (
    <Styled.TestimonialsContainer {...props}>
      <Swiper
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => (swiperInstance = swiper)}
      >
        {testimonials.map((testimonial) => {
          return (
            <SwiperSlide>
              <Testimonial testimonial={testimonial}></Testimonial>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Styled.TestimonialsButton>
        <img
          src="./Buttons/arrow_next.svg"
          onClick={() => {
            swiperInstance.slideNext(1000);
          }}
        ></img>
        <img
          src="./Buttons/arrow_prev2.svg"
          onClick={() => {
            swiperInstance.slidePrev(1000);
          }}
        ></img>
      </Styled.TestimonialsButton>
    </Styled.TestimonialsContainer>
  );
};

export default Testimonials_home;
