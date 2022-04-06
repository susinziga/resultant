import React, { useEffect, useContext } from "react";

import * as Styled from "./TeamSlider.styled";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import useTranslation from "next-translate/useTranslation";
import TeamSliderItem from "./TeamSliderItem";
import { AboutContext } from "../../../../../context/aboutContext";

const TeamSlider = ({ nextSection, prevSection, isActive }) => {
  const { t } = useTranslation("team");

  let swip = useSwiper();

  const { contentSwiperActive, setContentSwiperActive } =
    useContext(AboutContext);

  useEffect(() => {
    window.addEventListener("wheel", preventDefault, { passive: false });
    return () => {
      window.removeEventListener("wheel", preventDefault, {
        passive: false,
      });
    };
  }, [isActive]);

  let isScrolling = Date.now();

  const preventDefault = (e) => {
    console.log(Date.now());
    console.log(isScrolling);
    if (isActive) {
      e.preventDefault();
      if (Date.now() - 500 > isScrolling) {
        console.log(isActive);

        if (e.deltaY < 0) {
          if (swip.isBeginning) {
            /*document.getElementById("content_box").scrollBy(0, e.deltaY);*/
            document
              .getElementById("approach")
              .scrollIntoView({ behavior: "smooth" });
            setContentSwiperActive((prev) => prev - 1);
          } else swip.slidePrev(1000);
        }
        if (e.deltaY > 0) {
          if (swip.isEnd) {
            /*document.getElementById("content_box").scrollBy(0, e.deltaY);*/
            document
              .getElementById("partners")
              .scrollIntoView({ behavior: "smooth" });
            setContentSwiperActive((prev) => prev + 1);
          } else swip.slideNext(1000);
        }

        isScrolling = Date.now();
      }
    }
    // window.scrollBy(0, e.deltaY);
  };

  const items = [
    {
      name: t("person1_name"),
      role: t("person1_role"),
      gsm: t("person1_gsm"),
      email: t("person1_email"),
      text: t("person1_text"),
      linkedin: t("person1_linkedin"),
      photo: t("person1_photo"),
    },
    {
      name: t("person2_name"),
      role: t("person2_role"),
      gsm: t("person2_gsm"),
      email: t("person2_email"),
      text: t("person2_text"),
      linkedin: t("person2_linkedin"),
      photo: t("person2_photo"),
    },
    {
      name: t("person3_name"),
      role: t("person3_role"),
      gsm: t("person3_gsm"),
      email: t("person3_email"),
      text: t("person3_text"),
      linkedin: t("person3_linkedin"),
      photo: t("person3_photo"),
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
      {items.map((item, id) => (
        <SwiperSlide key={id}>
          <TeamSliderItem item={item}></TeamSliderItem>
        </SwiperSlide>
      ))}
    </Styled.TeamComponentContainer>
  );
};

const SwiperInstance = ({ setInstance }) => {
  let swiperInstance = useSwiper();
  setInstance(swiperInstance);
  return <></>;
};

export default TeamSlider;
