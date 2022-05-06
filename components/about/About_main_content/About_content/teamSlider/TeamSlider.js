import React, { useEffect, useContext } from "react";

import * as Styled from "./TeamSlider.styled";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import useTranslation from "next-translate/useTranslation";
import TeamSliderItem from "./TeamSliderItem";
import { AboutContext } from "../../../../../context/aboutContext";
import { Title2 } from "../../../../../basic_components/texts/Texts";

import useSize from "../../../../../custom_hooks/useSize";
import { Waypoint } from "react-waypoint";

const TeamSlider = ({ nextSection, prevSection, isActive, title }) => {
  const { t } = useTranslation("team");

  let swip = useSwiper();

  const { isDesktop } = useSize();

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
    if (isActive) {
      e.preventDefault();
      if (Date.now() - 500 > isScrolling) {
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
      link: "/ekipa/roman-klaric",
    },
    {
      name: t("person2_name"),
      role: t("person2_role"),
      gsm: t("person2_gsm"),
      email: t("person2_email"),
      text: t("person2_text"),
      linkedin: t("person2_linkedin"),
      photo: t("person2_photo"),
      link: "/ekipa/primoz-bitenc",
    },
    {
      name: t("person3_name"),
      role: t("person3_role"),
      gsm: t("person3_gsm"),
      email: t("person3_email"),
      text: t("person3_text"),
      linkedin: t("person3_linkedin"),
      photo: t("person3_photo"),
      link: "/ekipa/enej-klaric",
    },
  ];

  const setInstance = (instance) => {
    swip = instance;
  };
  return (
    <>
      {isDesktop() ? (
        ""
      ) : (
        <Title2
          style={{
            width: "var(--width-90)",
            margin: "auto",
            marginBottom: "2rem",
          }}
        >
          {title}
        </Title2>
      )}
      <Waypoint
        scrollableAncestor="window"
        topOffset="30%"
        bottomOffset="40%"
        onEnter={() => setContentSwiperActive(1)}
        onLeave={(a) => {
          if (a.currentPosition == "above") {
            setContentSwiperActive(2);
          }
          if (a.currentPosition == "below") {
            setContentSwiperActive(0);
          }
        }}
      >
        <Styled.TeamComponentContainer>
          {items.map((item, id) => (
            <TeamSliderItem id={id} key={id} item={item}></TeamSliderItem>
          ))}
        </Styled.TeamComponentContainer>
      </Waypoint>
    </>
  );
};

const SwiperInstance = ({ setInstance }) => {
  let swiperInstance = useSwiper();
  setInstance(swiperInstance);
  return <></>;
};

export default TeamSlider;
