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
  const testimonials = [
    {
      title: t("testimonial1_title"),
      text: t("testimonial1_text"),
      name: t("testimonial1_name"),
      role: t("testimonial1_role"),
    },
    {
      title: t("testimonial2_title"),
      text: t("testimonial2_text"),
      name: t("testimonial2_name"),
      role: t("testimonial2_role"),
    },
    {
      title: t("testimonial3_title"),
      text: t("testimonial3_text"),
      name: t("testimonial3_name"),
      role: t("testimonial3_role"),
    },
    {
      title: t("testimonial4_title"),
      text: t("testimonial4_text"),
      name: t("testimonial4_name"),
      role: t("testimonial4_role"),
    },
    {
      title: t("testimonial5_title"),
      text: t("testimonial5_text"),
      name: t("testimonial5_name"),
      role: t("testimonial5_role"),
    },
  ];

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
        // onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => (swiperInstance = swiper)}
      >
        <SwiperInstance setInstance={setInstance}></SwiperInstance>
        {testimonials.map((testimonial, id) => {
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

const SwiperInstance = ({ setInstance }) => {
  let swiperInstance = useSwiper();
  setInstance(swiperInstance);
  return <></>;
};

export default Testimonials_home;
