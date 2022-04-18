import React from "react";
import Pillars_component from "./Pillars_component";
import * as Styled from "./Pillars_home.styled";
import useTranslation from "next-translate/useTranslation";
import useSize from "../../../custom_hooks/useSize";

import Pillars_sliderItem from "./slider/Pillars_sliderItem";

import { useRouter } from "next/router";

import "swiper/css";

const Pillars_home = (props) => {
  const { t, lang } = useTranslation();

  const { locale } = useRouter();

  const pillarsContentTop = [
    {
      title: t("pillars:pillar1_title"),
      text: t("pillars:pillar1_excerpt"),
      link: "/services/siok",
      logo: "/Pillars/siok.png",
    },
    {
      title: t("pillars:pillar2_title"),
      text: t("pillars:pillar2_excerpt"),
      link: "/services/dnla",
      logo: "/Pillars/dnla.png",
    },
  ];
  const pillarsContentBot = [
    {
      title: t("pillars:pillar3_title"),
      text: t("pillars:pillar3_excerpt"),
      link: "/services/sistematicen_razvoj_kompetenc",
    },
    {
      title: t("pillars:pillar4_title"),
      text: t("pillars:pillar4_excerpt"),
      link: "/services/upravljanje_talentov_in_nasledstveno_nacrtovanje",
    },
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
              link={"/" + locale + pillar.link}
              logo={pillar.logo}
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
              link={"/" + locale + pillar.link}
            ></Pillars_component>
          );
        })}
      </Styled.PillarsFlex>
    </Styled.PillarsContainer>
  ) : (
    <Styled.PillarsContainer_mobile {...props}>
      {pillarsContentTop.map((pillar) => {
        return (
          <Pillars_sliderItem
            title={pillar.title}
            text={pillar.text}
            button={buttonText}
            link={"/" + locale + pillar.link}
          ></Pillars_sliderItem>
        );
      })}
      {pillarsContentBot.map((pillar) => {
        return (
          <Pillars_sliderItem
            title={pillar.title}
            text={pillar.text}
            button={buttonText}
            link={"/" + locale + pillar.link}
          ></Pillars_sliderItem>
        );
      })}
    </Styled.PillarsContainer_mobile>
  );
};

export default Pillars_home;
