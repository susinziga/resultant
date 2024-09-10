import React from "react";
import Pillars_component, { MoreButton } from "./Pillars_component";
import * as Styled from "./Pillars_home.styled";
import useTranslation from "next-translate/useTranslation";
import useSize from "../../../custom_hooks/useSize";

import Pillars_sliderItem from "./slider/Pillars_sliderItem";

import { useRouter } from "next/router";

import "swiper/css";
import { BodyText4, Title2 } from "../../../basic_components/texts/Texts";
import Link from "next/link";

const Pillars_home = (props) => {
  const { t, lang } = useTranslation();

  const { locale } = useRouter();

  const fullWidthCardTop = {
    title: t("pillars:pillar5_title"),
    text: t("pillars:pillar5_excerpt"),
    link: "/services/360potencial",
    logo: "/Pillars/360potential.png",
  };

  const pillarsContentTop = [
    {
      title: t("pillars:pillar1_title"),
      text: t("pillars:pillar1_excerpt"),
      link: "/services/siok",
      logo: "/Pillars/siok.webp",
    },
    {
      title: t("pillars:pillar2_title"),
      text: t("pillars:pillar2_excerpt"),
      link: "/services/dnla",
      logo: "/Pillars/dnla.webp",
    },
  ];

  const pillarsContentBot = [
    {
      title: t("pillars:pillar3_title"),
      text: t("pillars:pillar3_excerpt"),
      link: "/services/sistematicen-razvoj-kompetenc",
    },
    {
      title: t("pillars:pillar4_title"),
      text: t("pillars:pillar4_excerpt"),
      link: "/services/upravljanje-talentov-in-nasledstveno-nacrtovanje",
    },
  ];

  const buttonText = t("common:button_more");

  const { isDesktop } = useSize();

  return isDesktop() ? (
    <Styled.PillarsContainer {...props}>
      <Link href={fullWidthCardTop.link}>
        <div className="pillarExposed">
          <Title2
            style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
            }}
            className="pillar_text_fullWidth"
          >
            {fullWidthCardTop.title}
          </Title2>
          <p>
            <BodyText4
              className="pillar_text_fullWidth"
              dangerouslySetInnerHTML={{ __html: fullWidthCardTop.text }}
            />
          </p>
          <div
            style={{
              width: "100%",
              textAlign: "right",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1.5rem",
            }}
          >
            <MoreButton className="button_pillar_fullWidth">
              {buttonText}
            </MoreButton>
            <img
              alt=""
              src={fullWidthCardTop.logo}
              className="pillar_logo"
            ></img>
          </div>
        </div>
      </Link>

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
              key={pillar.title}
              title={pillar.title}
              text={pillar.text}
              button={buttonText}
              link={"/" + locale + pillar.link}
              logo={pillar.logo}
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
            key={pillar.title}
            title={pillar.title}
            text={pillar.text}
            button={buttonText}
            link={"/" + locale + pillar.link}
            logo={pillar.logo}
          ></Pillars_sliderItem>
        );
      })}
      {pillarsContentBot.map((pillar) => {
        return (
          <Pillars_sliderItem
            key={pillar.title}
            title={pillar.title}
            text={pillar.text}
            button={buttonText}
            link={"/" + locale + pillar.link}
            logo={pillar.logo}
          ></Pillars_sliderItem>
        );
      })}
    </Styled.PillarsContainer_mobile>
  );
};

export default Pillars_home;
