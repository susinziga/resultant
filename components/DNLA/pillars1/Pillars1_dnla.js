import React from "react";
import Pillars_component from "../pillars1/component/Pillar1Component_dnla";
import Pillars_mobile from  "../pillars1/component/Pillar1ComponentMobile_dnla";
import * as Styled from "./Pillars1.styled";
import useTranslation from "next-translate/useTranslation";
import useSize from "../../../custom_hooks/useSize";

import Button from "../../../basic_components/button/Button";

import "swiper/css";

const Pillars_dnla = (props) => {
  const { t, lang } = useTranslation();

    const heading = t("dnla:dnla_pillarHeading");
  const pillarsContentBot = [
    { title: t("dnla:dnla_pillarTitle1"), text: t("dnla:dnla_pillarText1") },
    { title: t("dnla:dnla_pillarTitle2"), text: t("dnla:dnla_pillarText2") },
    { title: t("dnla:dnla_pillarTitle3"), text: t("dnla:dnla_pillarText3") },
    ];
    const pillarsContentBot2 = [ 
    { title: t("dnla:dnla_pillarTitle4"), text: t("dnla:dnla_pillarText4") },
    { title: t("dnla:dnla_pillarTitle5"), text: t("dnla:dnla_pillarText5") },
    { title: t("dnla:dnla_pillarTitle6"), text: t("dnla:dnla_pillarText6") },
    ]

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
        {pillarsContentBot.map((pillar) => {
          return (
            <Pillars_component
              title={pillar.title}
              text={pillar.text}
            ></Pillars_component>
          );
        })}
         </Styled.PillarsFlex1>
         <Styled.PillarsFlex2>
        {pillarsContentBot2.map((pillar) => {
          return (
            <Pillars_component
              title={pillar.title}
              text={pillar.text}
            ></Pillars_component>
          );
        })}
       
        </Styled.PillarsFlex2>
        </Styled.PillarsFlex>
        <Styled.ButtonContainer>
          <Button primary style={{padding: "20px 80px", fontSize: "1.4rem"}}>Želim preveriti ponudbo</Button>
      </Styled.ButtonContainer>
    </Styled.PillarsContainer>
  ) : (
    <Styled.PillarsContainer_mobile {...props}>
         <Styled.HeadingContainer>
            
            <Styled.Heading>{heading}</Styled.Heading>
        </Styled.HeadingContainer>
      {pillarsContentBotMobile.map((pillar) => {
        return (
          <Pillars_mobile
            title={pillar.title}
            text={pillar.text}
        ></Pillars_mobile>
        );
      })}
      <Styled.ButtonContainer>
          <Button primary style={{padding: "15px 50px"}}>Želim preveriti ponudbo</Button>
      </Styled.ButtonContainer>
    </Styled.PillarsContainer_mobile>
  );
};

export default Pillars_dnla;
