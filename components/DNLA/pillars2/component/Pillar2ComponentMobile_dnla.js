import React from "react";
import * as Styled from "./Pillar2Component.styled";
import Button from "../../../../basic_components/button/Button";

const Pillars2_component = ({ title, text, button }) => {
  return (
    <Styled.PillarComponentContainer
      className="pillarContainer"
    >
      <Styled.PillarComponentTitle>{title}</Styled.PillarComponentTitle>
      <p>
        <Styled.PillarText>{text}</Styled.PillarText>
      </p>
      <Button secondary style={{marginTop: "5%"}}>{button}</Button>
    </Styled.PillarComponentContainer>
  );
};

export default Pillars2_component;