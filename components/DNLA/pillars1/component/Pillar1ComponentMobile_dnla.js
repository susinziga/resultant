import React from "react";
import * as Styled from "./Pillar1Component.styled";

const Pillars_component = ({ title, text }) => {
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

export default Pillars_component;