import React from "react";
import Pillars_component from "./Pillars_component";
import * as Styled from "./Pillars_home.styled";
import useTranslation from "next-translate/useTranslation";

const Pillars_home = () => {
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

  return (
    <Styled.PillarsContainer>
      <Styled.PillarsFlex>
        {pillarsContentTop.map((pillar) => {
          return (
            <Pillars_component
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
  );
};

export default Pillars_home;
