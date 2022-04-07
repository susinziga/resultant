import React from "react";
import * as Styled from "./Pillar2Component.styled";

const Pillars2_component = ({ title, text }) => {
  return (
    <Styled.PillarComponentContainer
      className="pillarContainer"
    >
      <Styled.PillarComponentTitle>{title}</Styled.PillarComponentTitle>
      <p>
        <Styled.PillarText>{text}</Styled.PillarText>
      </p>
    
    </Styled.PillarComponentContainer>
  );
};

export default Pillars2_component;