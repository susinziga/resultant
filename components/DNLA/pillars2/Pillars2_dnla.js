import React from "react";
import Pillars_component from "../pillars2/component/Pillar2Component_dnla";
import Pillars_mobile from  "../pillars2/component/Pillar2ComponentMobile_dnla";
import * as Styled from "./Pillars2.styled";
import useTranslation from "next-translate/useTranslation";
import useSize from "../../../custom_hooks/useSize";

import Button from "../../../basic_components/button/Button";

import "swiper/css";

const Pillars2_dnla = (props) => {
  const { t, lang } = useTranslation();

    const pillarsContentBot = [
      { title: t("dnla:dnla_pillar2Title1"), text: t("dnla:dnla_pillar2Text1"), button: t("dnla:dnla_pillar2Button")},
      { title: t("dnla:dnla_pillar2Title2"), text: t("dnla:dnla_pillar2Text2"), button: t("dnla:dnla_pillar2Button")},
      { title: t("dnla:dnla_pillar2Title3"), text: t("dnla:dnla_pillar2Text3"), button: t("dnla:dnla_pillar2Button")},
    ];

    

  const { isDesktop } = useSize();

  return isDesktop() ? (
    <Styled.PillarsContainer {...props}>
       
      <Styled.PillarsFlex>
       
        {pillarsContentBot.map((pillar) => {
          return (
            <Pillars_component
              title={pillar.title}
              text={pillar.text}
              button={pillar.button}

            ></Pillars_component>
          );
        })}
        </Styled.PillarsFlex>
    </Styled.PillarsContainer>
  ) : (
    <Styled.PillarsContainer_mobile {...props}>
        
      {pillarsContentBot.map((pillar) => {
        return (
          <Pillars_mobile
            title={pillar.title}
            text={pillar.text}
            button={pillar.button}
        ></Pillars_mobile>
        );
      })}
    </Styled.PillarsContainer_mobile>
  );
};

export default Pillars2_dnla;
