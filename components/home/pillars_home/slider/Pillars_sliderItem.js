import React from "react";
import Button from "../../../../basic_components/button/Button";

import { BodyText4, Title2 } from "../../../../basic_components/texts/Texts";
import * as Styled from "../Pillars_component.styled";

const Pillars_sliderItem = ({ title, text, link, button }) => {
  return (
    <Styled.PillarComponentContainer className="pillarSwiper">
      <Styled.PillarComponentTitle>{title}</Styled.PillarComponentTitle>
      <p>
        <BodyText4 dangerouslySetInnerHTML={{ __html: text }}></BodyText4>
      </p>
      <Button href={link} secondary>
        {button}
      </Button>
    </Styled.PillarComponentContainer>
  );
};

export default Pillars_sliderItem;
