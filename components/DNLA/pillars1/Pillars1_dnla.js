import React from "react";
import Pillars_component from "../pillars1/component/Pillar1Component_dnla";
import * as Styled from "./Pillars1.styled";
import useTranslation from "next-translate/useTranslation";
import useSize from "../../../custom_hooks/useSize";


import "swiper/css";

const Pillars_dnla = (props) => {
  const { t, lang } = useTranslation();


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


  const { isDesktop } = useSize();

  return (
    <Styled.PillarsContainer {...props}>
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
    </Styled.PillarsContainer>
  )
};

export default Pillars_dnla;
