import React from "react";
import Pillars_component from "./Pillars_component";
import * as Styled from "./Pillars_home.styled";
import useTranslation from "next-translate/useTranslation";
import useSize from "../../../custom_hooks/useSize";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import Pillars_sliderItem from "./slider/Pillars_sliderItem";

import "swiper/css";

const Pillars_home = (props) => {
  const { t, lang } = useTranslation();

  const pillarsContentTop = [
    { title: t("pillars:pillar1_title"), text: t("pillars:pillar1_excerpt") },
    { title: t("pillars:pillar2_title"), text: t("pillars:pillar2_excerpt") },
  ];
  const pillarsContentBot = [
    { title: t("pillars:pillar3_title"), text: t("pillars:pillar3_excerpt") },
    { title: t("pillars:pillar4_title"), text: t("pillars:pillar4_excerpt") },
  ];

  const buttonText = t("common:button_more");

  const { isDesktop } = useSize();

  return isDesktop() ? (
    <Styled.PillarsContainer {...props}>
      <Styled.PillarsFlex>
        {pillarsContentTop.map((pillar, id) => {
          return (
            <Pillars_component
              key={id}
              title={pillar.title}
              text={pillar.text}
              button={buttonText}
            ></Pillars_component>
          );
        })}
      </Styled.PillarsFlex>
      <Styled.PillarsFlex>
        {pillarsContentBot.map((pillar) => {
          return (
            <Pillars_component
              title={pillar.title}
              text={pillar.text}
              button={buttonText}
            ></Pillars_component>
          );
        })}
      </Styled.PillarsFlex>
    </Styled.PillarsContainer>
  ) : (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        direction={"horizontal"}
        className="mySwiper"
      >
        <SwiperSlide>
          {pillarsContentBot.map((pillar) => {
            return (
              <Pillars_sliderItem
                title={pillar.title}
                text={pillar.text}
                button={buttonText}
              ></Pillars_sliderItem>
            );
          })}
          {pillarsContentBot.map((pillar) => {
            return (
              <Pillars_sliderItem
                title={pillar.title}
                text={pillar.text}
                button={buttonText}
              ></Pillars_sliderItem>
            );
          })}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Pillars_home;
