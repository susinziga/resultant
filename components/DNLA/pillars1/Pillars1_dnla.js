import React from "react";
import Pillars_component from "../pillars1/component/Pillar1Component_dnla";
import Pillars_mobile from "../pillars1/component/Pillar1ComponentMobile_dnla";
import * as Styled from "./Pillars1.styled";
import useTranslation from "next-translate/useTranslation";
import useSize from "../../../custom_hooks/useSize";

import Button from "../../../basic_components/button/Button";

import { useRouter } from "next/router";
import styled from "styled-components";

import "swiper/css";

const Pillars_dnla = (props) => {
  const { t, lang } = useTranslation();

  const { locale } = useRouter();

  const heading = t("dnla:dnla_pillarHeading");
  const button = t("dnla:dnla_buttonTextPillar");
  const pillarsContentBot = [
    { title: t("dnla:dnla_pillarTitle1"), text: t("dnla:dnla_pillarText1") },
    { title: t("dnla:dnla_pillarTitle2"), text: t("dnla:dnla_pillarText2") },
    { title: t("dnla:dnla_pillarTitle3"), text: t("dnla:dnla_pillarText3") },
  ];
  const pillarsContentBot2 = [
    { title: t("dnla:dnla_pillarTitle4"), text: t("dnla:dnla_pillarText4") },
    { title: t("dnla:dnla_pillarTitle5"), text: t("dnla:dnla_pillarText5") },
    { title: t("dnla:dnla_pillarTitle6"), text: t("dnla:dnla_pillarText6") },
  ];

  const pillarsContentBotMobile = [
    { title: t("dnla:dnla_pillarTitle1"), text: t("dnla:dnla_pillarText1") },
    { title: t("dnla:dnla_pillarTitle2"), text: t("dnla:dnla_pillarText2") },
    { title: t("dnla:dnla_pillarTitle3"), text: t("dnla:dnla_pillarText3") },
    { title: t("dnla:dnla_pillarTitle4"), text: t("dnla:dnla_pillarText4") },
    { title: t("dnla:dnla_pillarTitle5"), text: t("dnla:dnla_pillarText5") },
    { title: t("dnla:dnla_pillarTitle6"), text: t("dnla:dnla_pillarText6") },
  ];

  const { isDesktop } = useSize();

  return isDesktop() ? (
    <Styled.PillarsContainer {...props}>
      <Styled.HeadingContainer>
        <Styled.HeadingLine></Styled.HeadingLine>
        <Styled.Heading>{heading}</Styled.Heading>
      </Styled.HeadingContainer>
      <Styled.PillarsFlex>
        <Styled.PillarsFlex1>
          {pillarsContentBot.map((pillar, index) => {
            return (
              <Pillars_component
                key={index}
                title={pillar.title}
                text={pillar.text}
              ></Pillars_component>
            );
          })}
        </Styled.PillarsFlex1>
        <Styled.PillarsFlex2>
          {pillarsContentBot2.map((pillar, index) => {
            return (
              <Pillars_component
                key={index}
                title={pillar.title}
                text={pillar.text}
              ></Pillars_component>
            );
          })}
        </Styled.PillarsFlex2>
      </Styled.PillarsFlex>
      <Styled.ButtonContainer>
        <Button
          primary
          style={{ padding: "20px 80px", fontSize: "1.4rem" }}
          href={"/" + locale + "/services/dnla/ponudba-dnla"}
        >
          {button}
        </Button>
      </Styled.ButtonContainer>
    </Styled.PillarsContainer>
  ) : (
    <Styled.PillarsContainer_mobile {...props}>
      <Styled.HeadingContainer>
        <Styled.Heading>{heading}</Styled.Heading>
      </Styled.HeadingContainer>
      {pillarsContentBotMobile.map((pillar, index) => {
        return (
          <Pillars_mobile
            key={index}
            title={pillar.title}
            text={pillar.text}
          ></Pillars_mobile>
        );
      })}
      <Styled.ButtonContainer>
        <PillarButton
          primary
          // style={{ padding: "15px 50px" }}
          href={"/" + locale + "/services/dnla/ponudba-dnla"}
        >
          {button}
        </PillarButton>
      </Styled.ButtonContainer>
    </Styled.PillarsContainer_mobile>
  );
};

export const PillarButton = styled.a`
  background-color: var(--secondary-color);
  padding: 5% 10%;
  width: 100%;
  display: block;
  text-align: center;

  color: var(--white);
  border-radius: var(--border-primary);
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

export default Pillars_dnla;
