import React, { useEffect } from "react";

import * as Styled from "./TeamSlider.styled";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import useTranslation from "next-translate/useTranslation";
import TeamSliderItem from "./TeamSliderItem";

const TeamSlider = ({ nextSection, prevSection, isActive }) => {
  const { t } = useTranslation("team");

  let swip = useSwiper();

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);

    return () => {
      return window.removeEventListener("wheel", handleWheel);
    };
  }, [isActive]);

  const items = [
    {
      name: t("person1_name"),
      role: t("person1_role"),
      gsm: t("person1_gsm"),
      email: t("person1_email"),
      text: t("person1_text"),
    },
    {
      name: t("person2_name"),
      role: t("person2_role"),
    },
  ];

  const handleWheel = (e) => {
    console.log(isActive);
    if (isActive) {
      if (e.deltaY > 0) {
        if (swip.isEnd) {
          nextSection(e);
        } else swip.slideNext(500);
      } else {
        if (swip.isBeginning) {
          prevSection(e);
        } else swip.slidePrev(500);
      }
    }
  };

  const setInstance = (instance) => {
    swip = instance;
  };
  return (
    <Styled.TeamComponentContainer>
      <Swiper direction={"horizontal"} slidesPerView={1}>
        <SwiperInstance setInstance={setInstance}></SwiperInstance>
        {items.map((item, id) => (
          <SwiperSlide key={id}>
            <TeamSliderItem item={item}></TeamSliderItem>
          </SwiperSlide>
        ))}
      </Swiper>

      <img></img>
    </Styled.TeamComponentContainer>
  );
};

const SwiperInstance = ({ setInstance }) => {
  let swiperInstance = useSwiper();
  setInstance(swiperInstance);
  return <></>;
};

export default TeamSlider;
